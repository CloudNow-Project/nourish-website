"use client";

import { ReactNode } from "react";

interface TextSwipeAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number; // Animation duration in ms
  delay?: number; // Animation delay in ms
}

export function TextSwipeAnimation({ children, className = "", duration = 450, delay = 0 }: TextSwipeAnimationProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="group-hover:-translate-y-full group-hover:opacity-0 transition-all ease-in-out"
        style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
      <div
        className="absolute top-0 left-0 right-0 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out"
        style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
