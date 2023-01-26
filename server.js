import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connect.js';
// import mongoose from 'mongoose';
// import multer from 'multer';
// import {GridFsStorage} from 'multer-gridfs-storage'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))



// mongodb server connect
const startServer = async()=> {
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
// mongodb server connect
startServer()



// // initialising GridFs bucket
// let bucket;
// mongoose.connection.on('connected', ()=> {
// 	var db = mongoose.connections[0].db
// 	bucket = new mongoose.mongo.GridFSBucket(db, {
// 		bucketName:'audio_files'
// 	})
// })
// // initialising GridFs bucket




// // using GridFsStorage of multer-gridfs-storage to make a GridFs storage
// const storage = new GridFsStorage({
// 	url:process.env.MONGO_URL,
// 	file:(req,file) => {
// 		return new Promise((resolve,reject) => {
// 			const filename = file.originamname;
// 			const fileInfo = {
// 				filename:filename,
// 				bucketName:'audio_files'
// 			}
// 			resolve(fileInfo)
// 		})
// 	}
// })
// // using GridFsStorage of multer-gridfs-storage to make a GridFs storage




// // making a middleware upload having GridFs storage, to be used in /upload endpoint
// const upload = multer({
// 	storage
// });
// // making a middleware upload having GridFs storage, to be used in /upload endpoint




// app.post('/upload', upload.single('audio_file') ,(req,res) => {
// 	const obj = JSON.parse(JSON.stringify(req.body)); 
// 	console.log(obj);
// })
app.get('/', (req,res)=> {
    res.send('hello')
})

