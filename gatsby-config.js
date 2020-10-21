// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `JubJub`,
    name: `JubJub`,
    // Used to provide alt text for your avatar
    author: `Shawn Lauzon`,
    // Used for SEO
    description: `Whimsical travel advice created by fairies and magicians`,
    // Used for resolving images in social cards
    siteUrl: `https://jubjub.fun`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Whimsical travel advice created by fairies and magicians`,
      maxWidth: 652,
    },
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/jubjub`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/jubjub`,
      },
    ],
  },
  plugins: ["@narative/gatsby-theme-novela"],
};