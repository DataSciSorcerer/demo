import { defineStore } from "pinia";

export const loginRegisterStore = defineStore("loginRegister", {
  state: () => ({
    count: 0,
    email: "",
    intervalId: null,
    password: "",
    captcha: "",
  }),
  actions: {
    startCountdown() {
      this.count = 60; // 初始化 count 的值为 60

      this.intervalId = setInterval(() => {
        this.count--; // 每秒减一
        console.log(this.count);

        if (this.count === 0) {
          clearInterval(this.intervalId); // 当 count 减至 0 时停止定时器
        }
      }, 1000); // 每秒执行一次
    },
    reset() {
      this.count = 1;
      this.email = "";
      this.captcha = "";
      this.password = "";
    },
  },
});
