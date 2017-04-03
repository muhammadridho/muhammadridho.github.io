const Todo = require('../models/todos')

module.exports = {
  list : function(req, res){
      Todo.find({})
          .exec((err, data) => {
            if (err || data == null)  res.json({success : false, data : null})

            res.json({success : true, data : data})
          })
  },

  create : function(req, res){
      Todo.create({task: req.body.task}, (err, todo) => {
            if (err) res.json({error : err})
            res.json({success : true, data : todo})
          })
  },

  delete : function(req, res){
      let params = req.params.task.split('-').join(' ')
      Todo.remove({task: params}, (err) => {
        if (!err)
          res.json({success : true})
      })
  },

  completed : function(req, res){
    let params = req.params.task.split('-').join(' ')
    Todo.update({task : params}, {completed : true}, {new : true})
        .exec((err, todo) => {
          if (err) console.log('error')
          res.json({success : true})
        })
  },

  uncompleted : function(req, res){
    let params = req.params.task.split('-').join(' ')
    Todo.update({task : params}, {completed : false}, {new : true})
        .exec((err, todo) => {
          if (err) console.log('error')
          res.json({success : true})
        })
  }
}
