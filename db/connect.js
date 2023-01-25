import mongoose from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', false);
    try {
        console.log('mongo conected')
        return mongoose.connect(url)
    }
    catch {
        console.log('error')
    }
}

export default connectDB