<template>
  <div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" style="width:100%;height:100%;">
      <van-list v-model="loading" :finished="finished" finished-text="No more">
        <van-cell id="click" v-for="(item,index) in data" :key="item+index" @click="chat(item)">
          <van-image
            id="friendavatar"
            fit="cover"
            round
            width="40px"
            height="40px"
            :src="item.to.avatar"
            slot="icon"
          />
          <span id="fdnickname" slot="title" style="margin-left:16px;">{{item.to.nickName}}</span>
          <span id="fdmessage" slot="label" style="margin-left:16px;">{{item.message}}</span>
          <span
            slot="right-icon"
            style="font-size: 8px;color:#aaa"
          >{{item.created | parseMessageTime}}</span>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getAllMessage } from "@/api/chat";
export default {
  name: "message",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      data: "",
      isRefresh: false
    };
  },
  created() {
    this.loading = true;
    getAllMessage().then(res => {
      this.data = res.data.data;
      this.loading = false;
      this.finished = true;
    });
  },
  methods: {
    chat(item) {
      let from = this._id;
      let to = item.to._id;
      this.$router.push({
        name: "chatone",
        params: {
          from,
          to,
          friend: item.to
        }
      });
    },
    onRefresh() {
      this.loading = true;
      getAllMessage().then(res => {
        this.data = res.data.data;
        this.loading = false;
        this.finished = true;
        this.isRefresh = false;
      });
    }
  },
  computed: {
    ...mapGetters(["_id", "userInfo"])
  },
  filters: {
    parseMessageTime(old_time) {
      let now = new Date(),
        old = new Date(old_time),
        now_year = now.getFullYear(),
        old_year = old.getFullYear(),
        now_month = now.getMonth() + 1,
        old_month = old.getMonth() + 1,
        now_date = now.getDate(),
        old_date = old.getDate(),
        format_month = old_month.toString().padStart(2, "0"),
        format_date = old_date.toString().padStart(2, "0"),
        format_minutes = old
          .getMinutes()
          .toString()
          .padStart(2, "0"),
        dayArr = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ];
      if (now_year == old_year) {
        if (now_month == old_month && now_date - old_date < 7) {
          if (now_date == old_date) {
            return `${old.getHours()}:${format_minutes}`;
          } else if (now_date == old_date + 1) {
            return "昨天";
          } else if (now_date == old_date + 2) {
            return "前天";
          } else {
            return dayArr[old.getDay()];
          }
        } else {
          return `${format_month}-${format_date}`;
        }
      } else {
        return `${old_year}-${format_month}-${format_date}`;
      }
    }
  }
};
</script>
<style scoped lang="less">
</style>