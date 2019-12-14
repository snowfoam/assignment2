<template>
  <meta http-equiv="Access-Control-Allow-Origin" content="*">
  <div class="wrapper">
    <div class="btns">
      <van-button id="login" plain type="primary" to="/login">Login</van-button>
      <van-button id="register" type="info" to="/register">New User</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'welcome',
  computed: {
    ...mapGetters(['hasGetInfo','token'])
  },
  created(){
  }
}
</script>

<style scoped lang="less" type="text/css">
.wrapper{
  background: url('./splash.png') no-repeat center/cover;
  position: relative;
  height: 100%;
  overflow: hidden;
}
.btns{
  position: absolute;
  bottom: 12%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

</style>
