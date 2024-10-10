import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import mongoose from "mongoose";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { errorHandler } from "./middlewares/errorHandler";
import { validateRegister } from "./middlewares";
import { registerUser } from "./controllers/authController";
import "express-async-errors";
import { mongoConnect } from "./models";
// import authRoutes from "./routes/authRoutes";
// import roomRoutes from "./routes/roomRoutes";
// import chatRoutes from "./routes/chatRoutes";
//import { authMiddleware } from "@/middlewares";

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

// 미들웨어 설정
app.use(express.json());
// 회원가입 라우트
app.post("/api/auth/register", validateRegister, registerUser);
// app.use("/api/auth", authRoutes);
// app.use("/api/rooms", authMiddleware, roomRoutes);
// app.use("/api/chats", authMiddleware, chatRoutes);
app.use(errorHandler);

// MongoDB 연결
mongoConnect();

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
