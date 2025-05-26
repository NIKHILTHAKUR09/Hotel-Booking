
import colors from "colors";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`.bgBlack.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgBlack.red);
  }
};

export default connectDB;
