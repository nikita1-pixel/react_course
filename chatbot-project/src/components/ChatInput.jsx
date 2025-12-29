import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }){
    const[inputText, setInputText] = useState('');

    function saveInputText(event){
      setInputText(event.target.value);
    }

    function sendMessage(){
      const newChatMeassages = [
        ...chatMessages,
        {
          message: inputText,
          sender: 'user',
          id: crypto.randomUUID()
        }
      ]
      
      setChatMessages(newChatMeassages);

       const response = Chatbot.getResponse(inputText);
         setChatMessages([
        ...newChatMeassages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

      setInputText('');
    }
  return (
  <div className="chat-input-container">
    <input 
    className="chat-input"
      placeholder="Send a message to your ChatBot"
      size ="30" 
      onChange={saveInputText}
      value={inputText}
    />
    <button
      className="send-button" 
      onClick={sendMessage}>
        Send
      </button>
    </div>
    )}

