'use client';

import React, { useState } from "react";
import styles from './WaitingRoom.module.css';

type props = {
  joinChatRoom: (userName: string, chatRoom: string) => Promise<void>
}

export const WaitingRoom = ({joinChatRoom}: props) => {
  const [userName, setUserName] = useState<string>(``);
  const [chatRoom, setChatRoom] = useState<string>('standard');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinChatRoom(userName, chatRoom);
  }

  return (

    <div className={`container ${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name" />
        <input value={chatRoom} onChange={(e) => setChatRoom(e.target.value)} placeholder="chatroom" />
        <button type="submit">Join Chat Room</button>
      </form>
    </div>

  )
}
