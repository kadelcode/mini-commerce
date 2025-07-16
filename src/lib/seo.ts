// lib/seo.ts
export const siteName = "Mini-Commerce";
export const siteUrl = "https://mini-commerce-rho.vercel.app/";
export const siteDescription =
  "A tiny modern e-commerce prototype built with Next.js App Router.";

export const defaultMetadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} Open Graph Image`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};
