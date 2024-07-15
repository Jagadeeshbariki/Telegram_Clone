import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import styles from './App.module.css';
import { useSelector } from 'react-redux';
function App() {
  const isDarkMode = useSelector(state=>state.AppReducer.isDarkMode)


  return (
    <div className={`${styles.App} ${isDarkMode ? styles.darkMode : ''}`}>
      <Header/>
      <div className={styles.MainContainer}>
        <SideBar/>
        <ChatWindow/>
      </div>
    </div>
  );
}

export default App;
