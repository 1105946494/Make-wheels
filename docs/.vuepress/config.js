module.exports = {
  base: "/Make-wheels/",
  title: "简造 UI",
  description: "一个好用的UI框架",
  dest: "./dist",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require("./nav"),
    sidebar: require("./sidebar"),
  },
  sidebarDepth: 2,
  lastUpdated: "Last Updated",
  searchMaxSuggestoins: 10,
  serviceWorker: {
    updatePopup: {
      message: "有新的内容.",
      buttonText: "更新",
    },
  },
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页 ！",
};
