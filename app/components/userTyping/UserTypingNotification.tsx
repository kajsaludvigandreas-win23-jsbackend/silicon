import React from "react"
import styles from "./userTyping.module.css"


type props = {
  typingUsers: string[]
}





export default function UserTypingNotification({typingUsers}: props) {
  return (
    <div className="typing-indicator">
      <div className={`container ${styles.container}`}>
        {typingUsers.map((userName) => ( 
          <div key={userName}>
            {userName} is typing...
          </div>
        ))}
      </div>
    </div>
  )
}
