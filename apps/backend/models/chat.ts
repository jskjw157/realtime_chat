import mongoose, { Document, Schema } from "mongoose";
import type { IUser } from "./user";
import type { IRoom } from "./room";

export interface IChat extends Document {
  room: IRoom;
  user: IUser;
  chat?: string;
  image?: string;
  video?: string;
  createdAt: Date;
}

const chatSchema = new Schema<IChat>({
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  chat: { type: String },
  image: { type: String },
  video: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Chat = mongoose.model<IChat>("Chat", chatSchema);
