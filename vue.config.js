const GoogleFontsPlugin = require("google-fonts-plugin");

module.exports = {
  publicPath: "/pi_approximation/",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [{ family: "Lora" }, { family: "Merriweather" }]
      })
    ]
  }
};
