const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      stampIt = require('mongoose-stamp')

require('../config/mongo')

const todoSchema = new Schema({
  task : {
    type : String,
    required : [true, 'must be filled']
  },
  completed : {
    type : Boolean,
    default : false
  }
})

todoSchema.plugin(stampIt)//give created at and update at

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
