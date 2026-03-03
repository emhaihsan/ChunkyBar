# ChunkyBar

**Non-Custodial Cross-Chain Payment Rails for the Hedera Ecosystem**

ChunkyBar is a non-custodial, orchestrated cross-chain payment protocol that abstracts the complexity of multi-hop, multi-chain swaps into a single, atomic transaction primitive. By "chunking" together disparate steps — swap on Hedera (HBAR → wHBAR), bridge to EVM networks via Hashport, and final settlement on destination chains (wHBAR → ETH) — into one coordinated operation, ChunkyBar eliminates the interoperability tax, reduces operational risk, and enables seamless value transfer between Hedera and institutional-grade EVM ecosystems.

## ✨ Key Features

- **Non-Custodial by Design** — ChunkyBar never takes custody of user assets. All funds remain in user-controlled wallets.
- **Atomic Commitment Semantics** — Either all transaction legs complete successfully, or the entire operation reverts and funds are returned.
- **End-to-End Auditability** — Every event is logged to Hedera's Consensus Service (HCS), creating an immutable audit trail.
- **Ecosystem-First Design** — Acts as a customer of SaucerSwap, Hashport, and Uniswap, generating on-chain volume for all partners.
- **Institutional Ready** — Built to integrate with Hedera's OFAC compliance framework and Council governance model.
- **Smart-Account-Ready** — Forward-compatible with HIP-1340 (EIP-7702 adaptation) for single-operation execution flows.

## 🏗️ Architecture

ChunkyBar is composed of four integrated layers:

1. **Layer 1 — Hedera Swap Orchestration**: Swaps HBAR to wHBAR via SaucerSwap with slippage protection and HCS logging.
2. **Layer 2 — Cross-Chain Bridge Orchestration**: Bridges wHBAR to destination EVM chains via Hashport with state-proof verification.
3. **Layer 3 — EVM Settlement & Final Delivery**: Converts bridged wHBAR to the target asset (e.g., ETH) via Uniswap and delivers to the recipient.
4. **Layer 4 — Monitoring, Relaying & Failure Recovery**: Off-chain relayer network that drives the state machine and handles rollback/recovery.

## 📁 Project Structure

```
chunkyBarApp/
├── contract/          # Smart contracts (Solidity)
├── frontend/          # Next.js landing page & dApp
│   ├── app/           # App Router pages & components
│   ├── public/        # Static assets (logos, images)
│   └── ...
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 Ecosystem Partners

- [Hedera](https://hedera.com) — Institutional-grade public network
- [SaucerSwap](https://saucerswap.finance) — Native Hedera DEX
- [Hashport](https://hashport.network) — Hedera-to-EVM bridge
- [Uniswap](https://uniswap.org) — EVM settlement DEX

## 📄 License

This project is developed as part of the Hedera Hackathon.

## 👥 Team

- Youvandra Febrial
- Hanif Zahidin
- Muhammad Ihsan
