"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export default function Hero() {
    const [visible, setVisible] = useState(false);
    const { isConnected, openConnectModal } = useAuth();

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
        >
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="orb-1 absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-70"
                    style={{ background: "var(--gradient-hero-orb1)" }}
                />
                <div
                    className="orb-2 absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full opacity-60"
                    style={{ background: "var(--gradient-hero-orb2)" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-40"
                    style={{ background: "var(--gradient-glow)" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Content — 2/3 */}
                    <div
                        className={`flex-[2] text-center lg:text-left transition-all duration-1000 ease-out ${visible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                            }`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/60 px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm">
                            <Image
                                src="/logoblack.webp"
                                alt=""
                                width={20}
                                height={20}
                                className="h-5 w-auto"
                            />
                            <span className="text-p2 text-text-secondary">
                                Built on Hedera Hashgraph
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-h1 text-foreground mb-6 max-w-4xl">
                            Cross-Chain Payments,{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "var(--gradient-orange)" }}
                            >
                                One Transaction
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-p1 text-text-secondary max-w-xl mb-10 leading-relaxed">
                            Swap, bridge, and settle from Hedera to any EVM network in a single
                            atomic operation. Non-custodial, auditable, and institutional-ready.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            {isConnected ? (
                                <a href="/dashboard" className="btn-primary text-base px-8 py-3.5">
                                    Go to Dashboard
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ) : (
                                <button onClick={openConnectModal} className="btn-primary text-base px-8 py-3.5">
                                    Get Started
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                            <a href="#features" className="btn-secondary text-base px-8 py-3.5">
                                Explore Features
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
                            {[
                                { value: "< 5 min", label: "Settlement Time" },
                                { value: "~0.75%", label: "Total Fees" },
                                { value: "100%", label: "Non-Custodial" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div
                                        className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
                                        style={{ backgroundImage: "var(--gradient-orange)" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-p2 text-text-tertiary mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content — 1/3 Image */}
                    <div
                        className={`flex-[1] w-full max-w-md lg:max-w-none flex items-center justify-center transition-all duration-1000 ease-out delay-300 ${visible
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 translate-x-12 scale-95"
                            }`}
                    >
                        <div className="hero-image-container relative">
                            <Image
                                src="/logo-hero.webp"
                                alt="ChunkyBar 3D Logo"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-auto max-w-[420px] lg:max-w-[500px] drop-shadow-2xl"
                                style={{
                                    filter: "drop-shadow(0 30px 60px rgba(255, 138, 101, 0.25))",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
        </section>
    );
}
