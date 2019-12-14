<template>
  <div class="login">
    <van-nav-bar title="Login" left-arrow @click-left="$router.back()" />
   <div class="email">
    <van-cell-group>
      <van-field id="email" v-model="form.email" label="Email" placeholder="Please enter your email..." />
    </van-cell-group>
   </div>>
    <div class="password">
    <van-cell-group>
      <van-field id="psw"
        v-model="form.password"
        type="password"
        label="Password"
        placeholder="Please enter your password"
      />
    </van-cell-group>
    </div>>
    <div style="text-align: center">
      <van-button id="btnlogin" type="info" @click="login">Login</van-button>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
    login() {
      this.handleLogin(this.form).then(result => {
        if (result.code === 200) {
          this.getUserInfo().then(res => {
            if ( res.data.code === 200 ) {
              return this.$router.push("/home");
            }
            this.$notify(res.data.message);
          });
        } else {
          this.$notify(result.message)
        }
      })
    }
  }
};
</script>
<style scoped lang="less">
</style>