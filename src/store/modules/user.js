import {
  login,
  getUserInfo,
  updatedUserInfo
} from '@/api/user'
import {
  setToken,
  getToken
} from '@/libs/util'

export default {
  state: {
    userId: '',
    token: getToken(),
    hasGetInfo: false,
    nickName: '',
    avatar: '',
    sex: '',
    age: '',
    level: '',
    signature: '',
    favor: '',
    friends: [],
    isAdmin: ''
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id
    },
    setavatar(state, avatar) {
      state.avatar = avatar
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo(state, status) {
      state.hasGetInfo = status
    },
    setNickName(state, nickName) {
      state.nickName = nickName
    },
    setSex(state, sex) {
      state.sex = sex
    },
    setAge(state, age) {
      state.age = age
    },
    setLevel(state, level) {
      state.level = level
    },
    setFavor(state, favor) {
      state.favor = favor
    },
    setFriends(state, friends) {
      state.friends = friends
    },
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin
    },
    setSignature(state, signature) {
      state.signature = signature
    },
  },
  actions: {
    handlegetcode({
      commit
    }, {
      userEmail
    }) {
      return new Promise((resolve, reject) => {
        sendcode({
          userEmail
        }).then(res => {
          const data = res.data
          const status = res.data.status
          if (status === 200) {
            resolve(res.data)
          } else {
            resolve(res.data)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleLogin({
      commit
    }, {
      email,
      password
    }) {
      return new Promise((resolve, reject) => {
        login({
          email,
          password
        }).then(res => {
          const code = res.data.code
          if (code === 200) {
            commit('setToken', res.data.token)
            resolve(res.data)
          } else {
            resolve(res.data)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleLogOut({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        resolve()
      })
    },
    getUserInfo({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const data = res.data.data
          if (res.data.code === 200) {
            commit('setUserId', data._id)
            commit('setHasGetInfo', true)
            commit('setNickName', data.nickName)
            commit('setSex', data.sex)
            commit('setAge', data.age)
            commit('setLevel', data.level)
            commit('setFavor', data.favor)
            commit('setFriends', data.friends)
            commit('setIsAdmin', data.isAdmin)
            commit('setSignature',data.signature)
            commit('setavatar',data.avatar)
            resolve(res)
          } else {
            resolve(res)
          }
        }).catch(err=>{
          reject(err)
        })
      })
    },
    updatedUserInfo({commit},userinfo){
      return new Promise((resolve,reject) => {
        updatedUserInfo(userinfo).then(res => {
          resolve(res)
        }).catch(err => reject(err))
      })
    }
  },
  getters:{
    userInfo(state){
      let userInfo = {
        nickName: state.nickName,
        avatar: state.avatar,
        sex: state.sex,
        age: state.age,
        level: state.level,
        signature: state.signature,
        favor: state.favor,
        userId: state.userId,
        friends: state.friends
      } 
      return userInfo
    },
    hasGetInfo(state){
      return state.hasGetInfo
    },
    token(state){
      return state.token
    },
    _id(state){
      return state.userId
    }
  }
}