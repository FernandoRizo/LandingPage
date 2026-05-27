import { profile } from "../../data/profile";
import { softShadow } from "../../styles/shadows";

export default function ProfilePhoto({ size = "md" }) {
  const sizes = {
    sm: "h-11 w-11 rounded-2xl",
    md: "h-24 w-24 rounded-[2rem]",
  };

  return (
    <div
      className={`${sizes[size]} shrink-0 overflow-hidden bg-white ring-4 ring-white`}
      style={softShadow}
    >
      <img
        src={profile.photo}
        alt={`Foto de ${profile.shortName}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
