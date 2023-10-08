<template>
  <div class="container">
    <div class="from">
      <div class="head flex items-center justify-center">
        <h1 class="text-4xl font-bold">Wellcome back!!!</h1>
        <LottieAnimation :animation-data="WatermelonJSON" :loop="true" />
      </div>
      <div class="main flex flex-col justify-evenly">
        <div class="form-control w-full">
          <input type="text" placeholder="Account" class="input input-bordered w-full" />
        </div>
        <div class="form-control w-full">
          <input type="text" placeholder="Password" class="input input-bordered w-full" />
          <label class="label">
            <span class="label-text-alt"></span>
            <span class="label-text-alt cursor-pointer"></span>
          </label>
        </div>
      </div>
      <div class="foot flex items-center justify-center">
        <div class="login flex items-center"><button class="btn btn-block bg-secondary-focus"
            @click="to_home">Login</button></div>
        <div class="register flex items-center"><button class="btn btn-block base-100">Register</button></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.from {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
}

.head {
  height: 30%;
  width: 100%;
  /* background-color: aqua; */
}

.main {
  height: 40%;
  width: 100%;
  /* background-color: blueviolet; */
}

.foot {
  height: 30%;
  width: 100%;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login {
  width: 100%;
  height: 50%;
  /* background-color: cadetblue; */
}

.register {
  width: 100%;
  height: 50%;
}

@media screen and (max-width: 767px) {
  .from {
    width: 100%;
    /* background-color: red; */
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .from {
    width: 65%;
    /* background-color: white; */
  }
}

@media screen and (min-width: 1024px) {
  .from {
    width: 40%;
    /* background-color: yellow; */

  }
}
</style>

<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue"
import WatermelonJSON from "../../assets/lottie/welcome.json"
import router from "../../router";

const to_home = () => {
  router.push("/home")
}
</script>