<template lang="html">
  <div>
    <socialFixed/>
    <headerTop/>
    <!-- <videoYoutube/> -->
    <schedule />
    <speakers />
    <!-- <buytickets /> -->
    <!-- <tickets /> -->
    <!-- <location /> -->
    <!-- <contact /> -->
    <div class="bg-footer">
      <sponsors />
      <footerBottom/>
    </div>
  </div>
</template>

<script>
import socialFixed from "@/components/social-fixed";
import headerTop from "@/components/header";
import videoYoutube from "@/components/video";
import schedule from "@/components/schedule";
import speakers from "@/components/speakers";
import sponsors from "@/components/sponsors";
import footerBottom from "@/components/footer";
// import buytickets from "@/components/buytickets";
// import tickets from "@/components/tickets";
// import location from "@/components/location";
// import contact from "@/components/contact";

export default {
  components: {
    socialFixed,
    headerTop,
    videoYoutube,
    schedule,
    speakers,
    sponsors,
    footerBottom,
    // buytickets,
    // tickets,
    // location,
    // contact,
  },
};
</script>

<style lang="scss">
.sponsors-support--bg {
  background: $color-white;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
