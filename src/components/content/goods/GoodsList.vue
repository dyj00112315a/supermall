<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item" />
  </div>
</template>

<script>
// 导入GoodsListItem组件
import GoodsListItem from "components/content/goods/GoodsListItem.vue";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data () {
    return {
    };
  },

  components: {
    GoodsListItem
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped lang="scss">
</style>