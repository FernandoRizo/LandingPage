export default function MiniIcon({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-emerald-600 ring-1 ring-white/80 backdrop-blur">
      {children}
    </div>
  );
}
