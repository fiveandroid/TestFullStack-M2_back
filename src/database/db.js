import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://test:test4321@cluster0.lbfy7pt.mongodb.net/test_mern')
        console.log('>>> DB is connected')
    } catch (error) {
        console.log(error)
    }
}