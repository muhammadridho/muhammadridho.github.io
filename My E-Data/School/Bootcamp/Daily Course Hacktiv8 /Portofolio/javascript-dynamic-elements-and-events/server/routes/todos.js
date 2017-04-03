const Todo = require('../controllers/todo'),
      express = require('express'),
      router = express.Router(),
      data = require('../helpers/auth')


router
      .get('/', Todo.list)

      .post('/', Todo.create)

      .post('/:task', Todo.create)

      .delete('/:task', data.isExist ,Todo.delete)

      .get('/completed/:task', data.isExist, Todo.completed)

      .put('/completed/:task', data.isExist, Todo.completed)

      .get('/uncompleted/:task', data.isExist, Todo.uncompleted)

      .put('/uncompleted/:task', data.isExist, Todo.uncompleted)

module.exports = router;
