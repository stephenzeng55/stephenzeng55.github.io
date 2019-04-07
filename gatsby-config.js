const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: `#16b3b3`,
              contrastText: `#003636`
            },
            secondary: {
              main: `#95b2b8`,
              contrastText: `#003636`
            },
            text: {
              primary: `#003636`,
              secondary: `#375c85`
            }
          },
          typography: {
            useNextVariants: true,
            fontFamily: "Merriweather"
          }
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Stephen J Zeng Portfolio",
        short_name: "S Zeng Portfolio",
        start_url: "/",
        background_color: "#16b3b3",
        theme_color: "#16b3b3",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
