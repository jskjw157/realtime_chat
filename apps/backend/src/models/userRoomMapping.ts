import mongoose, { Schema, Document } from "mongoose";
interface IUserRoomMapping extends Document {
  userId: Schema.Types.ObjectId;
  roomId: Schema.Types.ObjectId;
  role: "owner" | "admin" | "member";
  joinedAt: Date;
}

const UserRoomMappingSchema = new Schema<IUserRoomMapping>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  role: { type: String, enum: ["owner", "admin", "member"], default: "member" },
  joinedAt: { type: Date, default: Date.now },
});

export const UserRoomMapping = mongoose.model<IUserRoomMapping>(
  "UserRoomMapping",
  UserRoomMappingSchema
);
