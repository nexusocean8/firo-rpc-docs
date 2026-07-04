import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Firo RPC Docs",
  tagline: "Firo Developer Documentation",
  favicon: "img/firo-icon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://firodocs.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "firoorg", // Usually your GitHub org/user name.
  projectName: "firo-rpc", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    mdx1Compat: {
      admonitions: true,
    },
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/firoorg",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/firo-logo.svg",
    tscolorMode: {
      defaultMode: "light",
      disableSwitch: true,
      switch: false,
    },
    navbar: {
      title: "Firo RPC Docs",
      logo: {
        alt: "Firo Logo",
        src: "img/firo-icon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/firoorg",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "RPC Tutorial",
              to: "/docs/intro",
            },
            {
              label: "Firo Guides",
              href: "https://firo.org/guide",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "X.com",
              href: "https://x.com/firoorg",
            },
            {
              label: "Telegram",
              href: "https://t.me/firoorg",
            },
          ],
        },
        {
          title: "Official",
          items: [
            {
              label: "Firo Org",
              href: "https://firo.org",
            },
            {
              label: "Firo Forum",
              href: "https://forum.firo.org",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} — Firo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
