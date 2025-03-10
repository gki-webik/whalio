<template>
  <div class="max_container">
    <Header @change-lang="changeLang" :lang="lang"></Header>
  </div>
  <NuxtPage :lang="lang" />
  <div class="max_container">
    <Footer @change-lang="changeLang" :lang="lang"></Footer>
  </div>
</template>
<style>
@import url("/public//assets/styles/dist/min/all.min.css");
</style>
<script>
import Header from "~/components/parts/IsHeader.vue";
import Footer from "~/components/parts/IsFooter.vue";
export default {
  data() {
    return {
      lang: "en",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    changeLang(e) {
      this.lang = e || "en";
    },
  },
};
</script>