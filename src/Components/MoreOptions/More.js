import React from 'react';
import styles from './More.module.css';
import MoreOptions from '../../Assets/MoreOptions.json';
import Toggle from './Toggle';
import { useSelector } from 'react-redux';

const More = () => {
   const DarkMode = useSelector(state=>state.AppReducer.isDarkMode);

  const fnclick =()=>{

  }
  return (
    <div className={`${styles.MoreContainer} ${DarkMode? styles.dark :''}`}>
      {
        MoreOptions.map((obj, ind)=>{
            return <div key={ind} className={styles.option} onClick={fnclick}>
                    <img src={obj.icon} alt={obj.alternate}/>
                    <p>{obj.Name}</p>
                    {
                      obj.Name === "Night Mode"? <Toggle/>:""
                    }
                </div>
        })
      }
    </div>
  )
}

export default More
