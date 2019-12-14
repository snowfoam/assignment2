<template>
  <div>
    <div v-show="pageShow">
      <van-nav-bar id="title" title="New User" left-arrow @click-left="goback(0)" >New User</van-nav-bar>
      <van-cell-group>
        <van-field id="email" label="Email" placeholder="Please enter email" v-model="form.email">Email</van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          id="code"
          v-model="form.code"
          center
          clearable
          label="Code"
          placeholder="Please enter code"
        >Code
          <van-button id="sendcode" slot="button" size="small" type="primary" @click="sendCodes">Send Code</van-button>
        </van-field>
        <van-cell-group>
          <van-field id="pwd" label="Password" type="password" placeholder="Please enter password" v-model="form.password">Password</van-field>
        </van-cell-group>
      </van-cell-group>
      <van-button id="next1" style="width:100%;margin-top:16px;" type="info" @click="next(0)">Next</van-button>
    </div>
    <div v-show="!pageShow">
      <van-nav-bar id="title1" title="Infomation" left-arrow @click-left="goback(1)" />
      <van-cell-group>
        <van-field id="nickname" label="NickName" v-model="info.nickName" />
        <van-cell id="sex" title="Sex" clickable @click="radio = '1'">
          <van-radio-group
            v-model="info.sex"
            style="display:flex;font-size: 16px; justify-content: space-around;"
          >
            <van-radio id="male" name="male">male</van-radio>
            <van-radio id="female" name="female">female</van-radio>
          </van-radio-group>
        </van-cell>
        <van-field
          id="age"
          label="Age"
          v-model="info.age"
        />
        <van-field id="favor" label="Favor" v-model="info.favor" />
        <van-button id="next2" style="width:100%;margin-top: 16px;" type="info" @click="next(1)">Next</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import {sendCode,checkCode,register} from '@/api/user'
export default {
  name: "register",
  data() {
    return {
      form: {
        email: "",
        code: "",
        password:''
      },
      info: {
        nickName: "",
        sex: "male",
        age: "",
        favor: ""
      },
      show: false,
      pageShow: true
    };
  },
  methods: {
    goback(number) {
      if (number) {
        this.pageShow = true;
      } else {
        this.$router.back();
      }
    },
    next(number) {
      if (number) {
        register({...this.info,...this.form}).then(res => {
          if(res.status === 200){
            this.$notify({type:'success', message:'Success'})
            this.$router.push('/welcome')
          } else{
            this.$notify(res.data.message)
          }
        })
      } else {
        checkCode(this.form).then(res => {
          if( res.status === 200 ){
            this.pageShow = false;
          } else{
            this.$notify(res.data.message)
          }
        })
      }
    },
    sendCodes() {
      if (this.form.email === "") {
        this.$notify("The mailbox cannot be empty.");
      } else if (/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.email)){
        sendCode(this.form).then((result) => {
          console.log(result)
        }).catch((err) => {
        });
        this.$notify({ type: "success", message: "Success" });
      } else {
        this.$notify("The email format is incorrect.");
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>