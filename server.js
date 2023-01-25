import express from 'express'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.get('/', (req,res)=> {
    res.send('hello')
})


const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(5000, ()=> {
            console.log('listening on port 5000')
        })
    }
    catch(err) {
        console.log(err)
    }
}

start()