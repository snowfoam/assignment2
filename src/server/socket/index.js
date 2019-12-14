// module.exports = {
//   // 保存用户的socketId
//   saveUserSocketId: async (userId,socketId) => {

//   },

//   // 获取用户的socketId
//   getUserSocketId: async (toUserId) => {

//   },

//   // 用户切换账号
//   changeUser: async (currentUserId,userId,socketId) => {
    
//   }

// }
// const MessageUser = require('../../models/messageUser')
const User = require('../models/user')
const saveUserSocketId = async (userId,socketId) => {
  await User.findByIdAndUpdate(userId,{socketid: socketId})
}
const getUserSocketId = async (userId) => {
  let user = await User.findById(userId)
  return user.socketid
}
module.exports = io => {
  io.on('connection', socket => {
    const socketId = socket.id

    // 发送消息
    socket.on('sendPrivateMessage', async (data) => {
      let { to } = data
      let socketid = await getUserSocketId(to)
      io.to(socketid).emit('receivePrivateMessage', data)
    })

    // 登录
    socket.on('login', async (data) =>{
      saveUserSocketId(data.userId,socketId)
    })

    // 退出
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });
}