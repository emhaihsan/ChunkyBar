"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isConnected, walletAddress, disconnect, openConnectModal } = useAuth();
    const pathname = usePathname();

    const isLandingPage = pathname === "/";

    const landingLinks = [
        { label: "Features", href: "/#features" },
        { label: "How It Works", href: "/#how-it-works" },
    ];

    const appLinks = [
        { label: "Swap", href: "/swap" },
        { label: "Dashboard", href: "/dashboard" },
    ];

    // On landing page: show landing links (+ app links if connected)
    // On inner pages: show app links only
    const navLinks = isLandingPage
        ? isConnected
            ? [...landingLinks, ...appLinks]
            : landingLinks
        : appLinks;

    const isActiveLink = (href: string) => {
        if (href.startsWith("/#")) return false;
        return pathname === href;
    };

    return (
        <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logoblack.webp"
                            alt="ChunkyBar"
                            width={40}
                            height={40}
                            className="h-9 w-auto"
                        />
                        <span className="text-lg font-semibold tracking-tight text-foreground">
                            ChunkyBar
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${isActiveLink(link.href)
                                        ? "text-primary-orange"
                                        : "text-text-secondary hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {isActiveLink(link.href) && (
                                    <span className="block h-0.5 mt-0.5 rounded-full bg-primary-orange" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        {isConnected ? (
                            <>
                                {/* Wallet Badge */}
                                <div className="wallet-badge">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span className="text-xs font-semibold text-foreground">
                                        {walletAddress}
                                    </span>
                                </div>
                                <button
                                    onClick={disconnect}
                                    className="btn-secondary text-sm px-4 py-2"
                                >
                                    Disconnect
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={openConnectModal}
                                className="btn-primary text-sm px-5 py-2.5"
                            >
                                Launch App
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-6 rounded bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 rounded bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 rounded bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${isActiveLink(link.href)
                                        ? "text-primary-orange"
                                        : "text-text-secondary hover:text-foreground"
                                    }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {isConnected ? (
                            <>
                                <div className="wallet-badge w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span className="text-xs font-semibold text-foreground">
                                        {walletAddress}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        disconnect();
                                        setMobileOpen(false);
                                    }}
                                    className="btn-secondary text-sm px-5 py-2.5 w-fit"
                                >
                                    Disconnect
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    openConnectModal();
                                    setMobileOpen(false);
                                }}
                                className="btn-primary text-sm px-5 py-2.5 w-fit"
                            >
                                Launch App
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
