const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageUser = mongoose.model('message_user', new Schema({ 
    from: {type:Schema.Types.ObjectId,ref:'User'},
    to: {type:Schema.Types.ObjectId,ref:'User'},
    created:{type: Date,default: Date.now},
    message: String
}))


module.exports = MessageUser;
