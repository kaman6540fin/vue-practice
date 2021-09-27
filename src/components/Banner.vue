<template>
  <div class="col-md-12">
    <div id="section-1" :class="flexCenter" :style="sectionMinheight">
      <div
        class="bg"
        :style="{
          backgroundImage: 'url(' + siteData.siteImg.bannerImg + ')',
        }"
      ></div>
      <div class="logo d-flex align-items-center" :class="'position-absolute'">
        <img :src="siteData.siteImg.logoImg" alt="" />
        {{ siteData.siteLogoEng }}
        <div class="title" v-html="siteData.siteLogoChi"></div>
      </div>
      <transition name="fade-enter">
      <div class="slide-icon text-center position-absolute"
      v-animate-css="'fadeIn'">
        <p>Slide</p>
        <p>⨠</p>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
  data() {
    return {
      flexCenter: ["d-flex", "justify-content-center", "align-items-center"],
      sectionMinheight: {
        minHeight: "100vh",
      },
      siteData: {
        siteImg: {
          bannerImg: require("../assets/images/bg_01.jpeg"),
          logoImg: require("@/assets/images/logo.svg"),
        },
        siteLogoEng: "I don't want to work",
        siteLogoChi: "<span>不想</span><span>上班</span>",
        sitePhone: "07-536-0000",
        siteAddress: "香港銅鑼灣興發街1號",
        siteIg: "I_dont_wank_to_work",
      },
    };
  },
};
</script>

<style>


  
</style>
