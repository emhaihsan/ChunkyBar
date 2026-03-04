"use client";

import { useAuth } from "./AuthProvider";
import { useState, useEffect } from "react";

const wallets = [
    {
        id: "hashpack",
        name: "HashPack",
        description: "Hedera native wallet",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#8B5CF6" />
                <text x="14" y="19" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>
            </svg>
        ),
        tag: "Recommended",
    },
    {
        id: "metamask",
        name: "MetaMask",
        description: "Popular EVM wallet",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#F6851B" />
                <path d="M20 8L15 11l1-3.5L20 8z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.5" />
                <path d="M8 8l5 3.1L12 7.5 8 8z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5" />
                <path d="M18.5 17.5L17 20l3.5 1-.5-3.5h-1.5z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5" />
                <path d="M8 17.5l-.5 3.5 3.5-1-1.5-2.5H8z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.5" />
            </svg>
        ),
        tag: null,
    },
    {
        id: "walletconnect",
        name: "WalletConnect",
        description: "Scan with mobile wallet",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#3B99FC" />
                <path d="M9.5 12c2.5-2.5 6.5-2.5 9 0l.3.3c.1.1.1.3 0 .4l-1 1c-.1.1-.2.1-.2 0l-.4-.4c-1.8-1.8-4.7-1.8-6.5 0l-.4.4c-.1.1-.2.1-.2 0l-1-1c-.1-.1-.1-.3 0-.4l.4-.3z" fill="white" />
                <path d="M20.5 14l.9.9c.1.1.1.3 0 .4l-4 4c-.2.2-.4.2-.5 0l-2.9-2.8c0 0-.1 0-.1 0l-2.8 2.8c-.2.2-.4.2-.5 0l-4-4c-.1-.1-.1-.3 0-.4l.9-.9c.1-.1.3-.1.4 0l2.8 2.8c0 0 .1 0 .1 0l2.8-2.8c.2-.2.4-.2.5 0l2.9 2.8c0 0 .1 0 .1 0l2.8-2.8c.2-.1.4-.1.5 0z" fill="white" />
            </svg>
        ),
        tag: null,
    },
];

export default function ConnectWalletModal() {
    const { showConnectModal, closeConnectModal, connect } = useAuth();
    const [connecting, setConnecting] = useState<string | null>(null);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (showConnectModal) {
            // Trigger enter animation after mount
            requestAnimationFrame(() => {
                setAnimateIn(true);
            });
        } else {
            setAnimateIn(false);
            setConnecting(null);
        }
    }, [showConnectModal]);

    useEffect(() => {
        if (!showConnectModal) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeConnectModal();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [showConnectModal, closeConnectModal]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showConnectModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showConnectModal]);

    if (!showConnectModal) return null;

    const handleConnect = (walletId: string) => {
        setConnecting(walletId);
        setTimeout(() => {
            connect(walletId);
        }, 800);
    };

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${animateIn ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                onClick={closeConnectModal}
            />

            {/* Modal */}
            <div
                className={`relative z-10 w-full max-w-md mx-4 transition-all duration-300 ease-out ${animateIn
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-95 translate-y-4 opacity-0"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={closeConnectModal}
                    className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-white border border-black/8 shadow-lg flex items-center justify-center text-text-secondary hover:text-foreground transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="glass-card p-8 shadow-2xl border border-white/20" style={{ background: "rgba(250, 250, 250, 0.95)", backdropFilter: "blur(32px)" }}>
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-orange/8 border border-primary-orange/15 mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
                            </span>
                            <span className="text-xs font-semibold text-primary-orange tracking-wide uppercase">
                                Secure Connection
                            </span>
                        </div>
                        <h2 className="text-h4 text-foreground mb-2">Connect Your Wallet</h2>
                        <p className="text-p2 text-text-secondary">
                            Choose your preferred wallet to start making cross-chain swaps on Hedera.
                        </p>
                    </div>

                    {/* Wallet Options */}
                    <div className="space-y-3 mb-6">
                        {wallets.map((wallet) => (
                            <button
                                key={wallet.id}
                                onClick={() => handleConnect(wallet.id)}
                                disabled={connecting !== null}
                                className={`wallet-option ${connecting === wallet.id ? "wallet-option-connecting" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="wallet-icon-wrap">
                                        {wallet.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-foreground">
                                                {wallet.name}
                                            </span>
                                            {wallet.tag && (
                                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-orange/10 text-primary-orange">
                                                    {wallet.tag}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs text-text-tertiary">
                                            {wallet.description}
                                        </span>
                                    </div>
                                </div>

                                {connecting === wallet.id ? (
                                    <div className="w-5 h-5 border-2 border-primary-orange border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-text-tertiary"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Footer info */}
                    <div className="text-center space-y-2">
                        <p className="text-xs text-text-tertiary">
                            Non-custodial. Your keys, your control.
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-text-tertiary">
                            <span className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                                Encrypted
                            </span>
                            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                            <span className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                Audited
                            </span>
                            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                            <span className="flex items-center gap-1.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                Instant
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
