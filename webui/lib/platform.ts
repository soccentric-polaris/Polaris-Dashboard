/**
 * Platform identity — single source of truth.
 *
 * Override at build time via .env.local:
 *   NEXT_PUBLIC_PLATFORM_SLUG=polaris
 *   NEXT_PUBLIC_PLATFORM_NAME=Polaris
 *   NEXT_PUBLIC_PLATFORM_SERVER=http://polaris-server:8080
 */

/** Short identifier used in localStorage keys, URLs, and log tags. */
export const PLATFORM_SLUG =
    process.env.NEXT_PUBLIC_PLATFORM_SLUG ?? "polaris";

/** Human-readable display name used in page titles and UI copy. */
export const PLATFORM_NAME =
    process.env.NEXT_PUBLIC_PLATFORM_NAME ?? "Polaris";
