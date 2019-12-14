<template>
  <div>
    <van-sticky>
      <van-nav-bar :title="title" left-arrow @click-left="$router.back()" />
    </van-sticky>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li id="myfriends" v-for="(item,index) in messages" :key="index" :class="{'end': item.from === _id}">
          <div>
            <van-image
              id="friendavatar"
              fit="cover"
              round
              width="40px"
              height="40px"
              :src="item.from === _id? userInfo.avatar: friend.avatar"
              slot="icon"
            />
          </div>
          <div class="chat">
            <p id="message">{{item.message}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="cell">
      <van-button id="sendbutton" style="float:right;" round type="info" @click="send">send</van-button>
      <van-cell-group>
        <van-field id="textarea" v-model="message" rows="1" autosize type="textarea" placeholder="请输入留言" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { getMessages, sendMessage } from "@/api/chat";
import { mapGetters } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "chatOne",
  data() {
    return {
      from: this.$route.params.from,
      to: this.$route.params.to,
      messages: [],
      title: "Loading",
      friend: "",
      message: "",
      scroll: ""
    };
  },
  created() {
    let from = this.$route.params.from;
    let to = this.$route.params.to;
    let friend = this.$route.params.friend;
    this.title = friend.nickName;
    this.friend = friend;
    getMessages({ from, to }).then(res => {
      this.messages = res.data.data;
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {});
        this.scroll.scrollTo(0,this.scroll.maxScrollY)
      });
    });
  },
  computed: {
    ...mapGetters(["_id","userInfo"])
  },
  methods: {
    send() {
      if(this.message === '') return
      let data = {
        message: this.message,
        to: this.friend._id,
        from: this._id
      };
      // 传到数据库
      sendMessage(data).then(res => {
        // 发送给socket
        this.$socket.emit("sendPrivateMessage", data);
        // 这里自己也要显示
        this.messages.push(data);
        this.message = ''
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {});
            this.scroll.scrollTo(0,this.scroll.maxScrollY)
          } else {
            this.scroll.refresh();
            this.scroll.scrollTo(0,this.scroll.maxScrollY)
          }
        });
      });
    }
  },
  sockets: {
    receivePrivateMessage(data) {
      this.messages.push(data);
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {});
          this.scroll.scrollTo(0,this.scroll.maxScrollY)
        } else {
          this.scroll.refresh();
          this.scroll.scrollTo(0,this.scroll.maxScrollY)
        }
      });
    }
  },

  mounted() {}
};
</script>

<style scoped lang="less">
.cell {
  position: fixed;
  bottom: 16px;
  width: 100%;
}
.cell .van-cell {
  width: 90%;
  margin: auto;
}
.cell .van-cell-group {
  width: 83%;
  border-radius: 50px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
}
.wrapper {
  width: 100%;
  height: 83vh;
  overflow: hidden;
  padding-top: 16px;
  // margin-top: 30px;
  // font-size: 16px;
}
.wrapper ul li {
  display: flex;
  margin-left: 10px;
  line-height: 40px;
}
.chat {
  font-size: 28px;
  background: #fff;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  min-height: 40px;
  margin-left: 16px;
  padding: 0 16px;
  margin-bottom: 16px;
}
.end {
  flex-direction: row-reverse;
  .chat {
    margin-right: 16px;
  }
}
</style>