<template>
  <div class="">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: function () {
        return {};
      }
    }
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
</style>