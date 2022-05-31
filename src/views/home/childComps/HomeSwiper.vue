<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
    </swiper-item>
  </swiper>
</template>



<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  components: {
    Swiper,
    SwiperItem,
  },

  computed: {},

  methods: {},
};
</script>
<style  scoped lang="scss">
</style>