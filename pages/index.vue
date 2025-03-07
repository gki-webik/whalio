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
            <img src="/public/assets/images/ico0.png" alt="ico0" />
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
      <div class="block3">
        <div class="left">
          <div class="skeleton" v-if="!jsonData"></div>
          <h2 v-if="jsonData">
            {{ jsonData.block3.h2.main }}
            <span>{{ jsonData.block3.h2.span }}</span>
          </h2>
          <div class="skeleton" v-if="!jsonData"></div>
          <h3 v-if="jsonData">{{ jsonData.block3.h3 }}</h3>
          <div class="box">
            <div class="container">
              <div class="list">
                <div class="item is-circle"></div>
                <div class="item is-dashed"></div>
                <div class="item is-circle"></div>
                <div class="item is-dashed"></div>
                <div class="item is-circle"></div>
                <div class="item is-dashed"></div>
                <div class="item is-circle"></div>
              </div>
              <div class="list is-text">
                <div class="div-text" v-if="!jsonData">
                  <div class="skeleton"></div>
                  <div class="skeleton"></div>
                  <div class="skeleton"></div>
                  <div class="skeleton"></div>
                </div>
                <div v-if="jsonData" class="div-text">
                  <div
                    v-for="(item, index) in jsonData.block3.list"
                    :key="index"
                  >
                    <div class="title">{{ item.title }}</div>
                    <div class="description">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="/public/assets/images/phone.png" alt="phone" />
          </div>
        </div>
      </div>
      <div class="block4">
        <h2 v-if="jsonData">{{ jsonData.block4.h2 }}</h2>
        <h3 v-if="jsonData">{{ jsonData.block4.h3 }}</h3>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="cards" v-if="jsonData">
          <div
            class="card"
            v-for="(item, index) in jsonData.block4.items"
            :key="index"
          >
            <div class="top">
              <img src="/public/assets/images/ico5.png" alt="Ico" />
              {{ item.title }}
            </div>
            <div class="bottom">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="block5">
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <img src="/public/assets/images/ai1.png" class="is-1" alt="ai_icon" />
        <img src="/public/assets/images/ai2.png" class="is-2" alt="ai_icon" />
        <img src="/public/assets/images/ai3.png" class="is-3" alt="ai_icon" />
        <img src="/public/assets/images/ai4.png" class="is-4" alt="ai_icon" />
        <h2 v-if="jsonData">
          {{ jsonData.block5.h2.main }}
          <span>{{ jsonData.block5.h2.span }}</span>
        </h2>
        <div class="images-delphi">
          <img
            src="/public/assets/images/delphi.png"
            class="is-5"
            alt="ai_icon"
          />
          <img
            src="/public/assets/images/delphi.png"
            class="is-6"
            alt="ai_icon"
          />
        </div>
        <button type="button" class="is-1" v-if="jsonData">
          {{ jsonData.block5.button }}
          <img src="/public/assets/images/ico0.png" alt="ico0" />
        </button>
        <div class="mobile-btns">
          <button type="button" class="is-2" v-if="jsonData">
            <img src="/public/assets/images/tg.png" alt="ico0" />
            {{ jsonData.block5.mobileButton[0] }}
          </button>
          <button type="button" class="is-3" v-if="jsonData">
            <img src="/public/assets/images/globe.png" alt="ico0" />
            {{ jsonData.block5.mobileButton[1] }}
          </button>
        </div>
      </div>
      <div class="block6">
        <h2 v-if="jsonData">
          {{ jsonData.block6.h2[0] }} <span>{{ jsonData.block6.h2[1] }}</span>
          {{ jsonData.block6.h2[2] }}
        </h2>
        <h3 v-if="jsonData">{{ jsonData.block6.h3 }}</h3>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="skeleton" v-if="!jsonData"></div>
        <div class="container" v-if="jsonData">
          <div class="box1">
            <div class="step">
              <div class="name">{{ jsonData.block6.items[0].title }}</div>
              <div class="description">
                {{ jsonData.block6.items[0].description }}
              </div>
            </div>
            <div class="plan">
              <div class="title">
                {{ jsonData.block6.plan.title }}
              </div>
              <div class="description">
                {{ jsonData.block6.plan.description }}
              </div>
              <div class="line">
                <span class="name"> {{ jsonData.block6.plan.structure }}</span>
                <span class="structure">
                  {{ jsonData.block6.plan.structure }}</span
                >
              </div>
              <div class="items">
                <div class="item">
                  <img src="/public/assets/images/ico1.png" alt="ico" />
                  {{ jsonData.block6.plan.steps[0] }}
                </div>
                <div class="item">
                  <img src="/public/assets/images/ico2.png" alt="ico" />
                  <img src="/public/assets/images/ai5.png" alt="ai" />
                  {{ jsonData.block6.plan.steps[1] }}
                </div>
                <div class="item">
                  <img src="/public/assets/images/ico2.png" alt="ico" />
                  <img src="/public/assets/images/ai6.png" alt="ai" />
                  {{ jsonData.block6.plan.steps[2] }}
                </div>
                <div class="item">
                  <img src="/public/assets/images/ico2.png" alt="ico" />
                  <img src="/public/assets/images/ai7.png" alt="ai" />
                  {{ jsonData.block6.plan.steps[3] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("/public/assets/styles/dist/min/index.min.css");
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