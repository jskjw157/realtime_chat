import mongoose from "mongoose";
export * from "./chat";
export * from "./room";
export * from "./user";

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = Bun.env;
const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@cluster0.d0b8x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const mongoConnect = async () => {
  const connect = async () => {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    if (NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    try {
      await mongoose.connect(MONGO_URL, {
        dbName: "realtime_chat",
      });
      console.log("MongoDB connected");
    } catch (error) {
      console.error(error);
    }
  };

  await connect();

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to db");
  });

  mongoose.connection.on("error", (error) => {
    console.error(error);
  });
  mongoose.connection.on("disconnected", async () => {
    console.log("Mongoose disconnected");
    await connect();
  });
};
