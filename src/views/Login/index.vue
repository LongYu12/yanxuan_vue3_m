<template>
   <div class="login">
      <header>
         <van-nav-bar class="nav-bar" left-text="返回" placeholder left-arrow fixed safe-area-inset-top border
            @click-left="back">
            <template #left>
               <van-icon name="arrow-left" class="icon" />
            </template>
            <template #title>
               <div class="title">{{ userInfo.isTitle ? '登录' : '注册' }}</div>
            </template>
            <template #right>
               <van-icon name="ellipsis" class="icon" />
            </template>
         </van-nav-bar>
      </header>
      <div class="main_login">
         <img src="../../assets/images/logo.png" alt="" class="logo">
         <van-form @submit="onSubmit" class="form">
            <van-cell-group inset>
               <van-field v-model="userInfo.username" name="用户名" label="用户名" placeholder="用户名"
                  :rules="[{ required: true, message: '请填写用户名' }]" />
               <van-field v-model="userInfo.password" type="password" name="密码" label="密码" placeholder="密码"
                  :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
               <van-button round block type="primary" native-type="submit">
                  提交
               </van-button>
            </div>
         </van-form>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref, reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
const userInfo = reactive({
   username: '17001100999',
   password: '123456',
   isTitle: true, // 控制登录
})
const Router = useRouter()
const back = () => {
   Router.back()
}
const onSubmit = () => {
   console.log('登录', Router);
   Router.push('/Home')
}
</script>

<style scoped lang="less"> .login {
    background-color: #eee;
    height: 100%;

    :deep(.van-nav-bar__content) {
       background-color: #fff;
       box-shadow: 0 3px 2px #eee;
       height: 80px;

       .van-nav-bar__title {
          height: 60px;
          line-height: 60px;
       }
    }

    .title {
       font-size: 32px;
       letter-spacing: 2px;
    }

    .icon {
       font-size: 32px;
    }

    .main_login {
       display: flex;
       flex-direction: column;
       align-items: center;

       .logo {
          width: 180px;
          height: 180px;
          margin-top: 80px;
          border-radius: 50%;
          margin-bottom: 80px;
       }
       :deep(.van-field),:deep(.van-field__label ){
         background-color: transparent;
        
       }
       :deep(.van-cell-group--inset){
         background-color: transparent;
       }
       :deep(.van-field),:deep(.van-field__label){
         height: 80px;
         display: flex;
         align-items: center;
       }
       .form{
         width: 600px;
       }
    }
 }
</style>
