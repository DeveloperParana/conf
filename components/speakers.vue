<template>
  <div class="speakers">
    <div class="size-padding margin content" id="speakers">
      <div class="speakers-container">
        <div
          class="speakers-block"
          v-for="week in weeks"
          :key="week.id"
          :class="{ active: speakerSelected === week.id }"
        >
          <div class="box-title">
            <h2 class="container">
              <span>{{ week.title }}</span
              >Semana
            </h2>
          </div>

          <div class="speakers-list">
            <div
              v-for="speaker in week.speakers"
              :key="speaker.id"
              class="item"
              @click="speakerSelected = speaker.id"
              v-on:mouseover="speakerSelected = speaker.id"
            >
              <div class="item-fixed container justify-content-between">
                <span class="item-date">{{ speaker.date }}</span>
                <span class="item-event">{{ speaker.event }}</span>
              </div>

              <div class="item-image">
                <img
                  :src="
                    require('@/assets/images/speakers/' +
                      speaker.image +
                      '.jpg')
                  "
                  width="100%"
                />
              </div>

              <span class="item-title">{{ speaker.name }}</span>
              <div class="item-info">
                <span class="item-role">{{ speaker.role }}</span>
                <span class="item-description">{{ speaker.description }}</span>
              </div>

              <ul
                class="list-style-none content--info-social container align-items-center"
              >
                <li v-if="speaker.linkedin">
                  <a v-bind:href="speaker.linkedin" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li v-if="speaker.github">
                  <a v-bind:href="speaker.github" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li v-if="speaker.facebook">
                  <a v-bind:href="speaker.facebook" target="_blank">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li v-if="speaker.instagram">
                  <a v-bind:href="speaker.instagram" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li v-if="speaker.twitter">
                  <a v-bind:href="speaker.twitter" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      speakerSelected: 0,
    };
  },
  computed: {
    ...mapState(["weeks"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/speakers.scss";
</style>
