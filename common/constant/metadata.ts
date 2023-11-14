export const METADATA = {
  creator: "Maulana",
  description: "My Web Portfolio",
  authors: {
    name: "Muhammad Nur Maulana",
    url: process.env.DOMAIN,
  },
  openGraph: {
    siteName: "Maulana",
    url: process.env.DOMAIN,
    locale: "id-ID",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "favicon",
      url: "/favicon.ico",
    },
  },
  exTitle: " | Maulana",
  githubUsername: process.env.GITHUB_USERNAME,
};
