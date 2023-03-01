<template>
  <div class="tabcell">
    <van-tabbar route v-model="active" active-color="#1baeae" safe-area-inset-bottom>
      <van-tabbar-item replace to="/Home" > 
        <span>首页</span>
        <template #icon="props">
          <van-icon name="wap-home-o" size="1.5em" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Category" >
        <span>分类</span>
        <template #icon="props">
          <van-icon name="cluster-o" size="1.5em"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Cart">
        <span>购物车</span>
        <template #icon="props">
          <van-icon name="shopping-cart-o" size="1.5em" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/User" >
        <span>我的</span>
        <template #icon="props">
          <van-icon name="manager-o" size="1.5em" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
const active = ref('/Home');
</script>

<style scoped lang="less">
.tabcell {
  .van-tabbar {
    padding: 30px 0;
    border-top: 1px solid #1baeae;
  }

  .van-tabbar-item {
    font-size: 26px;
    padding-top: 10px;

  }
  .van-tabbar-item__icon .van-icon{
    padding-bottom: 4px;
    font-size: 22px;
  }
}
</style>
 
