import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18"
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

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/60 px-4 py-1.5 mb-8 backdrop-blur-sm shadow-sm">
                    <Image
                        src="/logo-black.png"
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
                <h1 className="text-h1 text-foreground mb-6 max-w-4xl mx-auto">
                    Cross-Chain Payments,{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "var(--gradient-orange)" }}
                    >
                        One Transaction
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-p1 text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                    Swap, bridge, and settle from Hedera to any EVM network in a single
                    atomic operation. Non-custodial, auditable, and institutional-ready.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="/swap" className="btn-primary text-base px-8 py-3.5">
                        Get Started
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
                    <a href="#features" className="btn-secondary text-base px-8 py-3.5">
                        Explore Features
                    </a>
                </div>

                {/* Stats Row */}
                <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
                    {[
                        { value: "< 5 min", label: "Settlement Time" },
                        { value: "~0.75%", label: "Total Fees" },
                        { value: "100%", label: "Non-Custodial" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
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

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
        </section>
    );
}
