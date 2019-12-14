<template>
  <div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-cell id="title1" title="New Friend" value=">" size="large" @click="show" />
      <div style="height: 80vh;"><!--查看自己的好友-->
        <van-list v-model="loading" :finished="finished" finished-text="No more">
          <van-cell id="chatfriend" v-for="(item,index) in userInfo.friends" :key="item+index" @click="chat(index)">//点击头像聊天
            <van-image fit="cover" round width="40px" height="40px" :src="item.avatar" slot="icon" />
            <span id="friendnick" slot="title" style="margin-left:16px;">{{item.nickName}}</span>
            <span id="friendsignature" slot="label" style="margin-left:16px;">{{item.signature}}</span>
          </van-cell>
        </van-list>
      </div>
      <van-popup v-model="isShow" position="bottom" style="height:100%;width:100%;">
        <van-nav-bar id="newfriendclick" title="New Friendsss" left-arrow @click-left="isShow = false" />
        <van-list v-model="friendLoading" :finished="FriendFinished" finished-text="No more">
          <van-cell v-for="(item,index) in data" :key="index">
            <van-image
              id="friendinfo"
              fit="cover"
              round
              width="40px"
              height="40px"
              :src="_id===item.to._id? item.from.avatar: item.to.avatar"
              slot="icon"
            />
            <span
              id="nickname"
              slot="title"
              style="margin-left:16px;"
            >{{_id===item.to._id? item.from.nickName: item.to.nickName}}</span>
            <div slot="label" style="margin-left:16px;display: flex;justify-content:space-between">
              <div id="message">{{item.message}}</div>
              <div v-if="!(_id === item.to.id) ">
                <div v-if="item.status === 0">
                  <van-button
                    id="butaccept"
                    size="small"
                    type="info"
                    style="maring-right: 5px;"
                    @click="handleclick(1,index)"
                  >Accept</van-button>
                  <van-button id="butrefuse" size="small" type="danger" @click="handleclick(2,index)">Refuse</van-button>
                </div>
                <div>
                  <span id="accpted1">{{item.status === 1?'Accepted':'Refused'}}</span>
                </div>
              </div>
              <div v-if="(_id === item.to.id)">
                <span id="accept2">{{item.status ===0?'Loading':item.status === 1?'Accepted':'Refused'}}</span>
              </div>
            </div>
            <div
              v-if="!(_id === item.to.id)"
              slot="label"
              style="margin-left:16px;"
            >Source：{{item.source}}</div>
          </van-cell>
        </van-list>
      </van-popup>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getFriendNews, reply } from "@/api/friend";

import { mapGetters } from "vuex";
export default {
  name: "friends",
  data() {
    return {
      activeName: "a",
      list: [],
      loading: false,
      finished: true,
      isShow: false,
      data: [],
      friendLoading: false,
      FriendFinished: false,
      isRefresh: false
    };
  },
  computed: {
    ...mapGetters(["_id", "userInfo"])
  },
  created() {
    this.getNews();
  },
  methods: {
    show() {
      this.isShow = true;
    },
    handleclick(status, index) {
      let id = this.data[index]._id;
      reply({ status, id }).then(res => {
        if (res.status === 200) {
          this.getNews();
          this.$store.dispatch("getUserInfo");
          return this.$notify({ type: "success", message: res.data.message });
        }
        this.$notify(res.data.message);
      });
    },
    getNews() {
      this.friendLoading = true;
      getFriendNews().then(res => {
        this.data = res.data.data;
        this.friendLoading = false;
        this.FriendFinished = true;
      });
    },
    chat(index) {
      let from = this._id;
      let to = this.userInfo.friends[index]._id;
      this.$router.push({
        name: "chatone",
        params: {
          from,
          to,
          friend: this.userInfo.friends[index]
        }
      });
    },
    onRefresh() {
      this.getNews();
      this.$store.dispatch("getUserInfo").then(res => {
        this.isRefresh = false;
      });
    }
  }
};
</script>