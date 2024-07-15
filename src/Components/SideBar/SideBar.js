import React, { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import {GetChatList} from '../../Server/GetApi';
import More from '../MoreOptions/More';
import { useDispatch, useSelector } from 'react-redux';

const SideBar = () => {

  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false)
  const [chatId, setChatId] = useState(0)
  const [creator_Id, setCreator_Id]= useState(0)
  const dispatch = useDispatch()
  const DarkMode = useSelector(state=>state.AppReducer.isDarkMode);

  dispatch({type:'SET_CHAT_ID', payload:chatId});
  dispatch({type:'SET_SENDER_ID', payload: creator_Id});

  const fnDecrease=()=>{
    if(page>0){
      setPage(page-1);
    }
    else{
      alert("Minimum Page Reached")
    }
  }

  const fnIncrease=()=>{
    if(page<10){
      setPage(page+1);
    }
    else{
      alert("Maximu page Reached")
    }
  }

  useEffect(()=>{
    const FetchChats = async()=>{
      const chatData = await GetChatList(page);
      setChats(chatData.data.data)
      
    }
    FetchChats()

   
  },[page])

  const showOptionsfn =()=>{
    showOptions ? setShowOptions(false) : setShowOptions(true)
  }

  const fnChatClick=(Chat_id, sender_id)=>{
    setChatId(Chat_id);
    setCreator_Id(sender_id)
   

  }
  
  return (
    <div className={`${styles.sideBarContainer}${DarkMode? styles.dark:''}`}>
      <div className={styles.sidebarHeading}>
        <div className={styles.MoreOptions} onClick={showOptionsfn}>
            <div className={styles.optionItem}></div>
            <div className={styles.optionItem}></div>
            <div className={styles.optionItem}></div>
        </div>
        { showOptions && <More/>}
        <input type='text' placeholder=' Search'/>
      </div>
      <div className={styles.ChatsContainer}>
          {
            chats.map((obj, ind)=>{
              const {name, id} = obj.creator; //Destructuring the Object
              const Chat_Id = obj.id;

              return <div key={ind} className={styles.chatsContainer} id={Chat_Id}  onClick={()=>fnChatClick(Chat_Id, id)}>
                <div className={styles.profileIcon}>
                  <p >{name && name.charAt(0)}</p>
                </div>
                <div>
                  
                  <p>{ name || id}</p>
                </div>
              </div>
            })
          }
      </div>
      <div className={styles.btnsContianer}>
        <p onClick={fnDecrease}>Previous</p>
        <p onClick={fnIncrease}>Next</p>
      </div>
    </div>
  )
}

export default SideBar


