<template>
  <div style="height:100%;wdith:100%;">
      <van-nav-bar
        id="dynamictitle"
        title="Friends Dynamics"
        left-arrow
        @click-left="$router.back()"
        @click-right ="addShow = true"
      >
        <van-icon id="addshow" name="plus" slot="right" />
      </van-nav-bar>
      <van-pull-refresh v-model="isRefresh" @refresh="onRefresh" style="height:100%;">
      <ul>
        <div id="notingdynamic"
          style="text-align: center;font-size: 20px;margin-top:100px;"
          v-if="list.length === 0"
        >Nothing....</div>
        <van-panel
          id="nickDynamic"
          v-for="(item,index) in list"
          :key="index"
          :title="item.owner.nickName"
          :desc="item.created"
          style="margin-bottom:16px;box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5); background:#fff;"
        >
          <div slot="header" style="font-size: 16px;overflow:hidden;padding: 10px 16px 0;">
            <div style="float:left;margin-right: 14px;">
              <van-image
                id="avatarDynamic"
                fit="cover"
                round
                width="40px"
                height="40px"
                :src="item.owner.avatar"
                slot="icon"
              />
            </div>
            <div id="mynickname" style="margin-top:5px;">{{item.owner.nickName}}</div>
            <div
               id="time"
              style="font-size: 14px;color: #777;margin-top:5px;"
            >{{item.created | parseMessageTime}}</div>
          </div>
          <div id="content" style="font-size: 18px;padding: 0 16px;margin-top:10px;">{{item.content}}</div>
          <div slot="footer">
            <p v-for="(v,i) in item.comments" :key="v+i" style="font-size:16px;">
              <span id="usercontnet" style="color: blue;font-size: 16px;">{{v.user.nickName}}:</span>//留言
              {{v.content}}
            </p>
            <div style="text-align:right;">
              <van-icon
                id="contentshow"
                v-show="!item.isShow"
                @click="show(index)"
                name="comment-o"
                style="font-size:24px;"
              />
              <div v-show="item.isShow" class="cell">
                <van-button id="send" style="float:right;" round type="info" @click="submit(index)">send</van-button>
                <van-cell-group>
                  <van-field
                    id="leavecontent"
                    style="background: #eee;"
                    v-model="content"
                    rows="1"
                    autosize
                    type="textarea"
                    placeholder="Comment"
                  />
                </van-cell-group>
              </div>
            </div>
          </div>
        </van-panel>
      </ul>
    </van-pull-refresh>
    <van-popup v-model="addShow" position="top" style="height:100%;width:100%;background: #eee;">
      <van-nav-bar id="newDynamic" title="New Dynamics" left-arrow @click-left="addShow = false" />//发布动态
      <van-cell-group style=" box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);margin-top:16px;">
        <van-field
          id="sharecontent"
          round
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          placeholder="share your happy things..."
        />
      </van-cell-group>
      <van-button
        id="butnsend"
        @click="create"
        round
        type="info"
        size="large"
        style="box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);margin-top:16px;"
      >Send</van-button>//发布
    </van-popup>
  </div>
</template>

<script>
import { createArticle, getArticles, addComment } from "@/api/article";

export default {
  name: "Article",
  data() {
    return {
      list: [],
      content: "",
      isShow: false,
      addShow: false,
      message: "",
      scroll: "",
      isRefresh: false
    };
  },
  created() {
    this.getArticle();
    console.log(this.list)
  },
  methods: {
    create() {
      createArticle({ content: this.message }).then(res => {
        if (res.status === 200) {
          this.message = "";
          this.addShow = false;
          this.getArticle();
          return this.$notify({ type: "success", message: res.data.message });
        }
        this.$notify(res.data.message);
      });
    },
    show(index) {
      this.content = "";
      let data = this.list;
      data = data.map(e => {
        e.isShow = false;
        return e;
      });
      data[index].isShow = true;
      this.list = data;
    },
    getArticle() {
      getArticles().then(res => {
        let list = res.data.data;
        list = list.map(e => {
          e.isShow = false;
          return e;
        });
        this.list = list;
        this.isRefresh = false;
      });
    },
    submit(index) {
      addComment({ id: this.list[index]._id, content: this.content }).then(
        res => {
          if (res.status === 200) {
            this.getArticle();
            return this.$notify({ type: "success", message: res.data.message });
          }
          this.$notify(res.data.message);
        }
      );
    },
    onRefresh() {
      this.getArticle();
    }
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
p {
  font-size: 20px;
  margin-bottom: 10px;
}
.cell .van-cell {
  width: 90%;
  margin: auto;
}
.cell .van-cell-group {
  width: 83%;
  background: #eee;
}
</style>