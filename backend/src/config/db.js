import mongoose from "mongoose"

 export const connectDB=async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB is connected succfully" );
} catch (error) {
    console.error("somthing happend to the connection ",error );
}




    
} 