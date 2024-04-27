import React from 'react';
import ChatMessage from "@/components/ChatMessage";
import { chatData } from "@/lib/data";

export default function ChatSession() {
  return (
    <div>
      {chatData.map(({user, message}) => (
        <ChatMessage user={user} message={message} />
      ))}
    </div>
  );
}
