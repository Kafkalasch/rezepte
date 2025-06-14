import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').PluginConfig} */
const searchLocalPlugin = [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    // @ts-ignore
    {
        hashed: true,
    },
];

const config: Config = {
    title: "M&Ms Rezepte",
    tagline: "Michi und Mariels Rezepte",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "http://rezepte.marielundmichi.de",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "kafkalasch", // Usually your GitHub org/user name.
    projectName: "rezepte", // Usually your repo name.

    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "de",
        locales: ["de"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/Kafkalasch/rezepte/edit/main",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "M&M",
            logo: {
                alt: "My Site Logo",
                src: "img/kochmuetze.jpg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Rezepte",
                },
                {
                    to: "https://onedrive.live.com/?id=127345801ad90529!0%5EL0xpdmVGb2xkZXJzL01hcmllbCB1bmQgTWljaGkvRG9rdW1lbnRlL0tvY2hyZXplcHRl",
                    label: "OneDrive",
                    position: "left",
                },
            ],
        },
        footer: {
            style: "light",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Mariel und Michi`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    themes: [searchLocalPlugin],
};

export default config;
