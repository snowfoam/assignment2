const express = require('express');
const router = express.Router();

const MessageUser = require('../../models/messageUser')

// 获取该用户的所有聊天信息
router.get('/', async (req, res) => {
  let {
    user: {
      _id
    }
  } = req.user
  // 获取私聊消息
  let userMessage = await MessageUser.find({$or: [{from: _id},{to: _id}]}).populate('from to')
  userMessage.reverse()
  // 将所有消息字段中相同的from 和 to取出来
  let res1 = []
  userMessage = userMessage.filter((a) => {
    let obj = {
      from: a.from,
      to: a.to
    }
    return !res1.includes(JSON.stringify(obj)) && res1.push(JSON.stringify(obj))
  })
  // 两个拆一个
  let newArr = []
  userMessage.forEach((e,i) => {
    if(userMessage[i+1]){
      if(e.from.email === userMessage[i+1].to.email){
        if(!e.from._id.equals(_id)){
          e.to = userMessage[i+1].to
        }
        newArr.push(e)
      }
    }
  })
  res.status(200).json({
      data: newArr,
      message: 'success',
      code: 200
    })
});

module.exports = router;