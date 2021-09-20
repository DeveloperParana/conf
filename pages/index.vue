<template lang="html">
  <div>
    <socialFixed/>
    <div class="save-the-date">
      <img width="600" src="~/assets/images/save-the-date-2021.png" alt="Save the Date 2021 - 18 à 20 de Novembro">
    </div>
    <!-- <headerTop/> -->
    <!-- <videoYoutube/> -->
    <!-- <schedule />
    <speakers /> -->
    <!-- <buytickets /> -->
    <!-- <tickets /> -->
    <!-- <location /> -->
    <!-- <contact /> -->
    <div class="bg-footer">
      <!-- <sponsors /> -->
      <footerBottom/>
    </div>
  </div>
</template>

<script>
import socialFixed from "@/components/social-fixed";
import headerTop from "@/components/header";
// import videoYoutube from "@/components/video";
// import schedule from "@/components/schedule";
// import speakers from "@/components/speakers";
// import sponsors from "@/components/sponsors";
import footerBottom from "@/components/footer";
// import buytickets from "@/components/buytickets";
// import tickets from "@/components/tickets";
// import location from "@/components/location";
// import contact from "@/components/contact";

export default {
  components: {
    socialFixed,
    // headerTop,
    // videoYoutube,
    //schedule,
    //speakers,
    //sponsors,
    footerBottom,
    // buytickets,
    // tickets,
    // location,
    // contact,
  },
};
</script>
