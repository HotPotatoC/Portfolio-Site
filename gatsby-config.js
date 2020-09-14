const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

const siteUrl =
  process.env.URL ||
  process.env.DEPLOY_URL ||
  `https://juanc.netlify.app`;

module.exports = {
  siteMetadata: {
    title: `Juan ☕`,
    titleTemplate: `Juan — %s`,
    description: `Hi, my name is Juan Christian i am a web developer based in Indonesia and this is my portfolio site.`,
    author: `@huanchrist`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juan Christian`,
        short_name: `Juan`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.black,
        theme_color: fullConfig.theme.colors.white,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-32x32.png`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177857112-1",
        head: true,
      },
    },
  ],
};
