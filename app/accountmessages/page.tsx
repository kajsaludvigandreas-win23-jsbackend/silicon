'use client';

import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import AccountNav from '../components/accountSideNav/accountSideNav';
import styles from './accountMessages.module.css';
import { useRef, useState } from 'react';
import { WaitingRoom } from '../components/waitingRoom/WaitingRoom';
import { ChatRoom } from '../components/chatRoom/ChatRoom';

export type Message = {
    time: string,
    userName: string,
    message: string
  }

export default function accountMessages() {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [typingUsers, setTypingUsers] = useState<string[]>([]);
    const currentUserName = useRef<string>("");
    const currentChatRoom = useRef<string>("");

    const startTyping = async () => {
        try {
            await connection?.invoke("StartTyping", currentUserName.current, currentChatRoom.current);
        } catch (error: any) 
        {
         console.log("Failed to start typing: ", error)   
        }
    }

    const stopTyping = async () => {
        try {
            await connection?.invoke("StopTyping", currentUserName.current, currentChatRoom.current);
        } catch (error: any) 
        {
         console.log("Failed to stop typing: ", error)   
        }
    }

    const joinChatRoom = async (userName: string, chatRoom: string) => {
      try {
        const hubConnection = new HubConnectionBuilder()
        .withUrl("https://localhost:7184/accountmessages")
        .withAutomaticReconnect()
        .build();

        hubConnection.on("ReceiveMessage", (time: string, userName: string, message: string) => {
          setMessages(messages => [...messages, { time, userName, message }]);
        });

        hubConnection.on("UserTyping", (userName: string) => {
          setTypingUsers(users => [...new Set([...users, userName])]);
        });

        hubConnection.on("UserStoppedTyping", (userName: string) => {
          setTypingUsers(users => users.filter(x => x != userName));
        });

        await hubConnection.start();
        await hubConnection.invoke("JoinSpecificChatRoom", {userName, chatRoom});
        setConnection(hubConnection);
        currentUserName.current = userName;
        currentChatRoom.current = chatRoom;

      }
      catch (error: any)
      {
        console.error("Failed to join chat room: ", error)
      }
    }

    const sendMessage = async (message: string) => {
        try 
        {
            await connection?.invoke("SendMessage", message);
            await connection?.invoke("UserStoppedTyping", currentUserName.current, currentChatRoom.current);
        } 
        catch (error: any) {
            console.error("Failed to send message: ", error)
        }
    }



    return (

        <section id="messages">
            <div className={`container ${styles.container}`}>
                <AccountNav/>

                <>
                  {!connection        
                      ? <WaitingRoom joinChatRoom={joinChatRoom}/>
                      : <ChatRoom 
                          messages={messages}
                          sendMessage={sendMessage} 
                          currentUserName={currentUserName.current}
                          typingUsers={typingUsers}
                          startTyping={startTyping}
                          stopTyping={stopTyping}
                      />
                  }
                </>
            </div>
        </section>      
    )};