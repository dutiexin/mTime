<template>
    <div class="cities">
        <region-picker :province="province" :city="city" :district="district">

        </region-picker>
    </div>
</template>

<script>
import Vue from "vue";
import { RegionPicker } from "vue-region-picker";
import REGION_DATA from "china-area-data";

RegionPicker.region = REGION_DATA;
export default {
  name: "",
  data() {
    return {
      province: "黑龙江省", // you can set initial value or not.
      city: null, // by code or name.
      district: ""
    };
  },
  components: {RegionPicker}
};
</script>

<style lang='scss' scoped>
    .cities{
        width:4em;
        overflow:hidden;
        height:4em;
        
    }
</style>
