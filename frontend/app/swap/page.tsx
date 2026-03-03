import Navbar from "../components/Navbar";

const chains = [
    { name: "Ethereum", icon: "⟠" },
    { name: "Polygon", icon: "⬡" },
    { name: "Arbitrum", icon: "◆" },
    { name: "Optimism", icon: "⊕" },
];

const routeSteps = [
    { label: "HBAR", sub: "Hedera" },
    { label: "wHBAR", sub: "SaucerSwap" },
    { label: "wHBAR", sub: "Hashport Bridge" },
    { label: "ETH", sub: "Uniswap" },
];

export default function SwapPage() {
    return (
        <>
            <Navbar />
            <div className="page-shell">
                <div className="mx-auto max-w-lg px-6 py-12">
                    {/* Page Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-h3 text-foreground mb-2">Cross-Chain Swap</h1>
                        <p className="text-p2 text-text-secondary">
                            One transaction. Hedera to any EVM network.
                        </p>
                    </div>

                    {/* Swap Card */}
                    <div className="glass-card p-6 space-y-6">
                        {/* From Section */}
                        <div>
                            <label className="text-p2 text-text-secondary mb-2 block">
                                You Send
                            </label>
                            <div className="flex items-center gap-3 rounded-2xl bg-background border border-black/6 px-4 py-3">
                                <div className="flex items-center gap-2 rounded-full bg-white border border-black/8 px-3 py-1.5 shadow-sm">
                                    <span className="text-lg">ℏ</span>
                                    <span className="text-sm font-semibold text-foreground">
                                        HBAR
                                    </span>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value="10,000"
                                    readOnly
                                    className="flex-1 bg-transparent text-right text-2xl font-semibold text-foreground outline-none"
                                />
                            </div>
                            <p className="text-p2 text-text-tertiary mt-1.5 text-right">
                                ≈ $2,450.00 USD
                            </p>
                        </div>

                        {/* Swap Arrow */}
                        <div className="flex justify-center">
                            <div className="w-10 h-10 rounded-full bg-white border border-black/8 flex items-center justify-center shadow-sm">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary-orange"
                                >
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* To Section */}
                        <div>
                            <label className="text-p2 text-text-secondary mb-2 block">
                                You Receive
                            </label>
                            <div className="flex items-center gap-3 rounded-2xl bg-background border border-black/6 px-4 py-3">
                                <div className="flex items-center gap-2 rounded-full bg-white border border-black/8 px-3 py-1.5 shadow-sm">
                                    <span className="text-lg">⟠</span>
                                    <span className="text-sm font-semibold text-foreground">
                                        ETH
                                    </span>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value="0.9812"
                                    readOnly
                                    className="flex-1 bg-transparent text-right text-2xl font-semibold text-foreground outline-none"
                                />
                            </div>
                            <p className="text-p2 text-text-tertiary mt-1.5 text-right">
                                ≈ $2,431.72 USD
                            </p>
                        </div>

                        {/* Destination Chain */}
                        <div>
                            <label className="text-p2 text-text-secondary mb-2 block">
                                Destination Chain
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {chains.map((chain, i) => (
                                    <button
                                        key={chain.name}
                                        className={`rounded-xl border px-3 py-2.5 text-center transition-all duration-200 ${i === 0
                                                ? "border-primary-orange/40 bg-primary-orange/8 text-foreground shadow-sm"
                                                : "border-black/6 bg-white text-text-secondary hover:border-primary-orange/30"
                                            }`}
                                    >
                                        <span className="text-lg block">{chain.icon}</span>
                                        <span className="text-xs font-medium mt-0.5 block">
                                            {chain.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Route Preview */}
                        <div className="rounded-2xl bg-background border border-black/6 p-4">
                            <p className="text-p2 text-text-secondary mb-3 font-medium">
                                Route Preview
                            </p>
                            <div className="flex items-center justify-between">
                                {routeSteps.map((step, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="text-center">
                                            <div className="text-sm font-semibold text-foreground">
                                                {step.label}
                                            </div>
                                            <div className="text-xs text-text-tertiary mt-0.5">
                                                {step.sub}
                                            </div>
                                        </div>
                                        {i < routeSteps.length - 1 && (
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-text-tertiary mx-1"
                                            >
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fee Breakdown */}
                        <div className="space-y-2 px-1">
                            {[
                                { label: "Swap Fee (SaucerSwap)", value: "0.30%" },
                                { label: "Bridge Fee (Hashport)", value: "0.20%" },
                                { label: "Settlement Fee (Uniswap)", value: "0.25%" },
                                { label: "ChunkyBar Fee", value: "Free" },
                            ].map((fee) => (
                                <div
                                    key={fee.label}
                                    className="flex justify-between text-p2"
                                >
                                    <span className="text-text-secondary">{fee.label}</span>
                                    <span className="text-foreground font-medium">
                                        {fee.value}
                                    </span>
                                </div>
                            ))}
                            <div className="border-t border-black/6 pt-2 mt-2 flex justify-between text-sm font-semibold">
                                <span className="text-text-secondary">Total Fees</span>
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: "var(--gradient-orange)" }}
                                >
                                    ~0.75%
                                </span>
                            </div>
                        </div>

                        {/* Confirm Button */}
                        <button className="btn-primary w-full text-base py-4">
                            Connect Wallet & Confirm
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
                        </button>

                        {/* Info */}
                        <p className="text-xs text-text-tertiary text-center">
                            Non-custodial. Your funds never leave your control.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
