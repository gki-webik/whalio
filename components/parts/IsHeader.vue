<template>
  <div>
    <header>
      <div class="main_center">
        <div class="left">
          <div class="logo">
            <img src="/public/assets/images/logo.png" alt="Logotip" />
          </div>
          <nav class="is-1" v-if="jsonData">
            <a href="">{{ jsonData[0] }}</a>
            <a href="">{{ jsonData[1] }}</a>
          </nav>
        </div>
        <nav class="is-2" v-if="jsonData">
          <a href="">{{ jsonData[2] }}</a>
          <a href="" class="is-blue">{{ jsonData[3] }}</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
@import url("/public/assets/styles/dist/min/header.min.css");
</style>

<script>
import jsonDataFile from "~/public/data/footer.json";
export default {
  data() {
    return {
      jsonData: null,
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
};
</script>