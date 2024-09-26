import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(
      (process.env.MONGODB_URI as string) || "",
      {}
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database.");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default dbConnect;
