<template>
  <div class="recommend">
    <div v-for="item in recommends" :key='item.acm' class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style  scoped lang="scss">
.recommend {
  display: flex;
  padding: 10px 0 20px;
  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
    img {
      max-width: 100%;
    }
  }
}
</style>