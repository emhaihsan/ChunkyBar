"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTA() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="cta" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    ref={ref}
                    className={`relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center transition-all duration-800 ease-out ${isVisible
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-10 scale-[0.97]"
                        }`}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,184,77,0.10) 0%, rgba(255,138,101,0.08) 40%, rgba(255,107,74,0.06) 100%)",
                    }}
                >
                    {/* Glass overlay border */}
                    <div className="absolute inset-0 rounded-3xl border border-black/5 pointer-events-none" />

                    {/* Subtle glow */}
                    <div
                        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-50 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(255,138,101,0.15) 0%, transparent 70%)",
                        }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-h2 text-foreground mb-4">
                            Ready to{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "var(--gradient-orange)" }}
                            >
                                Simplify
                            </span>{" "}
                            Cross-Chain?
                        </h2>
                        <p className="text-p1 text-text-secondary max-w-xl mx-auto mb-10">
                            Experience one-click cross-chain payments from Hedera. No more
                            juggling multiple dApps, bridges, and DEXs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/swap" className="btn-primary text-base px-10 py-4">
                                Launch App
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#" className="btn-secondary text-base px-10 py-4">
                                Read Whitepaper
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
