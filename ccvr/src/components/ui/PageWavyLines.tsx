"use client";

import { useEffect, useRef } from "react";

// All curves stay safely within viewBox 0 0 1400 400
// Y range: 80–320, X range: 0–1400 (no negative, no overflow)
const variants: Record<string, string[]> = {
  arch: [
    "M0,280 C200,260 400,180 700,150 C1000,120 1200,160 1400,200",
    "M0,310 C200,290 400,210 700,180 C1000,150 1200,190 1400,230",
    "M0,340 C200,320 400,240 700,210 C1000,180 1200,220 1400,260",
  ],
  wave: [
    "M0,120 C200,100 400,180 700,240 C1000,300 1200,220 1400,160",
    "M0,150 C200,130 400,210 700,270 C1000,330 1200,250 1400,190",
    "M0,180 C200,160 400,240 700,300 C1000,360 1200,280 1400,220",
  ],
  flow: [
    "M0,100 C200,130 500,200 700,240 C900,280 1100,300 1400,320",
    "M0,130 C200,160 500,230 700,270 C900,310 1100,330 1400,350",
    "M0,160 C200,190 500,260 700,300 C900,340 1100,360 1400,380",
  ],
  rise: [
    "M0,320 C300,260 600,160 700,140 C800,160 1100,260 1400,320",
    "M0,350 C300,290 600,190 700,170 C800,190 1100,290 1400,350",
    "M0,380 C300,320 600,220 700,200 C800,220 1100,320 1400,380",
  ],
};

export function PageWavyLines({
  variant = "arch",
}: {
  variant?: "arch" | "wave" | "flow" | "rise";
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const animFrameRef = useRef<number>(0);

  const paths = variants[variant] || variants.arch;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll<SVGPathElement>("path");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const baseDuration = 2;
    const stagger = 0.15;
    let maxEnd = 0;

    lines.forEach((line, i) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;

      if (prefersReduced) {
        line.style.strokeDashoffset = "0";
        return;
      }

      line.style.strokeDashoffset = `${length}`;
      const delay = i * stagger;
      maxEnd = Math.max(maxEnd, delay + baseDuration);

      requestAnimationFrame(() => {
        line.style.transition = `stroke-dashoffset ${baseDuration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
        line.style.strokeDashoffset = "0";
      });
    });

    if (prefersReduced) return;

    const timeoutId = setTimeout(() => {
      lines.forEach((line) => {
        line.style.transition = "none";
      });

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const t = (timestamp - startTime) / 1000;
        const ramp = Math.min(t / 2, 1);

        lines.forEach((line, i) => {
          const phase = i * 0.5;
          const amp = (2 + i * 0.3) * ramp;
          const speed = 0.3 + i * 0.02;
          const dy = Math.sin(t * speed + phase) * amp;
          line.setAttribute("transform", `translate(0, ${dy})`);
        });

        animFrameRef.current = requestAnimationFrame(animate);
      };

      animFrameRef.current = requestAnimationFrame(animate);
    }, maxEnd * 1000 + 100);

    return () => {
      clearTimeout(timeoutId);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [paths]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 400"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 top-0 h-[350px] w-full"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#B1121B"
          strokeWidth={1.4}
          strokeLinecap="round"
          opacity={0.35}
        />
      ))}
    </svg>
  );
}
