// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `JubJub`,
    name: `JubJub`,
    // Used to provide alt text for your avatar
    author: `Shawn Lauzon`,
    // Used for SEO
    description: `Jackie's guide to Koh Phangan`,
    // Used for resolving images in social cards
    siteUrl: `https://jubjub.fun`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Jackie's guide to Koh Phangan`,
      maxWidth: 52,
    },
    // Used for social links in the root footer
    social: [
      {
        name: "twitter",
        url: `https://twitter.com/jubjub`,
      },
      {
        name: "github",
        url: `https://github.com/jubjub`,
      },
    ],
  },
  plugins: ["@narative/gatsby-theme-novela"],
};
