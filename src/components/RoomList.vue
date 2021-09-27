<template>
  <div class="col-md-12">
    <div class="roomsHeader">
      <h1>{{ roomsHeader }}</h1>
    </div>
  </div>
  <div class="col-md-4 d-flex" v-for="(items, index) in rooms" :key="index">
    <div class="boxTitle">{{ items.name }}</div>
    <div class="box">
      <div class="boxImg">
        <img :src="items.imageUrl" alt="" class="h-100 w-100 overflow-hidden" />
      </div>
      <div class="boxBody mr-auto">
        <div class="room-detail d-flex justify-content-between text-center">
          <div class="number">
            <p class="h6">人數</p>
            <p>1</p>
          </div>
          <div class="bed">
            <p class="h6">床</p>
            <p>Single</p>
          </div>
          <div class="size">
            <p class="h6">大小</p>
            <p>18m<sup>2</sup></p>
          </div>
        </div>
        <div class="room-services text-center">
          <p>wifi , 早餐 , 電話 , 空調 , 冰箱 , 禁止吸煙 , 可帶寵物</p>
        </div>

        <div class="room-holidayPrice">
          <p><span>假日</span>${{ items.holidayPrice }}</p>
        </div>
        <div class="room-normalPrice">
          <p><span>平日</span>${{ items.normalDayPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RoomLists",
  data() {
    return {
      roomsHeader: "ROOMS",
      rooms: [],
    };
  },
  mounted() {
    const headers = {
      authorization:
        "Bearer " +
        "TJuqfa4z35u3GSBwQmNPxem2FceIJ21SuuFH260t46KnYmIvJQ8v5qseeWz4",
      accept: "application/json",
    };

    axios
      .get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", {
        headers,
      })
      .then((res) => {
        console.log(res);
        this.rooms = res.data.items;
      })
      .catch((err) => {
        console.log("連線異常", err);
      });
  },
};
</script>
