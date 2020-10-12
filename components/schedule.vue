<template>
  <div class="schedule">
    <div class="size margin content" id="schedule">
      <div class="container justify-content-center">
        <div class="box-title text-align-center">
          <h2>Programação Outubro DevConf Online</h2>
        </div>
      </div>

      <div class="">
        <img src="~/assets/images/schedule.png" width="100%" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sheduleSelected: 1,
    };
  },
  computed: {
    ...mapState(["schedules"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/schedule.scss";
</style>
