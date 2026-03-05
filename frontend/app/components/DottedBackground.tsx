"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Interactive dotted grid background — covers the entire document.
 * All dots always visible. Cursor proximity causes scale up/down.
 */
export default function DottedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const rafRef = useRef<number>(0);
    const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

    const DOT_SPACING = 28;
    const DOT_RADIUS = 1.5;
    const DOT_HOVER_RADIUS = 4.5;
    const INFLUENCE_RADIUS = 140;

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { w: width, h: height, dpr } = sizeRef.current;
        const { x: mx, y: my } = mouseRef.current;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cols = Math.ceil(width / DOT_SPACING) + 1;
        const rows = Math.ceil(height / DOT_SPACING) + 1;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = c * DOT_SPACING;
                const y = r * DOT_SPACING;

                const dx = x - mx;
                const dy = y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let radius = DOT_RADIUS;
                let alpha = 0.18;

                if (dist < INFLUENCE_RADIUS) {
                    const t = 1 - dist / INFLUENCE_RADIUS;
                    const ease = t * t * (3 - 2 * t);
                    radius = DOT_RADIUS + (DOT_HOVER_RADIUS - DOT_RADIUS) * ease;
                    alpha = 0.18 + 0.5 * ease;
                }

                ctx.beginPath();
                ctx.arc(x * dpr, y * dpr, radius * dpr, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 138, 101, ${alpha})`;
                ctx.fill();
            }
        }

        rafRef.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const w = window.innerWidth;
            // Use scrollHeight so the canvas covers the full document
            const h = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            sizeRef.current = { w, h, dpr };
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Use pageX/pageY so position is relative to entire document
            mouseRef.current = { x: e.pageX, y: e.pageY };
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(draw);

        const ro = new ResizeObserver(resize);
        ro.observe(document.body);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
            ro.disconnect();
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                pointerEvents: "none",
                zIndex: -1,
            }}
        />
    );
}
