<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" />
    <goods-list :goods="currentGoods" />
    <back-top @click.native="backClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

// 导入子组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isBackTopShow: false,
      currentType: "pop"
    };
  },
  computed: {
    currentGoods () {
      return this.goods[this.currentType].list;
    }
  },
  created () {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick (index) {
      this.currentType = Object.keys(this.goods)[index];
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    backClick () {
      window.scrollTo(0, 0);
    },
    scrollProcess () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 1000) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
    },

  },
  mounted () {
    window.addEventListener("scroll", this.scrollProcess);
  },
};
</script>

<style scoped lang="scss">
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: $tint;
  color: #fff;

  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 999;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
