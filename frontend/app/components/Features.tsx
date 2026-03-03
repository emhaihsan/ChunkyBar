const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: "Non-Custodial by Design",
        description:
            "Your funds stay in your wallet throughout the entire process. ChunkyBar orchestrates transfers through smart contracts without ever taking custody of assets.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2.5 2.5L16 9" />
            </svg>
        ),
        title: "Atomic Transactions",
        description:
            "All-or-nothing execution. Every step — swap, bridge, settle — completes successfully, or the entire operation reverts and funds are returned.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        title: "End-to-End Auditability",
        description:
            "Every event — initiation, swap, bridge, settlement — is recorded on Hedera Consensus Service, providing an immutable audit trail for compliance.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2" />
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
            </svg>
        ),
        title: "Ecosystem-First",
        description:
            "ChunkyBar is a customer of SaucerSwap, Hashport, and Uniswap — generating on-chain volume for all partners. Aligned incentives, not competition.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                <line x1="12" y1="11" x2="12" y2="17" />
            </svg>
        ),
        title: "Institutional Ready",
        description:
            "Built with Hedera's OFAC compliance framework, Council governance model, and fixed ultra-low fees. Ready for regulated institutional deployments.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: "Smart-Account Ready",
        description:
            "Forward-compatible with HIP-1340 (EIP-7702 adaptation). When available, wrap, swap, and bridge will execute as a single user-initiated operation.",
    },
];

export default function Features() {
    return (
        <section id="features" className="relative py-28 section-glow">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
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
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="glass-card p-7 flex flex-col gap-4"
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="text-h4 text-foreground">{feature.title}</h3>
                            <p className="text-p2 text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
