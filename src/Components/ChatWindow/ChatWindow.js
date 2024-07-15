import React, { useEffect, useState } from 'react';
import styles from './ChatWindow.module.css';
import {GetMessageList} from '../../Server/GetApi';
import { useSelector } from 'react-redux';
import MsgInp from '../MsgInp/MsgInp';

const ChatWindow = () => {

  const {ChatId, SenderId}=useSelector(state=>state.AppReducer);
  const [Messages, setMessages] = useState([]);
  
  

    useEffect(()=>{

      if(ChatId){
        const fetchMessages = async()=>{
          const messageData = await GetMessageList(ChatId);
          setMessages(messageData);
        };
        fetchMessages();
      }
        
    },[ChatId]);

  return (
    <div className={styles.ChatWindowContainer}>
      {
         Messages.data ? Messages.data.map((obj, ind)=>{
          var msgStyle = obj.sender_id === SenderId? styles.RightStyling: styles.leftStyling;
          return <div className={`${styles.MessageContainer}`}>
              <div className={msgStyle}>
                <p>{obj.message}</p>
              </div>
            </div>
        }):(
          <div></div>
        )
      }
      
      {SenderId && <MsgInp/>}
    </div>
  )
}

export default ChatWindow
