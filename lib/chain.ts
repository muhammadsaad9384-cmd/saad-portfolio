export const chainIntro = {
  kicker: "Blockchain",
  title: "Exchange desks, wallets, and on-chain products",
  body: "I build the frontend and the backend for spot and derivatives-style desks: order book, chart, ticket, matching, and admin. Personal wallets stay non-custodial. I do not hold customer funds or operate a licensed broker.",
};

export const chainPillars = [
  {
    code: "01",
    title: "Order book and chart",
    body: "Spot and derivatives-style screens: depth, candles, and an order ticket a trader can use in UAT.",
  },
  {
    code: "02",
    title: "Matching and account API",
    body: "The backend that matches orders, tracks balances, and feeds the desk. Built as product software.",
  },
  {
    code: "03",
    title: "Non-custodial wallets",
    body: "Personal multi-chain vaults. Keys stay on the device unless a client asks for a different design.",
  },
  {
    code: "04",
    title: "Admin and contracts",
    body: "Ops console, KYC screens as product UI, and the Solidity behind tokens, NFTs, and pools.",
  },
];

export const chainStats = [
  { value: "2", label: "Layers on a desk, UI and API" },
  { value: "8", label: "Surfaces in this practice" },
  { value: "6", label: "Chain families in one vault" },
  { value: "1", label: "Non-custodial default" },
];

export const chainServices = [
  {
    code: "01",
    title: "Spot and derivatives desks",
    image: "/images/chain/exchange-desk.jpg",
    alt: "Dark trading desk with chart and depth monitors",
    body: "I ship the trading screen (order book, chart, and ticket) and the matching and account API behind it. The build is a product UAT desk: the client runs any license, and I do not custody funds.",
  },
  {
    code: "02",
    title: "Personal multi-chain wallets",
    image: "/images/chain/wallet.jpg",
    alt: "Matte wallet slab beside a phone with a soft cyan glow",
    body: "I build web and mobile vaults from mnemonic to send, receive, and history across EVM, Bitcoin, and Solana, with keys staying on the device. WalletConnect opens a session when another app needs to sign.",
  },
  {
    code: "03",
    title: "Smart contracts and tokens",
    image: "/images/chain/contracts.jpg",
    alt: "Stacked glass blocks and a gold token disc",
    body: "I write Solidity for ERC-20 and BEP-20 with mint, burn, pause, and permit, then wire the Next.js product that calls them. Tests and deploy scripts ship in Foundry or Hardhat so the contract is not left in a playground.",
  },
  {
    code: "04",
    title: "NFT mint and gallery",
    image: "/images/chain/nft-gallery.jpg",
    alt: "Three luminous panels in a dark gallery",
    body: "I deliver ERC-721 and ERC-1155 contracts with metadata, plus a mint flow and a gallery. Provenance stays on-chain, and the site never holds the collector's keys.",
  },
  {
    code: "05",
    title: "Staking, locks, and pools",
    image: "/images/chain/defi.jpg",
    alt: "Glass cylinders holding cyan and violet light",
    body: "I build staking, lock, and liquidity screens where fee and reward math is readable before anyone signs. The contract and the product UI ship together, and users sign from their own wallet.",
  },
  {
    code: "06",
    title: "Contract review",
    image: "/images/chain/contract-review.jpg",
    alt: "Brass loupe beside a glass plate of circuit lines",
    body: "I review access control, reentrancy, allowances, and upgrade paths, then write the findings and the fixes. This is an engineering review, not a formal audit certificate.",
  },
  {
    code: "07",
    title: "dApps and chain APIs",
    image: "/images/chain/dapps.jpg",
    alt: "Glass pane showing a glowing network of nodes",
    body: "I build Next.js dApps with WalletConnect, chain switch, and typed prompts, plus an indexer or API for balances, transfers, and history. The browser talks to that API instead of scraping a public explorer.",
  },
  {
    code: "08",
    title: "Admin and ops console",
    image: "/images/chain/admin-ops.jpg",
    alt: "Dim operations console with abstract chart panels",
    body: "I build the operator console for a desk: markets, users, order exceptions, and the KYC screens the client's ops team uses. Those screens are product UI for their process, and they are not a compliance license.",
  },
];

export const walletBuild = [
  {
    title: "Entropy and recovery",
    body: "BIP-39 mnemonics, BIP-32/44 paths, passphrase accounts, and export or import without sending key material to the server.",
  },
  {
    title: "Multi-chain addresses",
    body: "One seed, chain-specific formats: 0x accounts, bech32, and base58. A network switch updates RPC, explorer, and the asset list.",
  },
  {
    title: "Send, receive, history",
    body: "Fee estimation, nonce handling, replace-by-fee, and indexed history from RPC plus an optional indexer.",
  },
  {
    title: "Mobile and extension",
    body: "The same vault logic in a Next.js web wallet, a Flutter shell, or an Android WebView. Signing stays one module.",
  },
  {
    title: "dApp connect",
    body: "WalletConnect v2, an EIP-1193 provider, chain switch, and typed-data prompts with a readable preview.",
  },
  {
    title: "Watch-only and multisig",
    body: "Import a public address, or wrap a vault in a 2-of-n policy, so ops can watch without moving the seed.",
  },
];

export const supportedFamilies = [
  { name: "Ethereum", note: "Mainnet and L2s" },
  { name: "EVM L2s", note: "Arbitrum, Base, Optimism, Polygon" },
  { name: "Bitcoin", note: "UTXO, PSBT, watch" },
  { name: "Solana", note: "ed25519, SPL" },
  { name: "BSC and Avalanche", note: "EVM adapters" },
  { name: "Testnets", note: "Sepolia, Devnet, Signet" },
];

export const chainStack = [
  "Solidity",
  "Foundry",
  "Hardhat",
  "ethers.js",
  "viem",
  "wagmi",
  "WalletConnect",
  "EIP-1193",
  "EIP-712",
  "ERC-4337",
  "BIP-39 / BIP-44",
  "Matching API",
  "Order book",
  "The Graph",
  "Anvil",
];

export const chainFaq = [
  {
    q: "Do you hold customer funds?",
    a: "No. Wallets I ship are non-custodial by default, and keys stay on the device. A custodial architecture is a separate design, and I still do not operate the broker.",
  },
  {
    q: "Do you run the exchange?",
    a: "I build the product: matching, order book, chart, ticket, wallets, and admin. It is a UAT desk unless the client already holds their own license.",
  },
  {
    q: "Is a contract review an audit?",
    a: "It is an engineering pass on access control, reentrancy, allowances, and upgrade paths, with findings and fixes. It is not a formal audit certificate.",
  },
];
