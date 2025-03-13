<template>
  <div>
    <div class="boxForm">
      <img src="/public/assets/images/logo.png" class="is-logo" alt="logo" />
      <h1 v-if="jsonData">{{ jsonData.h1 }}</h1>
      <div class="skeleton" v-if="!jsonData"></div>
      <form action="">
        <label>
          <img src="/public/assets/images/profile/ico1.svg" alt="ico" />
          <input type="email" placeholder="Your email" autocomplete="email" />
        </label>
        <label>
          <img src="/public/assets/images/profile/ico2.svg" alt="ico" />
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Your password"
            autocomplete="current-password"
          />
          <img
            src="/public/assets/images/profile/ico3.svg"
            class="is-3"
            alt="ico"
            @click="togglePasswordVisibility"
          />
        </label>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="pswText" v-if="jsonData">
          <a href="">{{ jsonData.pswText }}</a>
        </div>
        <button type="submit" v-if="jsonData">{{ jsonData.button }}</button>
      </form>
      <div class="skeleton" v-if="!jsonData"></div>
      <p v-if="jsonData">
        {{ jsonData.p }}
        <router-link to="/profile/signup">{{ jsonData.pa }}</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url("/public/assets/styles/profile/dist/min/login.min.css");
</style>

<script>
import jsonDataFile from "~/public/data/profile/login.json";

export default {
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    lang: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentLang() {
      return this.lang;
    },
    jsonData() {
      return jsonDataFile[this.currentLang];
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = this.$el.querySelector('input[type="text"]');
      if (passwordInput) {
        passwordInput.type = this.showPassword ? "text" : "password";
      }
    },
  },
};
</script>