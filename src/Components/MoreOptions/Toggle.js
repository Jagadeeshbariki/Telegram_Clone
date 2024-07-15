import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Toggle = () => {
    const dispatch = useDispatch()
    const DarkMode = useSelector(state=> state.AppReducer.isDarkMode)
    const fnClick=()=>{
        DarkMode? dispatch({type:'SET_DARK_THEAM', payload:false}): dispatch({type:'SET_DARK_THEAM', payload:true});

    }
  return (
    
    <div style={{marginLeft:'30px', color:"white"}}>
      <button onClick={fnClick}>Night Mode</button>
    </div>
  )
}

export default Toggle
