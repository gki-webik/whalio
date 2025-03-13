<template>
  <div>
    <footer>
      <div class="is-1">
        <div class="imgs">
          <img
            src="/public/assets/images/logo.png"
            class="logo"
            alt="Logotip"
          />
          <div
            class="changeLang"
            :class="{ 'is-active': changeLangActive }"
            @click="isToggleModalChangeLang"
          >
            <img
              src="/public/assets/images/langS.svg"
              class="is-1"
              alt="lang"
            />
            <div class="is-lang" v-if="currentLang === 'en'">
              ENG
              <img
                src="/public/assets/images/lang-en.png"
                class="is-2"
                alt="lang"
              />
            </div>
            <div class="is-lang" v-if="currentLang === 'ru'">
              RU
              <img
                src="/public/assets/images/lang-ru.png"
                class="is-2"
                alt="lang"
              />
            </div>
            <div class="is-lang" v-if="currentLang === 'es'">
              ES
              <img
                src="/public/assets/images/lang-es.png"
                class="is-2"
                alt="lang"
              />
            </div>
            <div class="items">
              <div
                class="item"
                @click="this.$emit('change-lang', 'en')"
                :class="{ 'is-active': currentLang === 'en' }"
              >
                ENG
                <img
                  src="/public/assets/images/lang-en.png"
                  class="is-2"
                  alt="lang"
                />
              </div>
              <div
                class="item"
                @click="this.$emit('change-lang', 'ru')"
                :class="{ 'is-active': currentLang === 'ru' }"
              >
                RU
                <img
                  src="/public/assets/images/lang-ru.png"
                  class="is-2"
                  alt="lang"
                />
              </div>
              <div
                class="item"
                @click="this.$emit('change-lang', 'es')"
                :class="{ 'is-active': currentLang === 'es' }"
              >
                ES
                <img
                  src="/public/assets/images/lang-es.png"
                  class="is-2"
                  alt="lang"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="nav">
          <nav v-if="jsonData">
            <b>{{ jsonData[0] }}</b>
            <router-link to="/">{{ jsonData[1] }}</router-link>
            <router-link to="">{{ jsonData[2] }}</router-link>
            <router-link to="">{{ jsonData[3] }}</router-link>
          </nav>
          <nav v-if="jsonData">
            <b>{{ jsonData[4] }}</b>
            <router-link to="">{{ jsonData[5] }}</router-link>
            <router-link to="">{{ jsonData[6] }}</router-link>
            <router-link to="">{{ jsonData[7] }}</router-link>
            <router-link to="">{{ jsonData[8] }}</router-link>
          </nav>
        </div>
      </div>
      <div class="is-2">
        <div class="top">
          <img src="/public/assets/images/googleplay.png" alt="google play" />
          <img src="/public/assets/images/appstore.png" alt="app store" />
        </div>
        <div class="bottom" v-if="jsonData">
          <b>{{ jsonData[9] }}</b>
          <p>
            {{ jsonData[10] }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url("/public/assets/styles/dist/min/footer.min.css");
</style>

<script>
import jsonDataFile from "~/public/data/footer.json";
export default {
  data() {
    return {
      changeLangActive: false,
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
    isToggleModalChangeLang() {
      this.changeLangActive = !this.changeLangActive;
    },
  },
};
</script>