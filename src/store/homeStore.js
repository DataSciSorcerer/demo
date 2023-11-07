import { defineStore } from "pinia";

export const homeItemStore = defineStore("home", {
  state: () => ({
    all: {
      nowShow: 0,
      items: [
        {
          itemIndex: 0,
          title: "全部",
          item: [
            {
              id: 0,
              title: "😶‍🌫️consectetur adip",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
            },
            {
              id: 1,
              title: "🎰consectetur",
              desc: "consectetur adipiscing elit, sed do eiusmod tempor incidid",
            },
            {
              id: 2,
              title: "🐄ipsum",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
            {
              id: 3,
              title: "🎹adipiscing",
              desc: "consectetur adipiscing elit, sed do eiusmod tempor",
            },
            {
              id: 4,
              title: "🔍dolor",
              desc: "ipsum dolor sit amet, consectetur",
            },
            {
              id: 5,
              title: "🐧this is a test",
              desc: "lorem ipsum dolor sit amet, consectetur",
            },
          ],
        },
        {
          itemIndex: 1,
          title: "通用",
          item: [
            {
              id: 0,
              title: "😶‍🌫️consectetur adip",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
            },
          ],
        },
        {
          itemIndex: 2,
          title: "生活",
          item: [
            {
              id: 0,
              title: "🎰consectetur",
              desc: "consectetur adipiscing elit, sed do eiusmod tempor incidid",
            },
          ],
        },
        {
          itemIndex: 3,
          title: "科技",
          item: [
            {
              id: 0,
              title: "🐄ipsum",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
          ],
        },
        {
          itemIndex: 4,
          title: "文创",
          item: [
            {
              id: 0,
              title: "🎹adipiscing",
              desc: "consectetur adipiscing elit, sed do eiusmod tempor",
            },
          ],
        },
        {
          itemIndex: 5,
          title: "医学",
          item: [
            {
              id: 0,
              title: "🐧this is a test",
              desc: "lorem ipsum dolor sit amet, consectetur",
            },
          ],
        },
      ],
    },
  }),
  getters: {},
  actions: {
    changeTab(index) {
      this.all.nowShow = index;
    },
  },
});
