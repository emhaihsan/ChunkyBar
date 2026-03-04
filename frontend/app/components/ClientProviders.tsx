"use client";

import AuthProvider from "./AuthProvider";
import ConnectWalletModal from "./ConnectWalletModal";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            {children}
            <ConnectWalletModal />
        </AuthProvider>
    );
}
