<template>
  <div>
    <div class="max_container">
      <div class="block1">
        <div class="left">
          <div class="heading" v-if="jsonData">
            <h1>
              {{ jsonData.block1.h1.text }}
              <span>{{ jsonData.block1.h1.span }}</span>
            </h1>
            <div>
              <h2>{{ jsonData.block1.h2 }}</h2>
              <h3>{{ jsonData.block1.h3 }}</h3>
            </div>
          </div>
          <div class="skeleton" v-if="!jsonData"></div>
          <button type="button" v-if="jsonData">
            {{ jsonData.block1.button }}
            <img src="/public//assets/images/ico0.png" alt="ico0" />
          </button>
          <div class="skeleton" v-if="!jsonData"></div>
          <div class="peoples">
            <div class="images">
              <img src="/public/assets/images/p1.jpg" alt="p1" />
              <img src="/public/assets/images/p2.jpg" alt="p2" />
              <img src="/public/assets/images/p3.jpg" alt="p3" />
              <img src="/public/assets/images/p4.jpg" alt="p4" />
              <img src="/public/assets/images/p5.jpg" alt="p5" />
            </div>
            <span v-if="jsonData">{{ jsonData.block1.peoples }}</span>
            <div class="skeleton" v-if="!jsonData"></div>
          </div>
        </div>
        <div class="right">
          <img src="/public/assets/images/photo1.png" alt="photo" />
        </div>
      </div>
      <div class="block2">
        <div class="skeleton" v-if="!jsonData"></div>
        <div v-if="jsonData">
          <div
            class="is-paragraph"
            v-for="(item, index) in jsonData.block2.items"
            :key="index"
          >
            <div v-if="currentIdSlider === index">“{{ item }}”</div>
          </div>
          <div class="slider_buttons">
            <span
              v-for="(item, index) in jsonData.block2.items"
              :key="index"
              @click="currentIdSlider = index"
              :class="{ 'is-active': currentIdSlider === index }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("/public//assets/styles/dist/min/index.min.css");
</style>

<script>
import jsonDataFile from "~/public/data/index.json";
export default {
  data() {
    return {
      jsonData: null,
      currentIdSlider: 0,
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
  mounted() {
    this.jsonData = jsonDataFile[this.currentLang];
  },
};
</script>