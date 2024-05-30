
import styles from './ChatRoom.module.css'
import { Message } from '../../accountmessages/page'
import { MutableRefObject } from 'react'
import MessageList from '../messageList/MessageList'
import SendMessageForm from '../sendMessage/SendMessageForm'
import UserTypingNotification from '../userTyping/UserTypingNotification'


type props = {
  messages: Message[],
  sendMessage: (message: string) => Promise<void>,
  currentUserName: string,
  typingUsers: string[],
  startTyping: () => Promise<void>,
  stopTyping: () => Promise<void>
}

export const ChatRoom = ({messages, sendMessage, currentUserName, typingUsers, startTyping, stopTyping}: props) => {
  return (
    <div className="chat-room">
      <div className={`container ${styles.container}`}>
        <h3>Chat Room</h3>
        <MessageList messages={messages} currentUserName={currentUserName} />
      </div>
      <UserTypingNotification typingUsers={typingUsers} />
      <SendMessageForm sendMessage={sendMessage} startTyping={startTyping} stopTyping={stopTyping} />
    </div>
  )
}
