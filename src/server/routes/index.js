const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const User = require('../models/user')
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    let result = /\.[^\.]+/.exec(file.originalname)
    cb(null,file.fieldname + '-' + Date.now() + result[0])
  },
  destination: path.join(__dirname,'../public/images')
})
const upload = multer({storage})

const userRouter = require('./router/user')
const authRouter = require('./router/auth')
const friendRouter = require('./router/friend')
const chatRouter = require('./router/chat')
const messageRouter = require('./router/message')
const articleRouter = require('./router/article')

let url = 'http://localhost:3000/img/'

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('avatar'), async ( req, res) => {
  let filename = req.file.filename
  let id = req.user.user._id
  await User.findByIdAndUpdate(id,{avatar: `${url}${filename}`})
  res.status(200).json({
    message:'success'
  })
})

router
  .use('/user', userRouter)
  .use('/auth', authRouter)
  .use('/friend', friendRouter)
  .use('/chat', chatRouter)
  .use('/message', messageRouter)
  .use('/article', articleRouter)

module.exports = router;
