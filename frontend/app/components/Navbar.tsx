"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: "Features", href: "/#features" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Swap", href: "/swap" },
        { label: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo-black.png"
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
                                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/swap"
                            className="btn-primary text-sm px-5 py-2.5"
                        >
                            Launch App
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
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
                    className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-72 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/swap"
                            className="btn-primary text-sm px-5 py-2.5 w-fit"
                            onClick={() => setMobileOpen(false)}
                        >
                            Launch App
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
