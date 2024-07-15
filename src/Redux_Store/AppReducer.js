import { initValue } from "./AppStore";

export const AppReducer =(state= initValue, action)=>{

    switch (action.type){
        
        case 'SET_CHAT_ID':
            return {
                ...state,
                ChatId:action.payload
            }

        case 'SET_SENDER_ID':
            return {
                ...state,
                SenderId:action.payload
            }

        case 'SET_DARK_THEAM':
            return {
                ...state,
                isDarkMode:action.payload
            }
            default:
                return state
    }
}