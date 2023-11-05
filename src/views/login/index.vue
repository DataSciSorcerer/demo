<template>
  <div class="container">
    <div class="from">
      <div class="head flex items-center justify-center">
        <h1 class="text-4xl font-bold">Wellcome back!!!</h1>
        <LottieAnimation :animation-data="WatermelonJSON" :loop="true" />
      </div>
      <div class="main flex flex-col justify-evenly">
        <div class="form-control w-full">
          <input type="text" placeholder="Email" v-model.trim="email" class="input input-bordered w-full" />
        </div>
        <div class="form-control relative w-full">
          <input :type="passwordType" v-model.trim="password" placeholder="Password(6-12)"
            class="input input-bordered w-full pr-10" />
          <label class="swap swap-rotate absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @click="changePasswordDisplay" v-model="swapIcon" />
            <icon-preview-open class="swap-on" size="24" />
            <icon-preview-close-one class="swap-off" size="24" />
          </label>
        </div>
      </div>
      <div class="foot flex items-center justify-center">
        <div class="login flex items-center"><button class="btn btn-block bg-secondary-focus"
            @click="to_home">Login</button></div>
        <div class="register flex items-center"><button class="btn btn-block base-100"
            @click="to_register">Register</button></div>
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
import { ref } from "vue"
import { useToast } from "vue-toastification";
import { api } from "../../util/axios";


const toast = useToast();


// 切换密码可视状态
var swapIcon = ref(true);
var passwordType = ref("password");
const changePasswordDisplay = () => {
  passwordType.value = swapIcon.value ? "text" : "password";
};


//登录
const email = ref("")
const password = ref("")

function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^[^\s]{6,12}$/;
  return passwordRegex.test(password);
}

const errorMessages = {
  19: "邮箱格式不合法！",
  20: "系统出现问题，请稍后再试。",
  21: "该邮箱未注册！",
  22: "系统出现问题，请稍后再试。",
  23: "系统出现问题，请稍后再试。",
  // success
  24: "登录成功！",
  25: "用户已登录！",
  26: "密码错误！",
  default: "出现了未知错误，请稍后重试。",
};

const to_home = async () => {
  const emailRegexBool = validateEmail(email.value);
  const passwordRegexBool = validatePassword(password.value);
  if (emailRegexBool && passwordRegexBool) {
    try {
      const method = "post";
      const url = "/login";
      const data = {
        loginId: email.value,
        password: password.value,
      };
      const response = await api(method, url, data);
      const responseCode = response.data.returnCode;

      if (responseCode === 24) {
        console.log(response.data)
        // 存储token到LocalStorage
        localStorage.setItem('token', response.data.data.token);
        // 从LocalStorage获取token
        const token = localStorage.getItem('token');
        console.log(token)
        toast.success("登录成功！");
        router.push("/home")
      } else if (responseCode === 19 || 21 || 25 || 26) {
        const errorMessage = errorMessages[responseCode];
        toast.info(errorMessage);
      } else {
        const errorMessage = errorMessages[responseCode] || errorMessages.default;
        toast.warning(errorMessage);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  } else {
    const obj = {
      emailObj: {
        boolean: emailRegexBool,
        message: "邮箱输入错误！",
      },
      passwordObj: {
        boolean: passwordRegexBool,
        message: "密码输入错误！(在6-12位之间)",
      },
    };

    Object.values(obj).forEach((item) => {
      if (!item.boolean) {
        toast.info(item.message);
      }
    });
  }

}


const to_register = () => {
  router.push("/register")
}


</script>