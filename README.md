# ChunkyBar

**Non-Custodial Cross-Chain Payment Rails for the Hedera Ecosystem**

> Swap, bridge, and settle from Hedera to any EVM network in a single atomic operation.

---

## 🎯 Value Proposition

ChunkyBar "chunks" together multi-hop cross-chain swaps (HBAR → wHBAR on SaucerSwap, bridge via Hashport, settle wHBAR → ETH on Uniswap) into **one coordinated, non-custodial operation**. This eliminates the interoperability tax, reduces operational risk, and produces a fully auditable trail on Hedera Consensus Service (HCS).

## 🔗 Live Demo

```bash
# Local development
cd frontend && npm install && npm run dev
# Open http://localhost:3000
```

## 🛠 Tech Stack

| Layer        | Technology                                    |
| ------------ | --------------------------------------------- |
| Frontend     | Next.js 15 (App Router), TypeScript, Tailwind |
| Smart Contracts | Solidity 0.8.x, Foundry (Forge)           |
| Hedera       | SaucerSwap DEX, Hashport Bridge, HCS          |
| EVM          | Uniswap V3 (Ethereum / Polygon)               |
| Wallets      | HashPack, MetaMask, WalletConnect              |

## 📁 Repo Structure

```
chunkyBarApp/
├── contract/               # Foundry project (Solidity smart contracts)
│   ├── src/                # Contract source files
│   ├── test/               # Forge tests
│   ├── script/             # Deploy scripts
│   └── foundry.toml        # Foundry config
├── frontend/               # Next.js 15 dApp
│   ├── app/                # App Router (pages, components, hooks)
│   │   ├── components/     # UI components (Navbar, Hero, Features, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── swap/           # Swap page (mockup)
│   │   ├── dashboard/      # Dashboard/tracker page (mockup)
│   │   ├── globals.css     # Global styles & design tokens
│   │   ├── layout.tsx      # Root layout with auth providers
│   │   └── page.tsx        # Landing page
│   └── public/             # Static assets (logos, icons)
├── ARCHITECTURE.md         # System architecture & data flow
├── PRD.md                  # Product Requirements Document
├── TASKS.md                # Milestones & task breakdown
├── SPEC.md                 # API & data contracts
├── CONVENTIONS.md          # Coding & repo conventions
├── AI_GUIDE.md             # Guidelines for AI agents
├── SECURITY.md             # Threat model & mitigations
├── PITCH.md                # Hackathon pitch script
└── README.md               # This file
```

## ⚡ Quickstart

### Prerequisites

- **Node.js** ≥ 18
- **npm** (bundled with Node)
- **Foundry** (`curl -L https://foundry.paradigm.xyz | bash && foundryup`)

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

### Smart Contracts

```bash
cd contract
forge build        # compile
forge test         # run tests
```

## ✅ What's Done (Current Scope)

- [x] Landing page (Hero, Features, How It Works, CTA, Footer)
- [x] Interactive dotted background with cursor proximity effect
- [x] Wallet connect modal (HashPack, MetaMask, WalletConnect mock)
- [x] Auth state persisted in `localStorage`
- [x] Protected routes (Dashboard, Swap) with redirect to connect modal
- [x] Post-login redirect to Dashboard
- [x] Swap page (UI mockup with route preview)
- [x] Dashboard page (UI mockup with transaction tracker)
- [x] Foundry project scaffolding

## 🚧 What's Not Done Yet

- [ ] Smart contracts (ChunkyBarPaymentManager, SwapOrchestrator, SettlementManager)
- [ ] Real wallet integration (HashPack SDK, MetaMask provider)
- [ ] SaucerSwap on-chain integration
- [ ] Hashport bridge integration
- [ ] Uniswap settlement integration
- [ ] HCS event logging
- [ ] Relayer network
- [ ] Backend API
- [ ] End-to-end tests

## 👥 Team

- **Youvandra Febrial**
- **Hanif Zahidin**
- **Muhammad Ihsan**

## 📄 License

Developed for the Hedera Hackathon 2026.
