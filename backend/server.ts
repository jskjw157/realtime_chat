import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import mongoose from "mongoose";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
// import authRoutes from "./routes/authRoutes";
// import roomRoutes from "./routes/roomRoutes";
// import chatRoutes from "./routes/chatRoutes";
// import { authMiddleware } from "./middleware/authMiddleware";

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

// 미들웨어 설정
app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/rooms", authMiddleware, roomRoutes);
// app.use("/api/chats", authMiddleware, chatRoutes);

// MongoDB 연결
mongoose
  .connect("mongodb://localhost:27017/chatapp")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Socket.IO 연결
io.on("connection", (socket: any) => {
  console.log("New client connected:", socket.id);

  socket.on("joinRoom", ({ roomId }: { roomId: string }) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  //   socket.on("sendMessage", async (data: any) => {
  //     const { roomId, userId, message, image, video } = data;
  //     // 채팅 데이터 저장
  //     const chat = new Chat({
  //       room: roomId,
  //       user: userId,
  //       chat: message,
  //       image,
  //       video,
  //     });
  //     await chat.save();

  //     io.to(roomId).emit("newMessage", chat);
  //   });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// 서버 시작
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
