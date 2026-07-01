"use client";

import { useEffect } from "react";

/**
 * The root layout hardcodes <html lang="es">; this updates it on the client
 * for routes in another language (e.g. /en).
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
