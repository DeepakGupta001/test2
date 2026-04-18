export function HeroFallback() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,255,77,0.15),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(200,255,77,0.08),transparent_50%)]" />
      <div className="absolute left-1/2 top-1/2 h-[min(90%,420px)] w-[min(90%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-zinc-950/40" />
      <div className="absolute left-1/2 top-1/2 h-[min(55%,260px)] w-[min(55%,260px)] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-[#c8ff4d]/25" />
    </div>
  );
}
