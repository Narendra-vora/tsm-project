"use client";
import React, { useEffect, useRef, useState } from "react";

export function useScrollAnim(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export function FadeUp({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = useScrollAnim();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(38px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function HoverCard({ children, style = {}, scale = 1.045, className = "" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? `scale(${scale})` : "scale(1)",
        boxShadow: hovered
          ? "0 16px 48px rgba(11,71,123,0.18)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease",
        cursor: "pointer",
        borderRadius: "inherit",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
