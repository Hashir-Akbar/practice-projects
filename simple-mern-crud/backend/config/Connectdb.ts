import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI || '', {
      dbName: "Simple-Mern-Crud",
      appName: "Simple Mern Crud App",
    });
    console.log("Connected Successfully with database ✔️");
  } catch (error) {
    console.error("Database Connection Failed");
    process.exit(0);
  }
};
