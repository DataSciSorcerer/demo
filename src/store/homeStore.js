import { defineStore } from "pinia";

export const homeItemStore = defineStore("home", {
  state: () => ({
    item: [
      {
        index: "0",
        title: "🗣️讲故事",
        desc: "让Gpt扮演一个讲故事的人。",
      },
      {
        index: "1",
        title: "🎼担任作曲家",
        desc: "让Gpt辅助你作曲。",
      },
      {
        index: "2",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "3",
        title: "lorem lorem Yesyes",
        desc: "",
      },
      {
        index: "4",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "5",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "1",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "2",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "3",
        title: "lorem lorem Yesyes",
        desc: "",
      },
      {
        index: "4",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
      {
        index: "5",
        title: "lorem lorem Yesyes",
        desc: "lorem lorem Yesyes",
      },
    ],
  }),
  getters: {},
  actions: {},
});
