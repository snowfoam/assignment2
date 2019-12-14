const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = mongoose.model('article', new Schema({ 
    content: String,
    created:{type: Date,default: Date.now},
    owner: {type:Schema.Types.ObjectId,ref:'User'},
    comments: [{user: {type:Schema.Types.ObjectId,ref:'User'},content: String}]
}))


module.exports = Article;
