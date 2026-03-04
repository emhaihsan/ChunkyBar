"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

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

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [walletType, setWalletType] = useState<string | null>(null);
    const [showConnectModal, setShowConnectModal] = useState(false);

    const connect = useCallback((type: string) => {
        setWalletType(type);
        setWalletAddress(MOCK_ADDRESSES[type] || "0x0000…0000");
        setIsConnected(true);
        setShowConnectModal(false);
    }, []);

    const disconnect = useCallback(() => {
        setIsConnected(false);
        setWalletAddress(null);
        setWalletType(null);
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
