module.exports = {
  base: "/Make-wheels/",
  title: "简造 UI",
  description: "一个好用的UI框架",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],

  themeConfig: {
    nav: require("./nav"),
    sidebar: require("./sidebar"),
  },
};
