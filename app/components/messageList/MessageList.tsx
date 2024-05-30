'use client';

import { useEffect, useRef } from "react";
import { Message } from "@/app/accountmessages/page";

type props = {
  messages: Message[],
  currentUserName: string
}

export default function MessageList({messages, currentUserName} : props){
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((item, index) => (
        <div key={index} className={`chat-row ${item.userName === currentUserName ? 'right' : 'left'}`}>
          <div className="chat-bubble">
            <div className="time">{item.time}</div>
            <div className="message">{item.message}</div>
        </div>
      </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}
