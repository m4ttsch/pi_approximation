const GoogleFontsPlugin = require("google-fonts-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [{ family: "Lora" }, { family: "Merriweather" }]
      })
    ]
  }
};
