<template>
  <div>
    <div class="max_container">
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
            <!--  <video
              src="/public/assets/videos/duothing.mp4"
              muted
              autoplay
              loop
            ></video> -->

            <img src="/public/assets/images/duothing.gif" alt="photo" />
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
              <img v-lazy="'/assets/images/phone.png'" alt="phone" />
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
                <img v-lazy="'/assets/images/ico5.png'" alt="Ico" />
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
          <img v-lazy="'/assets/images/ai1.png'" class="is-1" alt="ai_icon" />
          <img v-lazy="'/assets/images/ai2.png'" class="is-2" alt="ai_icon" />
          <img v-lazy="'/assets/images/ai3.png'" class="is-3" alt="ai_icon" />
          <img v-lazy="'/assets/images/ai4.png'" class="is-4" alt="ai_icon" />
          <h2 v-if="jsonData">
            {{ jsonData.block5.h2.main }}
            <span>{{ jsonData.block5.h2.span }}</span>
          </h2>
          <div class="images-delphi">
            <img
              v-lazy="'/assets/images/delphi.png'"
              class="is-5"
              alt="ai_icon"
            />
            <img
              v-lazy="'/assets/images/delphi.png'"
              class="is-6"
              alt="ai_icon"
            />
          </div>
          <button type="button" class="is-1" v-if="jsonData">
            {{ jsonData.block5.button }}
            <img v-lazy="'/assets/images/ico0.png'" alt="ico0" />
          </button>
          <div class="mobile-btns">
            <button type="button" class="is-2" v-if="jsonData">
              <img v-lazy="'/assets/images/tg.png'" alt="ico0" />
              {{ jsonData.block5.mobileButton[0] }}
            </button>
            <button type="button" class="is-3" v-if="jsonData">
              <img v-lazy="'/assets/images/globe.png'" alt="ico0" />
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
                  <span class="name"> {{ jsonData.block6.plan.name }}</span>
                  <span class="structure">
                    {{ jsonData.block6.plan.structure }}</span
                  >
                </div>
                <div class="items">
                  <div class="item is-start">
                    <img
                      v-lazy="'/assets/images/ico1.svg'"
                      class="is-1"
                      alt="ico"
                    />
                    <img
                      v-lazy="'/assets/images/ai5.png'"
                      class="is-opacity"
                      alt="ai"
                    />
                    {{ jsonData.block6.plan.steps[0] }}
                  </div>
                  <div class="item">
                    <img
                      v-lazy="'/assets/images/ico2.svg'"
                      class="is-1"
                      alt="ico"
                    />
                    <img v-lazy="'/assets/images/ai5.png'" alt="ai" />
                    {{ jsonData.block6.plan.steps[1] }}
                  </div>
                  <div class="item">
                    <img
                      v-lazy="'/assets/images/ico2.svg'"
                      class="is-1"
                      alt="ico"
                    />
                    <img v-lazy="'/assets/images/ai6.png'" alt="ai" />
                    {{ jsonData.block6.plan.steps[2] }}
                  </div>
                  <div class="item">
                    <img
                      v-lazy="'/assets/images/ico2.svg'"
                      class="is-1"
                      alt="ico"
                    />
                    <img v-lazy="'/assets/images/ai7.png'" alt="ai" />
                    {{ jsonData.block6.plan.steps[3] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="box2">
              <img v-lazy="'/assets/images/c1.png'" class="is-1" alt="c1" />
              <div class="r1"></div>
              <div class="r2"></div>
              <img v-lazy="'/assets/images/c2.png'" class="is-2" alt="c2" />
              <div class="text" v-if="jsonData">
                <div class="name">{{ jsonData.block6.items[1].title }}</div>
                <div class="description">
                  {{ jsonData.block6.items[1].description }}
                </div>
              </div>
            </div>
            <div class="box3" v-if="jsonData">
              <div class="left">
                <div class="text">
                  <div class="name">{{ jsonData.block6.items[2].title }}</div>
                  <div class="description">
                    {{ jsonData.block6.items[2].description }}
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="top">
                  <img v-lazy="'/assets/images/ico4.svg'" alt="ico" />
                  {{ jsonData.block6.steps[3] }}
                </div>
                <button>
                  {{ jsonData.block6.steps[4] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block7">
      <div class="skeleton" v-if="!jsonData"></div>
      <h2 v-if="jsonData">
        <span>{{ jsonData.block7.h2[0] }}</span> {{ jsonData.block7.h2[1] }}
      </h2>
      <div class="skeleton" v-if="!jsonData"></div>
      <div class="skeleton" v-if="!jsonData"></div>
      <div class="skeleton" v-if="!jsonData"></div>
      <div v-if="jsonData">
        <div class="items">
          <div
            class="item"
            v-for="(item, index) in jsonData.block7.items"
            :key="index"
          >
            <div class="count">{{ item.count }}</div>
            <div class="totalCount">{{ item.totalCount }}</div>
            <div class="description">{{ item.description }}</div>
          </div>
        </div>
      </div>
      <div class="img">
        <img v-lazy="'/assets/images/map.jpg'" alt="Map" />
        <div class="mask"></div>
      </div>
    </div>
    <div class="max_container">
      <div class="max_container">
        <div class="block8">
          <div class="left">
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <h2 v-if="jsonData">{{ jsonData.block8.h2 }}</h2>
            <p v-if="jsonData">{{ jsonData.block8.p }}</p>
            <button type="button" v-if="jsonData">
              {{ jsonData.block8.button }}
              <img v-lazy="'/assets/images/ico0.png'" alt="ico0" />
            </button>
          </div>
          <div class="right">
            <img v-lazy="'/assets/images/certificate.png'" alt="certificate" />
          </div>
        </div>
        <div class="block9">
          <h2 v-if="jsonData">
            {{ jsonData.block9.h2[0] }}
            <span>{{ jsonData.block9.h2[1] }}</span> {{ jsonData.block9.h2[2] }}
          </h2>
          <div class="skeleton" v-if="!jsonData"></div>
          <div class="skeleton" v-if="!jsonData"></div>
          <div class="skeleton" v-if="!jsonData"></div>
          <div class="skeleton" v-if="!jsonData"></div>
          <div class="cards" v-if="jsonData">
            <div
              class="card"
              v-for="(item, index) in jsonData.block9.items"
              :key="index"
            >
              <img v-lazy="item.photo" alt="Ico" />
              <p>{{ item.text }}</p>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="block10">
          <div class="is-circle is-1"></div>
          <div class="is-circle is-2"></div>
          <div class="is-circle is-3"></div>
          <div class="container">
            <h2 v-if="jsonData">{{ jsonData.block10.h2 }}</h2>
            <div class="skeleton" v-if="!jsonData"></div>
            <h3 v-if="jsonData">{{ jsonData.block10.h3 }}</h3>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <h4 v-if="jsonData">{{ jsonData.block10.h4 }}</h4>
            <div class="cards" v-if="jsonData">
              <div
                class="card"
                v-for="(item, index) in jsonData.block10.items"
                :key="index"
              >
                <img v-lazy="item.photo" alt="AI" />
                {{ item.name }}
              </div>
            </div>
            <div class="skeleton" v-if="!jsonData"></div>
            <button type="button" v-if="jsonData">
              {{ jsonData.block10.button }}
            </button>
          </div>
        </div>
        <div class="block11">
          <div class="left">
            <h2 v-if="jsonData">{{ jsonData.block11.h2 }}</h2>
            <p v-if="jsonData">
              {{ jsonData.block11.p[0] }}
              <span>{{ jsonData.block11.p[1] }}</span>
            </p>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <img v-lazy="'/assets/images/kit.png'" alt="kit" />
          </div>
          <div class="right">
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <div v-if="jsonData" class="items">
              <div
                class="item"
                @click="toggleFAQ(index)"
                v-for="(item, index) in jsonData.block11.items"
                :key="item.id || index"
              >
                <div class="item-top">
                  <div>
                    {{
                      currentIndexFAQ === index ? item.answer : item.question
                    }}
                  </div>
                  <span>{{ currentIndexFAQ === index ? "-" : "+" }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block12">
          <div class="container">
            <div class="left">
              <h2 v-if="jsonData">{{ jsonData.block12.h2 }}</h2>
              <h3 v-if="jsonData">
                {{ jsonData.block12.h3[0] }} <span>5 &#9733;</span>
                {{ jsonData.block12.h3[1] }}
              </h3>
              <div class="skeleton" v-if="!jsonData"></div>
              <div class="skeleton" v-if="!jsonData"></div>
            </div>
            <div class="right">
              <div class="top">
                <img v-lazy="'/assets/images/icop1.png'" alt="ico" />
                <img v-lazy="'/assets/images/icop2.png'" alt="ico" />
                <img v-lazy="'/assets/images/icop3.png'" alt="ico" />
                <img v-lazy="'/assets/images/icop4.png'" alt="ico" />
              </div>
              <div class="bottom">
                <img v-lazy="'/assets/images/r1.png'" alt="r1" />
              </div>
            </div>
          </div>
          <div class="cards" v-if="jsonData">
            <div
              class="card"
              v-for="(item, index) in jsonData.block12.items"
              :key="index"
            >
              <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div class="text">{{ item.text }}</div>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="block13">
          <div class="left">
            <h2 v-if="jsonData">
              {{ jsonData.block13.h2[0] }}
              <span>{{ jsonData.block13.h2[1] }}</span>
              {{ jsonData.block13.h2[2] }}
            </h2>
            <h3 v-if="jsonData">{{ jsonData.block13.h3 }}</h3>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <div class="skeleton" v-if="!jsonData"></div>
            <button type="button" v-if="jsonData">
              {{ jsonData.block13.button }}
              <img src="/public/assets/images/ico0.png" alt="ico0" />
            </button>
          </div>
          <div class="right">
            <img src="/public/assets/images/phone2.png" alt="phone" />
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
      currentIndexFAQ: null,
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
    toggleFAQ(index) {
      this.currentIndexFAQ = this.currentIndexFAQ === index ? null : index;
    },
  },
  directives: {
    lazy: {
      mounted(el, binding) {
        const options = {
          root: null,
          rootMargin: "1000px",
          threshold: 0,
        };

        const handleLazyLoad = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              if (element.tagName === "IMG" || element.tagName === "VIDEO") {
                element.src = binding.value;
              }
              observer.unobserve(element);
            }
          });
        };

        const observer = new IntersectionObserver(handleLazyLoad, options);
        observer.observe(el);
      },
    },
  },
};
</script>