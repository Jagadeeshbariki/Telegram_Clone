import React, { useRef, useState } from 'react';
import styles from './MsgInp.module.css';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const MsgInp = () => {
  const FileInputRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleAttachClick=()=>{
    FileInputRef.current.click();
  }

  const fnEmojiSlect=(e)=>{
    console.log(e.native)
  }

  const fnEmojiClick=()=>{
    showEmojiPicker?setShowEmojiPicker(false):setShowEmojiPicker(true)
  }

  return (
    <div className={styles.MsgInpContainer}>
      <div className={styles.InputContainer}>
        <img src='https://cdn-icons-png.flaticon.com/128/569/569501.png' alt='Emoji' className={styles.Emoji} onClick={fnEmojiClick}/>
        {
          showEmojiPicker &&(
            <div className={styles.EmojiPicker}>
              <Picker data={data}  onEmojiSelect={fnEmojiSlect} />
            </div>
          )
        }
        <input type='tet' placeholder='Type Message' />
        <div className={styles.AttachPin}>
          <input type='file' ref={FileInputRef} style={{display:'none'}}/>
          <img src='https://cdn-icons-png.flaticon.com/128/4673/4673184.png' alt='Attach' onClick={handleAttachClick} />
        </div>
        <button>Send</button>
      </div>
    </div>
  )
}

export default MsgInp
