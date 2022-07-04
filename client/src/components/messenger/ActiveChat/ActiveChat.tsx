import React from "react";
import { ActiveChatHeader, Messages, Input } from ".";
import "./activeChat.css";

const ActiveChat = () => {
  return (
    <section className="chat-wrapper">
      <ActiveChatHeader userName={""} online={""} />
      <div className="messages-container">
        <Messages messages={""} otherUser={""} userId={""} />
        <Input otherUser={""} conversationId={""} user={""} postMessage={""} />
      </div>
    </section>
  );
};

export default ActiveChat;