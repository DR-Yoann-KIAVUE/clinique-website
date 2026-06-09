"use client";

import { useEffect, useRef } from "react";

const paths = [
  "M-100,520 C100,480 300,350 500,280 C700,210 900,180 1100,120 C1300,60 1500,30 1700,10",
  "M-100,550 C100,510 300,385 500,315 C700,245 900,210 1100,155 C1300,95 1500,60 1700,40",
  "M-100,580 C100,540 300,420 500,350 C700,280 900,245 1100,190 C1300,130 1500,95 1700,70",
  "M-100,610 C100,570 300,455 500,385 C700,315 900,280 1100,225 C1300,165 1500,130 1700,100",
  "M-100,640 C100,600 300,490 500,420 C700,350 900,315 1100,260 C1300,200 1500,165 1700,130",
  "M-100,670 C100,630 300,525 500,455 C700,385 900,350 1100,295 C1300,235 1500,200 1700,160",
  "M-100,700 C100,660 300,560 500,490 C700,420 900,385 1100,330 C1300,270 1500,235 1700,190",
];

export function WavyLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll<SVGPathElement>("path");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lengths: number[] = [];

    // Phase 1: draw-in
    lines.forEach((line, i) => {
      const length = line.getTotalLength();
      lengths.push(length);
      line.style.strokeDasharray = `${length}`;

      if (prefersReduced) {
        line.style.strokeDashoffset = "0";
        return;
      }

      line.style.strokeDashoffset = `${length}`;

      requestAnimationFrame(() => {
        line.style.transition = `stroke-dashoffset ${1.6 + i * 0.15}s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`;
        line.style.strokeDashoffset = "0";
      });
    });

    if (prefersReduced) return;

    // Phase 2: gentle floating sway after draw-in completes
    const drawDuration = (1.6 + (paths.length - 1) * 0.15 + (paths.length - 1) * 0.1) * 1000;

    const timeoutId = setTimeout(() => {
      // Keep strokeDasharray/offset as-is (already at 0 offset = fully drawn).
      // Only clear the transition so it doesn't interfere with transforms.
      lines.forEach((line) => {
        line.style.transition = "none";
      });

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;

        // Ease-in the sway amplitude over the first 2 seconds to avoid any pop
        const ramp = Math.min(elapsed / 2, 1);

        lines.forEach((line, i) => {
          const phase = i * 0.4;
          const amp = (3 + i * 0.5) * ramp;
          const speed = 0.3 + i * 0.02;
          const dy = Math.sin(elapsed * speed + phase) * amp;

          line.setAttribute("transform", `translate(0, ${dy})`);
        });

        animFrameRef.current = requestAnimationFrame(animate);
      };

      animFrameRef.current = requestAnimationFrame(animate);
    }, drawDuration + 200);

    return () => {
      clearTimeout(timeoutId);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1600 700"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#B1121B"
          strokeWidth={1.3}
          strokeLinecap="round"
          opacity={0.3 + i * 0.05}
        />
      ))}
    </svg>
  );
}
