const express = require('express')
const router = express.Router()
const {getAllTasks,
     createtasks, 
     deleteTask, 
     updateTask,
      getTask,
    } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createtasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) 


module.exports = router