"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
    {
        icon: "/icons/noncustodial.webp",
        title: "Non-Custodial by Design",
        description:
            "Your funds stay in your wallet throughout the entire process. ChunkyBar orchestrates transfers through smart contracts without ever taking custody of assets.",
    },
    {
        icon: "/icons/atomic transactions.webp",
        title: "Atomic Transactions",
        description:
            "All-or-nothing execution. Every step (swap, bridge, settle) completes successfully, or the entire operation reverts and funds are returned.",
    },
    {
        icon: "/icons/endtoendaudit.webp",
        title: "End-to-End Auditability",
        description:
            "Every event (initiation, swap, bridge, settlement) is recorded on Hedera Consensus Service, providing an immutable audit trail for compliance.",
    },
    {
        icon: "/icons/ecosystem.webp",
        title: "Ecosystem-First",
        description:
            "ChunkyBar is a customer of SaucerSwap, Hashport, and Uniswap, generating on-chain volume for all partners. Aligned incentives, not competition.",
    },
    {
        icon: "/icons/institutional.webp",
        title: "Institutional Ready",
        description:
            "Built with Hedera's OFAC compliance framework, Council governance model, and fixed ultra-low fees. Ready for regulated institutional deployments.",
    },
    {
        icon: "/icons/smartaccount.webp",
        title: "Smart-Account Ready",
        description:
            "Forward-compatible with HIP-1340 (EIP-7702 adaptation). When available, wrap, swap, and bridge will execute as a single user-initiated operation.",
    },
];

export default function Features() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

    return (
        <section id="features" className="relative py-28 section-glow">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-p2 uppercase tracking-widest text-primary-orange mb-3">
                        Features
                    </p>
                    <h2 className="text-h2 text-foreground mb-4">
                        Why ChunkyBar?
                    </h2>
                    <p className="text-p1 text-text-secondary max-w-2xl mx-auto">
                        A purpose-built payment primitive that eliminates the interoperability
                        tax between Hedera and EVM ecosystems.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <FeatureCard key={feature.title} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }: { feature: typeof features[number]; index: number }) {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`glass-card p-7 flex flex-col gap-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="feature-icon mb-2">
                <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                />
            </div>
            <h3 className="text-h4 text-foreground">{feature.title}</h3>
            <p className="text-p2 text-text-secondary leading-relaxed">
                {feature.description}
            </p>
        </div>
    );
}

