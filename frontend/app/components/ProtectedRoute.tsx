"use client";

import { useAuth } from "./AuthProvider";
import { useEffect } from "react";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isConnected, openConnectModal } = useAuth();

    useEffect(() => {
        if (!isConnected) {
            openConnectModal();
        }
    }, [isConnected, openConnectModal]);

    if (!isConnected) {
        return (
            <div className="page-shell flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-p2 text-text-secondary">Please connect your wallet to continue…</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
