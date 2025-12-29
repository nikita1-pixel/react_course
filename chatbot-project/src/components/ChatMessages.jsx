import { useEffect, useRef } from 'react';
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css';
export function ChatMessages( {chatMessages}){
      const chatMessagesRef = useRef(null);

      useEffect(() => {
        const conatinerElem = chatMessagesRef.current;
        if(conatinerElem){
          conatinerElem.scrollTop = conatinerElem.scrollHeight;
        }
      },
      //dependency array = controls when useEffect runs
      [chatMessages])

    return (
      <div className="chat-messages-container"
      ref={chatMessagesRef}>
        {chatMessages.map((chatMeassge) => {
          return (
          <ChatMessage 
            message={chatMeassge.message} //props {object.message}
            sender={chatMeassge.sender}
            key={chatMeassge.id}
          />
          )
        })}
      </div>
        )
    }
