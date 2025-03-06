<template>
  <div>
    <div @click="this.$emit('change-lang', 'ru')">сменить</div>
    <footer>
      <div>footer</div>
    </footer>
    {{ data[currentLang].a1 }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        ru: {
          a1: "Анимация",
        },
        en: {
          a1: "Animation",
        },
      },
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
  },
};
</script>