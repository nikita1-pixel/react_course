import RobotPorfileImage from '../assets/robot.png';
import UserPorfileImage from '../assets/user.png';
import './ChatMessage.css';
export function ChatMessage({message, sender}){
    // const message =  props.message;
    // const sender = props.sender;
    //destructuring the props object
    // const {message, sender} = props;
                
    // if(sender === "robot"){
    //     return(
    //         <div>
    //             <img src="robot.png" width="50px"/>
    //             {message}
    //         </div>
    //     )

   // }
    return(
      <div className={sender ==='user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === "robot" && (
        <img src={RobotPorfileImage} alt="Robot chatbot avatar" className="robot-icon" />
      )}
      <div className="chat-message-text">
       {message}
      </div>
      { sender ==="user" && (
      <img src={UserPorfileImage} alt="User avatar" className="user-icon"/>
      )}
      </div>
     )
  }