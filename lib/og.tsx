import { ImageResponse } from "next/og";
import type { Lang } from "./i18n";

export const OG_SIZE = { width: 1200, height: 630 };

const subtitles: Record<Lang, string> = {
  es: "Full-stack developer · .NET, Angular & React · Automatización con n8n e IA",
  en: "Full-stack developer · .NET, Angular & React · Automation with n8n & AI",
};

const statuses: Record<Lang, string> = {
  es: "Disponible",
  en: "Available",
};

// Dynamic Open Graph image (also used for Twitter cards).
// Matches the site's dark / neon-pixel aesthetic.
export function buildOgImage(lang: Lang) {
  const bg = "#0a0a0f";
  const accent = "#c8f261";
  const accent2 = "#7c6ef5";
  const text = "#f0f0e8";
  const muted = "#888899";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 88% 18%, rgba(124,110,245,0.18), transparent 45%), radial-gradient(circle at 12% 92%, rgba(200,242,97,0.12), transparent 45%)",
        }}
      >
        {/* Top row: logo mark + status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: muted }}>&lt;</span>
            <span style={{ color: accent }}>jc</span>
            <span style={{ color: muted }}>/&gt;</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              letterSpacing: 2,
              color: accent,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{ width: 12, height: 12, background: accent, display: "flex" }}
            />
            {statuses[lang]}
          </div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              color: text,
            }}
          >
            Juan Cartagena
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              color: muted,
              maxWidth: 900,
            }}
          >
            {subtitles[lang]}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: muted,
            borderTop: `2px solid ${accent2}`,
            paddingTop: 28,
          }}
        >
          <span>Bogotá, Colombia · GMT-5</span>
          <span style={{ color: accent }}>juancartagena.dev</span>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
