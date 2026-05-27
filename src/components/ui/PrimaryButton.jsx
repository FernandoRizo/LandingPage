import ExternalAnchor from "../common/ExternalAnchor";
import { softShadow } from "../../styles/shadows";

export default function PrimaryButton({ href, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 active:translate-y-0.5"
      : "bg-slate-50 text-slate-800 hover:bg-white";

  return (
    <ExternalAnchor
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold transition ${styles}`}
      style={softShadow}
    >
      {children}
    </ExternalAnchor>
  );
}
