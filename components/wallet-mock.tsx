export function WalletMock() {
  return (
    <div className="wallet-mock relative overflow-hidden rounded-3xl border border-white/10 bg-[#070b14] p-5 shadow-[0_30px_80px_-40px_rgb(2_6_23/0.9)] sm:p-6">
      <div className="chain-mesh" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
            Personal vault
          </p>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            Non-custodial
          </span>
        </div>
        <p className="mt-4 font-mono text-[11px] text-slate-400">Account 0 · m/44'/60'/0'/0/0</p>
        <p className="mt-1 break-all font-mono text-sm text-white">
          0x5aAd ··· b481
        </p>
        <p className="mt-5 text-3xl font-extrabold tracking-tight text-white">
          2.408 <span className="text-base font-semibold text-slate-400">ETH</span>
        </p>
        <p className="mt-1 text-xs text-slate-500">Sample UI. Not a live balance.</p>
        <div className="mt-5 flex gap-2">
          {["Ethereum", "Base", "Solana", "Bitcoin"].map((chain, index) => (
            <span
              key={chain}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                index === 0
                  ? "bg-cyan-400 text-slate-950"
                  : "border border-white/10 text-slate-300"
              }`}
            >
              {chain}
            </span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["Send", "Receive", "Sign"].map((action) => (
            <span
              key={action}
              className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-xs font-semibold text-white"
            >
              {action}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-2">
          {[
            { label: "USDC", amount: "1,240.00" },
            { label: "wETH", amount: "0.12" },
            { label: "SOL", amount: "18.4" },
          ].map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs"
            >
              <span className="font-medium text-slate-200">{row.label}</span>
              <span className="font-mono text-slate-400">{row.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
