'use client';

import React, { useRef, useState } from "react";
import styles from "./sendMessage.module.css";

type SendMessageFormProps = {
  sendMessage: (message: string) => void;
  startTyping: () => void;
  stopTyping: () => void;
};

export default function SendMessageForm({sendMessage, startTyping,stopTyping}: SendMessageFormProps) {
  const [message, setMessage] = useState<string>("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    startTyping();

    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 2000);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  sendMessage(message);
  setMessage("");
  stopTyping();
  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  }
};
  return (
    <form onSubmit={handleSubmit} className="sendmessage-form">
       <div className={`container ${styles.container}`}>
        <input
          value={message}
          onChange={handleInputChange}
          className=""
          placeholder="Enter your message..."
        />
        <button type="submit" className="send-button">
          Send Message
        </button>
      </div>
    </form> 
  )
}
