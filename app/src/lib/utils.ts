export { cn } from "cn";

/**
 * Prefixes a root-relative public asset path with the configured GitHub
 * Pages basePath (set via NEXT_PUBLIC_BASE_PATH in next.config.ts). Needed
 * because next/image and plain <video>/<img> src strings aren't rewritten
 * automatically under `output: "export"`, unlike next/link hrefs.
 */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

