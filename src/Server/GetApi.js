import axios from 'axios';

const API_URL = 'https://devapi.beyondchats.com/api';

export const GetChatList = async(page = 1)=>{
    const res = await axios.get(`${API_URL}/get_all_chats?page=${page}`);
    return res.data
}

export const GetMessageList = async (ChatId)=>{
    const res = await axios.get(`${API_URL}/get_chat_messages?chat_id=${ChatId}`)
    return res.data;
}