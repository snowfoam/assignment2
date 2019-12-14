<template>
  <div class="wrapper">
    <div class="boot"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "boot",
  computed: {
    ...mapGetters(["hasGetInfo", "token"])
  },
  created() {
    setTimeout(() => {
      if (this.token && this.hasGetInfo) {
        this.$router.push({
          name: "home"
        });
      } else if (this.token && !this.hasGetInfo) {
        this.$store.dispatch("getUserInfo").then(res => {
          this.$router.push({
            name: "home"
          });
        });
      } else {
        this.$router.push({
          name: "welcome"
        });
      }
    }, 1500);
  }
};
</script>

<style scoped lang="less" type="text/css">
.boot {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(./splash.png) no-repeat center center;
  background-size: contain;
}
</style>
