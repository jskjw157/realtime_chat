import React, { useState } from "react";
import { Socket } from "socket.io-client";

interface ChatInputProps {
  roomId: string;
  socket: Socket;
}

const ChatInput: React.FC<ChatInputProps> = ({ roomId, socket }) => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", { roomId, message });
      setMessage("");
    }
  };

  return (
    <div className="flex p-2 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-2 border rounded-l-lg"
        placeholder="Type your message..."
      />
      <button
        onClick={sendMessage}
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
