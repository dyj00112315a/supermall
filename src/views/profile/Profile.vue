<template>
  <div class="profile">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      刷新次数{{ count }}
    </van-pull-refresh>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data () {
    return {
      isLoading: false,
      count: 0
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000);
    }
  }
}
</script>

<style scoped>
.van-pull-refresh {
  color: red;
  /* 计算函数前后都必须要保留一个空格 */
  height: calc(100vh - 49px);
}
</style>
