import mongoose, { Document, Schema } from "mongoose";
import type { IUser } from "./user";

export interface IRoom extends Document {
  title: string;
  maxUsers: number;
  users: IUser[];
  owner: IUser;
  isPrivate: boolean;
  createdAt: Date;
}

const roomSchema = new Schema<IRoom>({
  title: { type: String, required: true },
  maxUsers: { type: Number, required: true, default: 10, min: 1, max: 100 },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isPrivate: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Room = mongoose.model<IRoom>("Room", roomSchema);
