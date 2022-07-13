<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {

  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped lang="scss">
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
  z-index: 999;

  img {
    width: 43px;
    height: 43px;
  }
}
</style>