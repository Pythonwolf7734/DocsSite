const { readdirSync } = require("fs");
const path = require("path");

function filesOf(dir) {
  return readdirSync(path.join("content", dir)).map((file) =>
    path.join(dir, file.split(".").shift())
  );
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        algoliaApiKey: "2265493e61011c466c2c8bffdec13032",
        algoliaIndexName: "ibl-docs",
        siteName: "Infinity Docs",
        headerButtonText: "Main Site",
        headerButtonLink: "https://infinitybotlist.com/",
        discordUrl: "https://infinitybotlist.com/discord",
        twitterHandle: "InfinityBotList",
        description: "Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API",
        githubRepo: "InfinityBotList/DocsSite",
        baseUrl: "https://docs.botlist.site",
        // defaultVersion: "0",
        // versions: {
        //   1: "version-1",
        // },
        sidebarCategories: {
          // null: ["getting-started"],
          api: filesOf("api"),
          faqs: filesOf("faqs"),
          libraries: filesOf("libraries"),
          programs: filesOf("programs"),
          resources: filesOf("resources"),
          server: filesOf("server"),
          staff: filesOf("staff"),
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
