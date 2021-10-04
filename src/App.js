import './App.css';
import React, {useState} from "react"
import "./Components/StartButton/style.css"
import Logo from "./Components/Logo"
import NavBar from "./Components/NavBar"
import Title from "./Components/Title"
import CustomText from "./Components/CustomText"
import LittleForm from "./Components/Little"
import MyVideo from "./Components/MyVideo"


function App() {
  const [playVideo, setPlayVideo] = useState(false)
  return (
    <div className="App">
      <div className="Container">
        <div className="Left_Box">
         <Logo link="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SEGA_logo.png/800px-SEGA_logo.png"/>
         <div className="Text_Container">
           <Title titleText="Connect to people, not platforms."/>
           <CustomText myText="Person-meditate health data exchange is the future of Heath IT and precision medicine. YouBase was biult to take us there."/>
         </div>
         <div className="Sign_Up">
           <CustomText myText="Sign up for our beta list to learn more"/>
           <LittleForm formHolder="Enter your email..." textButtom="GET STARTED"/>
         </div>
        </div>
        <div className="Right_Box">
          <NavBar/>
          {playVideo && <MyVideo/>}
        </div>
        <div onClick={()=> setPlayVideo(!playVideo)} className="Start">
            <img onClick={()=> setPlayVideo(!playVideo)} id="Start_Img" alt="Start Button" src="https://www.pinclipart.com/picdir/middle/374-3749972_play-png-free-download-play-button-icon-png.png"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
