"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <footer id="about" className="relative border-t border-black/5 py-16">
            <div
                ref={ref}
                className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logoblack.webp"
                                alt="ChunkyBar"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                            <span className="text-lg font-semibold text-foreground">
                                ChunkyBar
                            </span>
                        </div>
                        <p className="text-p2 text-text-tertiary max-w-sm leading-relaxed">
                            Non-custodial cross-chain payment rails for the Hedera ecosystem.
                            Swap, bridge, and settle in one atomic transaction.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
                            Protocol
                        </h4>
                        <ul className="space-y-3">
                            {["Features", "How It Works", "Whitepaper", "Security"].map(
                                (link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-p2 text-text-tertiary hover:text-foreground transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
                            Ecosystem
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Hedera", href: "https://hedera.com" },
                                {
                                    label: "SaucerSwap",
                                    href: "https://saucerswap.finance",
                                },
                                {
                                    label: "Hashport",
                                    href: "https://hashport.network",
                                },
                                { label: "Uniswap", href: "https://uniswap.org" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-p2 text-text-tertiary hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-40"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-p2 text-text-tertiary">
                        © 2026 ChunkyBar. Built for the Hedera Hackathon.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-text-tertiary hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-text-tertiary hover:text-foreground transition-colors"
                            aria-label="Twitter"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
