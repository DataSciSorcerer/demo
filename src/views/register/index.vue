<template>
  <div class="container">
    <div class="form">
      <!-- head -->
      <div class="head flex items-center justify-center">
        <h1 class="text-4xl font-bold">Hello register!!!</h1>
        <LottieAnimation :animation-data="WatermelonJSON" :loop="true" />
      </div>
      <!-- main -->
      <div class="main flex flex-col justify-evenly">
        <!-- Email -->
        <div class="formContainer">
          <input type="text" placeholder="Email" v-model.trim="useLoginRegisterStore.email"
            class="input input-bordered w-full mr-2 disabled" />
          <button class="btn btn-circle" @click="sendVerificationCode">
            <icon-send-email v-if="useLoginRegisterStore.count == 0" size="24" />
            <p style="color: #C8CAD0;" v-else>{{ useLoginRegisterStore.count }}</p>
          </button>
        </div>
        <!-- Captcha -->
        <div class="form-control w-full">
          <input type="text" v-model.trim="useLoginRegisterStore.captcha" placeholder="captcha"
            class="input input-bordered w-full" />
        </div>
        <!-- password -->
        <div class="form-control relative w-full">
          <input :type="passwordType" v-model.trim="useLoginRegisterStore.password" placeholder="Password(6-12)"
            class="input input-bordered w-full pr-10" />
          <label class="swap swap-rotate absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @click="changePasswordDisplay" v-model="swapIcon" />
            <icon-preview-open class="swap-on" size="24" />
            <icon-preview-close-one class="swap-off" size="24" />
          </label>
        </div>
      </div>
      <!-- actions -->
      <div class="foot flex items-center justify-center">
        <div class="login flex items-center">
          <button class="btn btn-block bg-secondary-focus" @click="verificationForm">
            Register
          </button>
        </div>
        <div class="register flex items-center">
          <button @click="toLogin" class="btn btn-block base-100">Login</button>
        </div>
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

.formContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form {
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
  .form {
    width: 100%;
    /* background-color: red; */
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .form {
    width: 65%;
    /* background-color: white; */
  }
}

@media screen and (min-width: 1024px) {
  .form {
    width: 40%;
    /* background-color: yellow; */
  }
}
</style>

<script setup lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import WatermelonJSON from "../../assets/lottie/welcome.json";
import router from "../../router";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { api } from "../../util/axios/index";
import { loginRegisterStore } from "../../store/loginRegisterStore";

const toast = useToast();
const useLoginRegisterStore = loginRegisterStore()

// const toHome = () => {
//   router.push("/home");
// };


const toLogin = () => {
  toast.clear()
  router.push("/login");
};


// 切换密码可视状态
var swapIcon = ref(true);
var passwordType = ref("password");
const changePasswordDisplay = () => {
  passwordType.value = swapIcon.value ? "text" : "password";
};


// 发送验证码邮件请求
const sendVerificationCode = async () => {
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;

  if (!regex.test(useLoginRegisterStore.email)) {
    toast.info("邮箱格式不合法！");
  } else {
    const method = "post";
    const url = "/registers/sendVerificationCode";
    const data = { loginId: useLoginRegisterStore.email }; // 你的 email
    const response = await api(method, url, data);
    try {
      switch (response.data.returnCode) {
        case 0:
          toast.warning("邮箱格式不合法！");
          break;
        case 1:
          // 假设 1 对应的提示是 "系统出现问题，请稍后再试。"
          toast.error("系统出现问题，请稍后再试。");
          break;
        case 2:
          toast.info("此用户已经注册！");
          break;
        case 3:
          // 假设 3 对应的提示是 "系统出现问题，请稍后再试。"
          toast.error("系统出现问题，请稍后再试。");
          break;
        case 4:
          toast.error("系统出现问题，请稍后再试。");
          break;
        case 5:
          toast.success("验证码发送成功！");
          useLoginRegisterStore.startCountdown();
          console.log(useLoginRegisterStore.count)
          break;
        case 6:
          toast.error("系统出现问题，请稍后再试。");
          break;
        case 7:
          useLoginRegisterStore.startCountdown();
          console.log(useLoginRegisterStore.count)
          toast.success("验证码发送成功！");
          break;
        case 8:
          toast.info("验证码发送频繁！");
          break;
        default:
          console.log(response.data); // 输出其他未处理的 returnCode，便于调试
      }
    } catch (error) {
      console.error(error);
    }
  }
};


//验证表单
function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^[^\s]{6,12}$/;
  return passwordRegex.test(password);
}

function validateCaptcha(captcha) {
  const verificationCodeRegex = /^[0-9a-zA-Z]{6}$/;
  return verificationCodeRegex.test(captcha);
}

const errorMessages = {
  9: "邮箱格式不合法！",
  10: "系统出现问题，请稍后再试。",
  11: "验证码输入错误！",
  12: "验证码输入错误！",
  13: "验证码已过期(10min)!",
  14: "系统出现问题，请稍后再试。",
  15: "系统出现问题，请稍后再试。",
  16: "用户注册成功！",
  17: "验证码输入错误！",
  18: "此用户已经注册！",
  default: "出现了未知错误，请稍后重试。",
};

const verificationForm = async () => {
  const emailRegexBool = validateEmail(useLoginRegisterStore.email);
  const passwordRegexBool = validatePassword(useLoginRegisterStore.password);
  const verificationCodeRegexBool = validateCaptcha(useLoginRegisterStore.captcha);

  if (emailRegexBool && passwordRegexBool && verificationCodeRegexBool) {
    try {
      const method = "post";
      const url = "/registers/verifyRegistrationInformation";
      const data = {
        loginId: useLoginRegisterStore.email,
        verificationCode: useLoginRegisterStore.captcha,
        password: useLoginRegisterStore.password,
      };

      const response = await api(method, url, data);
      const responseCode = response.data.returnCode;

      if (responseCode === 16) {
        // 重置验证表单
        useLoginRegisterStore.reset();
        toast.success("用户注册成功！");
        router.push("/login")
      } else {
        const errorMessage = errorMessages[responseCode] || errorMessages.default;
        toast.info(errorMessage);
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
      captchadObj: {
        boolean: verificationCodeRegexBool,
        message: "验证码输入错误！",
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
};

</script>
