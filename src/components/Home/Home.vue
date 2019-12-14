<template>
  <meta http-equiv="Access-Control-Allow-Origin" content="*">
  <div style="width:100%;height:100%;overflow: hidden;">
    <div style="height: 8%">
      <van-nav-bar :title="active" @click-right="right" @click-left="left" class="bar"><!--点击头像改数据-->
        <van-icon id="plus" name="plus" slot="right" />
        <div slot="left" style="top: 0">
          <van-image
            id="clickavatar"
            fit="cover"
            round
            width="40px"
            height="40px"
            :src="userInfo.avatar"
          />
        </div>
      </van-nav-bar>
    </div>
    <router-view style="height: 80%;"></router-view>
    <van-popup id="rightshow"v-model="rightShow" position="right" style="height:100%;width:100%;">
      <van-nav-bar id="addshow" title="Add" left-arrow @click-left="rightShow = false" />
        <van-search
            id="email"
            v-model="searchPerson"
            shape="round"
            placeholder="Please enter Emali to find friend"
            background="#F0F3F6"
            @search="onSearchPerson"
        />
        <van-panel title="UserInfo" v-show="searchShow">
          <div style="font-size:16px">
            <p>
              <span id="nickname">NickName:</span>
              {{personInfo.nickName}}
            </p>
            <p>
              <span id="age">Age:</span>
              {{personInfo.age}}
            </p>
            <p>
              <span id="sex">Sex:</span>
              {{personInfo.sex}}
            </p>
            <p>
              <span id="favor">Favor:</span>
              {{personInfo.favor}}
            </p>
            <p>
              <span id="signature">Signature:</span>
              {{personInfo.signature}}
            </p>
          </div>
          <div slot="footer"><!--添加好友-->
            <van-button id="addUser" size="large" type="info" @click="add">Add User</van-button>
          </div>
        </van-panel>

    </van-popup>
    <van-popup v-model="leftShow" position="left" style="height:100%;width:100%;">
      <van-nav-bar :title="userInfo.nickName" left-arrow @click-left="leftShow = false" /><!--点击名字-->
      <div style="text-align: center;width:100%;">
        <van-uploader :after-read="afterRead">
          <van-image id="useravator" width="150" fit="contain" :src="userInfo.avatar" /><!--点击头像-->
        </van-uploader>
      </div>
      <van-cell-group>
        <van-field id="nickname1" label="NickName" v-model="info.nickName" :disabled="disabled" />
        <van-cell id="sex1" title="Sex" clickable @click="radio = '1'">
          <van-radio-group
            id="selectsex"
            v-model="info.sex"
            style="display:flex;font-size: 16px; justify-content: space-around;"
            :disabled="disabled"
          >
            <van-radio id="male1" name="male">male</van-radio>
            <van-radio id="female1" name="female">female</van-radio>
          </van-radio-group>
        </van-cell>
        <van-field
          id="age1"
          label="Age"
          v-model="info.age"
          :disabled="disabled"
        />
        <van-field id="favor1" label="Favor" v-model="info.favor" :disabled="disabled" />
        <van-field id="signature1" label="signature" v-model="info.signature" :disabled="disabled" />
        <van-button
          id="save"
          style="width:100%;margin-top: 16px;"
          type="info"
          @click="save"
        >{{!disabled?'Save':'Edit'}}</van-button>
        <van-button
         id="logout"
        style="width:100%;margin-top: 16px;"
          type="info"
          @click="Logout"
          >
          Logout
        </van-button>
      </van-cell-group>
    </van-popup>
    <van-tabbar v-model="active">
      <van-tabbar-item id="message" name="Message" to="message" icon="chat">Message</van-tabbar-item>
      <van-tabbar-item id="friends" name="Friends" to="friends" icon="friends">Friends</van-tabbar-item>
      <van-tabbar-item id="dynamic" name="Dynamic" to="article" icon="star">Dynamic</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { search, addPerson,upload } from "@/api/user";
export default {
  name: "home",
  created() {
    if (this.token && !this.hasGetInfo) {
      this.$store.dispatch("getUserInfo").then(res => {
        this.$socket.emit("login", {
          userId: res.data.data._id
        });
      });
    } else if (!this.token) {
      this.$router.push({
        name: "boot"
      });
    }
  },
  computed: {
    ...mapGetters(["userInfo", "hasGetInfo", "token"])
  },
  data() {
    return {
      active: this.$route.name,
      searchValue: "",
      searchPerson: "",
      searchGroup: "",
      rightShow: false,
      searchType: "person",
      leftShow: false,
      info: {
        nickName: "",
        sex: "male",
        age: "",
        favor: "",
        signature: ""
      },
      disabled: true,
      show: false,
      personInfo: {
        nickName: "",
        email: "",
        age: "",
        favor: "",
        signature: "",
        _id: ""
      },
      searchShow: false
    };
  },
  methods: {
    ...mapActions(["updatedUserInfo"]),
    right() {
      this.rightShow = true;
    },
    left() {
      this.info = this.userInfo;
      this.leftShow = true;
    },
    onSearchPerson() {
      search(this.searchPerson).then(res => {
        this.personInfo = res.data.data;
        this.searchShow = true;
      });
    },
    add() {
        let obj = {
          to: this.personInfo._id,
          message: "Apply to add you as a friend",
          source: "Email search"
        };
        addPerson(obj).then(res => {
          this.$notify({ type: "success", message: res.data.message });
        });
    },
    save() {
      if (!this.disabled) {
        this.updatedUserInfo(this.info).then(res => {
          this.$notify({ type: "success", message: "Success" });
        });
      }
      this.disabled = !this.disabled;
    },
    afterRead(file){
      let data = new FormData();
      data.append("avatar", file.file);
      upload(data).then(res => {
        this.$store.dispatch('getUserInfo')
      })
    },
    Logout(){
      this.$store.dispatch('handleLogOut').then(res => {
        location.reload()
      })
    }
  },
  watch: {
    $route(val) {
      this.active = val.name;
    }
  }
};
</script>
<style scoped lang="less">
.bar .van-nav-bar__left {
  top: 10px;
}
</style>