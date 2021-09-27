<template>
  <div class="container-fluid">
    <div class="row">
      <BannerSection />
    </div>
  </div>
  <div class="container">
    <div class="row">
      <RoomLists />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerSection from "@/components/Banner.vue";
import RoomLists from "@/components/RoomList.vue";

export default {
  name: "banner",
  components: {
    BannerSection,
    RoomLists,
  },
};
</script>
