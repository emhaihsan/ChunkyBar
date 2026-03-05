"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

interface AuthContextType {
    isConnected: boolean;
    walletAddress: string | null;
    walletType: string | null;
    showConnectModal: boolean;
    connect: (walletType: string) => void;
    disconnect: () => void;
    openConnectModal: () => void;
    closeConnectModal: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isConnected: false,
    walletAddress: null,
    walletType: null,
    showConnectModal: false,
    connect: () => { },
    disconnect: () => { },
    openConnectModal: () => { },
    closeConnectModal: () => { },
});

export function useAuth() {
    return useContext(AuthContext);
}

const MOCK_ADDRESSES: Record<string, string> = {
    hashpack: "0.0.4832719",
    metamask: "0x8f3a…7c2d1",
    walletconnect: "0x4b2e…a7f3",
};

const STORAGE_KEY = "chunkybar_auth";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletType, setWalletType] = useState<string | null>(null);
    const [showConnectModal, setShowConnectModal] = useState(false);

    // Rehydrate from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const { walletType: wt, walletAddress: wa } = JSON.parse(saved);
                if (wt && wa) {
                    setWalletType(wt);
                    setWalletAddress(wa);
                    setIsConnected(true);
                }
            }
        } catch {
            // ignore parse errors
        }
    }, []);

    const connect = useCallback((type: string) => {
        const address = MOCK_ADDRESSES[type] || "0x0000…0000";
        setWalletType(type);
        setWalletAddress(address);
        setIsConnected(true);
        setShowConnectModal(false);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ walletType: type, walletAddress: address }));
        } catch { }
    }, []);

    const disconnect = useCallback(() => {
        setIsConnected(false);
        setWalletAddress(null);
        setWalletType(null);
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch { }
    }, []);

    const openConnectModal = useCallback(() => {
        setShowConnectModal(true);
    }, []);

    const closeConnectModal = useCallback(() => {
        setShowConnectModal(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isConnected,
                walletAddress,
                walletType,
                showConnectModal,
                connect,
                disconnect,
                openConnectModal,
                closeConnectModal,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
