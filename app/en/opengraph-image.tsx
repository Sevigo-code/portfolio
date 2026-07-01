import { buildOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Juan Cartagena — Full-stack Developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return buildOgImage("en");
}
