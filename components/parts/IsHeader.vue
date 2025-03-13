<template>
  <div>
    <header>
      <div class="main_center">
        <div class="left">
          <div class="logo">
            <img src="/public/assets/images/logo.png" alt="Logotip" />
          </div>
          <nav class="is-1" v-if="jsonData">
            <router-link to="/">{{ jsonData[0] }}</router-link>
            <router-link to="">{{ jsonData[1] }}</router-link>
          </nav>
        </div>
        <nav class="is-2" v-if="jsonData">
          <router-link to="/profile/login">{{ jsonData[2] }}</router-link>
          <router-link to="/profile/signup" class="is-blue">{{
            jsonData[3]
          }}</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
@import url("/public/assets/styles/dist/min/header.min.css");
</style>

<script>
import jsonDataFile from "~/public/data/header.json";
export default {
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
};
</script>