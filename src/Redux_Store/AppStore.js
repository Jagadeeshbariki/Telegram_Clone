import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { AppReducer } from './AppReducer';

export const initValue={
    ChatId:0,
    SenderId:0,
    isDarkMode:false
}

export const appStore = configureStore({
    reducer:{
        AppReducer
    },
    middleware:()=>{
        return [logger]
    }
})