export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect & Configure",
            description:
                "Connect your Hedera wallet, enter the amount, select your destination chain and asset. One interface, one connection.",
        },
        {
            number: "02",
            title: "Swap on Hedera",
            description:
                "ChunkyBar orchestrates a HBAR → wHBAR swap via SaucerSwap with enforced slippage protection and real-time monitoring.",
        },
        {
            number: "03",
            title: "Bridge via Hashport",
            description:
                "wHBAR is bridged to the destination EVM chain using Hashport's state-proof-verified bridge with cryptographic finality.",
        },
        {
            number: "04",
            title: "Settle & Deliver",
            description:
                "The bridged asset is swapped to your target token on the destination chain and delivered directly to your wallet.",
        },
    ];

    return (
        <section id="how-it-works" className="relative py-28 section-glow">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-p2 uppercase tracking-widest text-primary-orange mb-3">
                        How It Works
                    </p>
                    <h2 className="text-h2 text-foreground mb-4">
                        Four Steps, One Flow
                    </h2>
                    <p className="text-p1 text-text-secondary max-w-2xl mx-auto">
                        From HBAR to ETH in a single confirmed transaction. No manual
                        bridging, no fragmented UIs.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
                        style={{
                            background:
                                "linear-gradient(to bottom, transparent, rgba(255,138,101,0.25) 20%, rgba(255,138,101,0.25) 80%, transparent)",
                        }}
                    />

                    <div className="flex flex-col gap-8">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="relative flex gap-6 sm:gap-8 items-start group"
                            >
                                {/* Step Number */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border border-black/8 bg-[#FAFAFA] group-hover:border-primary-orange/40 transition-colors duration-300 shadow-sm">
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{ backgroundImage: "var(--gradient-orange)" }}
                                    >
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className="glass-card flex-1 p-6">
                                    <h3 className="text-h4 text-foreground mb-2">{step.title}</h3>
                                    <p className="text-p2 text-text-secondary leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
