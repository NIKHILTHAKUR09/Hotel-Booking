// controllers/clerkWebhooks.js
import mongoose from "mongoose";
import User from "../models/User.js";
import { Webhook } from "svix";

// Connect to MongoDB (safe for Vercel serverless)
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

const clerkWebhooks = async (req, res) => {
  try {
    // Connect to DB first
    await connectDB();

    // Verify Clerk webhook
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Will throw if invalid
    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: `${data.first_name} ${data.last_name}`,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
      default:
        console.log("🔶 Unhandled event type:", type);
    }

    res.status(200).json({
      success: true,
      message: "Webhook received and processed successfully",
    });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default clerkWebhooks;
