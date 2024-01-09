

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const errorHandlerMiddleWare = require('./middleware/error-hadeling')

const PORT = 3000

// the middleware
app.use(express.static('./public'))
app.use(express.json())



//routes
app.get('/', (req, res)=>{
    res.send('<h1>hello world</h1>')
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleWare)
const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        app.listen(port, console.log('server is listinig}'))

    }catch(error){
        console.log(error)
    }
}

start()
