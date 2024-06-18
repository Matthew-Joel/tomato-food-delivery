import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Matthewjoel:Yjtwp81310@cluster0.5ig47cj.mongodb.net/tomato-food-delivery-app').then(()=>console.log('DB connected'))
}