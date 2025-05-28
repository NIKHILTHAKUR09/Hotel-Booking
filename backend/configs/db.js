import colors from "colors";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgBlack.yellow);
  } catch (error) {
    console.error(`Error: ${error}`.bgBlack.red);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
