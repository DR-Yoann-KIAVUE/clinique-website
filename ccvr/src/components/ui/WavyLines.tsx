"use client";

import { useEffect, useRef } from "react";

// Base Y values for each line (6 lines — last line is now the ScrollLine)
const baseLines = [
  [520, 480, 350, 280, 210, 180, 120, 60, 30, 10],
  [550, 510, 385, 315, 245, 210, 155, 95, 60, 40],
  [580, 540, 420, 350, 280, 245, 190, 130, 95, 70],
  [610, 570, 455, 385, 315, 280, 225, 165, 130, 100],
  [640, 600, 490, 420, 350, 315, 260, 200, 165, 130],
  [670, 630, 525, 455, 385, 350, 295, 235, 200, 160],
];

const xPoints = [-100, 100, 300, 500, 700, 900, 1100, 1300, 1500, 1700];

function buildPath(yValues: number[]): string {
  let d = `M${xPoints[0]},${yValues[0]}`;
  for (let j = 1; j < xPoints.length; j += 3) {
    const end = Math.min(j + 2, xPoints.length - 1);
    if (j + 2 <= xPoints.length - 1) {
      d += ` C${xPoints[j]},${yValues[j]} ${xPoints[j + 1]},${yValues[j + 1]} ${xPoints[j + 2]},${yValues[j + 2]}`;
    } else {
      d += ` L${xPoints[end]},${yValues[end]}`;
    }
  }
  return d;
}

export function WavyLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const animFrameRef = useRef<number>(0);
  const drawnRef = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll<SVGPathElement>("path");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Phase 1: draw-in with consistent timing
    const baseDuration = 1.8;
    const stagger = 0.12;
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
      const duration = baseDuration;
      maxEnd = Math.max(maxEnd, delay + duration);

      requestAnimationFrame(() => {
        line.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
        line.style.strokeDashoffset = "0";
      });
    });

    if (prefersReduced) return;

    // Phase 2: breathing wavy — morph the path d attribute
    const timeoutId = setTimeout(() => {
      drawnRef.current = true;

      lines.forEach((line) => {
        line.style.transition = "none";
      });

      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const t = (timestamp - startTime) / 1000;
        const ramp = Math.min(t / 2.5, 1);

        lines.forEach((line, i) => {
          const newY = baseLines[i].map((baseY, j) => {
            // Each point oscillates with unique phase based on line index + point index
            const amp = (3 + i * 0.6 + j * 0.3) * ramp;
            const speed = 0.4 + i * 0.03;
            const phase = i * 0.5 + j * 0.7;
            return baseY + Math.sin(t * speed + phase) * amp;
          });
          line.setAttribute("d", buildPath(newY));
        });

        animFrameRef.current = requestAnimationFrame(animate);
      };

      animFrameRef.current = requestAnimationFrame(animate);
    }, maxEnd * 1000 + 100);

    return () => {
      clearTimeout(timeoutId);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Build initial static paths
  const initialPaths = baseLines.map((yValues) => buildPath(yValues));

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1600 700"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {initialPaths.map((d, i) => (
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
