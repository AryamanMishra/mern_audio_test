import mongoose from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', false);
    try {
        console.log('mongo connected')
        return mongoose.connect(url) 
    }
    catch (err) {
        console.log(err)
    }
}

export default connectDB