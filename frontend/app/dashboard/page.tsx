"use client";

import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

const activeSteps = [
    { label: "Initiated", status: "done", time: "14:32:05" },
    { label: "Swapping", status: "done", time: "14:32:08" },
    { label: "Bridging", status: "active", time: "14:32:15" },
    { label: "Settling", status: "pending", time: "—" },
    { label: "Complete", status: "pending", time: "—" },
];

const transactions = [
    {
        id: "0x8f3a...c2d1",
        from: "10,000 HBAR",
        to: "0.9812 ETH",
        chain: "Ethereum",
        status: "Complete",
        time: "2 min ago",
    },
    {
        id: "0x4b2e...a7f3",
        from: "5,000 HBAR",
        to: "12.45 MATIC",
        chain: "Polygon",
        status: "Complete",
        time: "15 min ago",
    },
    {
        id: "0x1d9c...e5b8",
        from: "25,000 HBAR",
        to: "2.1 ETH",
        chain: "Arbitrum",
        status: "Complete",
        time: "1 hr ago",
    },
    {
        id: "0x7a6f...b4d2",
        from: "8,000 HBAR",
        to: "1,950 USDC",
        chain: "Ethereum",
        status: "Failed",
        time: "3 hrs ago",
    },
];

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <Navbar />
            <div className="page-shell">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="text-h3 text-foreground mb-2">Dashboard</h1>
                        <p className="text-p2 text-text-secondary">
                            Track your cross-chain transactions in real time.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {[
                            { label: "Total Volume", value: "$48,230" },
                            { label: "Transactions", value: "24" },
                            { label: "Avg. Settlement", value: "3m 42s" },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-card p-5">
                                <p className="text-p2 text-text-secondary mb-1">
                                    {stat.label}
                                </p>
                                <p
                                    className="text-2xl font-bold bg-clip-text text-transparent"
                                    style={{ backgroundImage: "var(--gradient-orange)" }}
                                >
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Active Transaction */}
                    <div className="glass-card p-6 mb-10">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-h4 text-foreground">Active Transaction</h2>
                                <p className="text-p2 text-text-tertiary mt-0.5">
                                    ID: 0x8f3a...c2d1
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-orange" />
                                </span>
                                <span className="text-p2 font-medium text-primary-orange">
                                    In Progress
                                </span>
                            </div>
                        </div>

                        {/* Progress Steps */}
                        <div className="flex items-center justify-between mb-8">
                            {activeSteps.map((step, i) => (
                                <div key={step.label} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${step.status === "done"
                                                ? "border-primary-orange bg-primary-orange/10 text-primary-orange"
                                                : step.status === "active"
                                                    ? "border-primary-orange bg-primary-orange text-white animate-pulse"
                                                    : "border-black/10 bg-background text-text-tertiary"
                                                }`}
                                        >
                                            {step.status === "done" ? (
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                >
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <span>{String(i + 1).padStart(2, "0")}</span>
                                            )}
                                        </div>
                                        <span
                                            className={`text-xs mt-2 font-medium ${step.status === "active"
                                                ? "text-primary-orange"
                                                : step.status === "done"
                                                    ? "text-foreground"
                                                    : "text-text-tertiary"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                        <span className="text-xs text-text-tertiary mt-0.5">
                                            {step.time}
                                        </span>
                                    </div>
                                    {i < activeSteps.length - 1 && (
                                        <div
                                            className={`flex-1 h-0.5 mx-2 rounded-full mt-[-1.75rem] ${step.status === "done"
                                                ? "bg-primary-orange"
                                                : "bg-black/8"
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Transaction Details */}
                        <div className="rounded-2xl bg-background border border-black/6 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { label: "Sending", value: "10,000 HBAR" },
                                { label: "Receiving", value: "0.9812 ETH" },
                                { label: "Destination", value: "Ethereum" },
                                { label: "Est. Time", value: "~4 min" },
                            ].map((detail) => (
                                <div key={detail.label}>
                                    <p className="text-xs text-text-tertiary mb-0.5">
                                        {detail.label}
                                    </p>
                                    <p className="text-sm font-semibold text-foreground">
                                        {detail.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div>
                        <h2 className="text-h4 text-foreground mb-4">
                            Transaction History
                        </h2>
                        <div className="glass-card overflow-hidden">
                            {/* Table Header */}
                            <div className="hidden sm:grid grid-cols-6 gap-4 px-6 py-3 border-b border-black/5 text-p2 text-text-secondary font-medium">
                                <span>Transaction ID</span>
                                <span>Sent</span>
                                <span>Received</span>
                                <span>Chain</span>
                                <span>Status</span>
                                <span className="text-right">Time</span>
                            </div>

                            {/* Table Rows */}
                            {transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4 px-6 py-4 border-b border-black/3 hover:bg-black/2 transition-colors"
                                >
                                    <span className="text-p2 font-mono text-foreground">
                                        {tx.id}
                                    </span>
                                    <span className="text-p2 text-foreground">{tx.from}</span>
                                    <span className="text-p2 text-foreground font-medium">
                                        {tx.to}
                                    </span>
                                    <span className="text-p2 text-text-secondary">{tx.chain}</span>
                                    <span>
                                        <span
                                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.status === "Complete"
                                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                                : "bg-red-50 text-red-700 border border-red-200"
                                                }`}
                                        >
                                            {tx.status === "Complete" ? (
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <path d="M18 6L6 18M6 6l12 12" />
                                                </svg>
                                            )}
                                            {tx.status}
                                        </span>
                                    </span>
                                    <span className="text-p2 text-text-tertiary text-right">
                                        {tx.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
