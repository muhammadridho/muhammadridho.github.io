const Todo = require('../models/todos')

module.exports = {
  isExist : function(req, res, next){
    let params = req.params.task.split('-').join(' ')
    Todo.findOne({task : params})
        .exec((err, todo) => {
          if (todo == null || err){
            res.send('error')
          }else {
            next()
          }
        })
  }
  
}
