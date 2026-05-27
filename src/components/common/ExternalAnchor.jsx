export default function ExternalAnchor({ href, children, className = "", ariaLabel, style }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
