"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Parallax scroll hook — applies a translateY based on scroll position.
 * @param speed - multiplier for parallax effect (0.05 = subtle, 0.2 = strong)
 */
export function useParallax(speed: number = 0.1) {
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Only apply when element is near viewport
        if (rect.bottom < -100 || rect.top > windowH + 100) return;
        const centerOffset = rect.top - windowH / 2;
        el.style.transform = `translateY(${centerOffset * speed}px)`;
    }, [speed]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial position
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return ref;
}
