/**
 * BotanicalDecor — decorative SVG elements placed absolutely behind section content.
 * Only sunflowers are kept per user request. All leaf, DNA helix, and microscope decorations removed.
 */
const BotanicalDecor = ({ variant = "default" }: { variant?: "about" | "projects" | "contact" | "education" | "default" }) => {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* ─── SUNFLOWER top-right ──────────────────────────────────────────── */}
      {(variant === "about" || variant === "default") && (
        <svg
          className="absolute -top-8 -right-12 opacity-[0.07] text-amber-500"
          width="260" height="260" viewBox="0 0 200 200" fill="currentColor"
        >
          {/* petals */}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16;
            return (
              <ellipse
                key={i}
                cx="100" cy="100"
                rx="12" ry="36"
                transform={`rotate(${angle} 100 100) translate(0 -52)`}
                fill="#d97706"
                opacity="0.85"
              />
            );
          })}
          {/* center */}
          <circle cx="100" cy="100" r="28" fill="#92400e" />
          <circle cx="100" cy="100" r="22" fill="#78350f" />
          {/* seeds pattern */}
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: Math.ceil(6 + r * 2) }, (_, c) => {
              const theta = (c / (6 + r * 2)) * Math.PI * 2;
              const radius = 5 + r * 3;
              return (
                <circle
                  key={`${r}-${c}`}
                  cx={100 + Math.cos(theta) * radius}
                  cy={100 + Math.sin(theta) * radius}
                  r="1.8"
                  fill="#d97706"
                  opacity="0.6"
                />
              );
            })
          )}
        </svg>
      )}

      {/* ─── SMALL SUNFLOWER — bottom-right (projects only) ──────────────── */}
      {variant === "projects" && (
        <svg
          className="absolute bottom-4 right-8 opacity-[0.07]"
          width="150" height="150" viewBox="0 0 120 120" fill="currentColor"
        >
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 360) / 12;
            return (
              <ellipse
                key={i}
                cx="60" cy="60"
                rx="8" ry="24"
                transform={`rotate(${angle} 60 60) translate(0 -34)`}
                fill="#d97706"
                opacity="0.9"
              />
            );
          })}
          <circle cx="60" cy="60" r="18" fill="#92400e" />
          <circle cx="60" cy="60" r="13" fill="#78350f" />
        </svg>
      )}

    </div>
  );
};

export default BotanicalDecor;
