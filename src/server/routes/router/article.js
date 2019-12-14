const express = require('express');
const router = express.Router();

const Article = require('../../models/article')
const User = require('../../models/user')


router
  .post('/create',async (req, res) => {
    let { content } = req.body
    if( content === ''){
      return res.status(404).json({
        data: null,
        code: 404,
        message: 'No empty'
      })
    }
    let id = req.user.user._id
    await new Article({content,owner: id}).save()
    res.status(200).json({
      data: null,
      code: 200,
      message: 'Success'
    })
  })
  .get('/', async (req, res) => {
    let id = req.user.user._id
    let user = await User.findById(id)
    let friends = [user._id,...(user.friends)]
    // 获取所有的动态
    let article = await Article.find().populate('owner comments.user')
    // 过滤
    article = article.filter( e => {
      if (e.owner._id) {
        return friends.some(v => v.equals(e.owner._id))
      }else {
        return false
      }
    })
    // 按时间排序
    article = article.sort((prev, current) => {
      return prev.created < current.created
    })
    res.status(200).json({
      data: article,
      code: 200,
      message: 'Success'
    })
  })
  .put('/:id', async (req, res) => {
    let id = req.params.id
    let userId = req.user.user._id
    let user = await User.findById(userId)
    let {content} = req.body
    let article = await Article.findById(id)
    let obj = {
      user: user._id,content
    }
    article.comments.push(obj)
    await article.save()
    res.status(200).json({
      data: null,
      code: 200,
      message: 'Success'
    })
  })

  module.exports = router

