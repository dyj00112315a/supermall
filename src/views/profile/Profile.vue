<template>
  <div class="profile">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :head-height="80">
      <!-- 这里是插槽prop的知识点 -->
      <template #pulling="props">
        <img class="doge" src="https://img01.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }" />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img01.yzcdn.cn/vant/doge.png" />
      </template>

      <template #loading>
        <img class="doge" src="https://img01.yzcdn.cn/vant/doge-fire.jpg" />
      </template>
      <van-list v-model="loading" :finished="finished" finished-text="到头了，别刷了" @load="onLoad">
        <van-card v-for="item in list" :num="item.num" :tag="item.tag" :price="item.price" :desc="item.desc"
          :title="item.title" :thumb="item.img" :origin-price="item.originPrice"></van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from 'axios';
import GoodsListItemVue from '../../components/content/goods/GoodsListItem.vue';

export default {
  name: "Profile",
  data () {
    return {
      list: [],
      refreshing: false,
      count: 0,
      loading: false,
      finished: false,
    }
  },
  methods: {
    onRefresh () {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    getGoodsList () {
      const instance = axios.create({
        baseURL: 'http://127.0.0.1:4523/m1/1168316-0-default'
      })
      return instance.get('/getGoodsList', {
        params: {
          page: 1,
          type: 'goods'
        }
      }).then(res => res.data).catch(err => err)
    },
    async onLoad () {
      console.log(this.refreshing);
      // 如果是下拉刷新，则清空list，重新获取数据
      if (this.refreshing) {
        this.list = [];
      }
      let data = await this.getGoodsList();
      console.log(data);
      this.list.push(...data);
      console.log();
      this.refreshing = false;
      this.loading = false;
    }
  },
}
</script>

<style scoped>
.van-pull-refresh {
  color: red;
  /* 计算函数前后都必须要保留一个空格 */
  /* height: calc(100vh - 49px); */
}

.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>
