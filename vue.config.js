module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "docs",
  publicPath: "/TruthDareDice/",
  pwa: {
    name: "TruthDareDice",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Truth or Dare or Dice";
      return args;
    });
  },
};
