import React from "react";

const ChatComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* 사이드바: 모바일에서 숨기고, 데스크탑에서만 표시 */}
      <div className="hidden md:block md:w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold">채팅방 목록</h2>
        {/* 채팅방 목록이 여기 표시됨 */}
      </div>

      {/* 채팅 본문 */}
      <div className="w-full md:w-3/4 flex flex-col">
        <div className="bg-blue-500 p-4">
          <h2 className="text-lg text-white">채팅방 제목</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{/* 메시지 목록 */}</div>
        <div className="p-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="메시지를 입력하세요..."
          />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
