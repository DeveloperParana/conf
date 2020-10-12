<template lang="html">
  <div>
    <header class="header" id="home">
        <menuFixed />
        <div class=" size margin">
            <div class="hero container wrap">
              <div class="container wrap justify-content-between full-width">
                <div class="header-block">
                  <div class="logo">
                    <img src="~/assets/images/logo-full.svg" width="100%" alt="Logo DevParaná 2020">
                  </div>

                  <div class="intro-message margin-top-40">
                    <div>
                      Dos dias <span>10</span> à <span>30 de outubro</span>,
                    </div>
                    <div>
                      online e gratuito no YouTube.
                    </div>
                  </div>
                </div>

                <div class="hero-video">
                  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/pDzoF6qaey0?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                </div>
              </div>

              <div class="hero-img">
                <img src="~/assets/images/talks.png" width="100%" alt="Logo DevParaná 2020">
              </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
import menuFixed from "@/components/menu";

export default {
  components: {
    menuFixed,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: url("~/assets/images/hero.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 1280px;
  margin-bottom: 80px;
}

.hero {
  min-height: calc(100vh - 80px);
  position: relative;
  padding-top: 100px;
}

.logo {
  img {
    width: 430px;
    max-width: 100%;
  }
}

.intro-message {
  text-align: right;
  font-size: 20px;

  span {
    color: $color-1;
  }
}

.hero-img {
  width: 100%;
  max-width: 600px;
  position: absolute;
  bottom: 120px;
  left: 0;
}

.hero-video {
  max-width: 100%;
  width: 560px;
  height: 315px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: $radius;
}
</style>
