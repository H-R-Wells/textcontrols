import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import TextForm from "./components/textForm";
import Alert from "./components/alert";



import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";




function App() {

  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-300 text-black");
  const [hover, setHover] = useState("md:hover:bg-gray-200");
  const [activeTab, setActiveTab] = useState("bg-white text-black");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");

  // useStates for TextForms
  const [mainBox, setMainBox] = useState("bg-white");
  const [mainBox2, setMainBox2] = useState("bg-slate-200");
  const [textMain, settextMain] = useState('text-black');
  const [textArea, setTextArea] = useState('bg-white placeholder-slate-400')

  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();


  const showAlert=(msg1, type1)=> {
    setAlert({
      msg: msg1,
      type: type1
    })
  }

  

  const toggleMode = () => {
    // set dark mode
    if (mode === "bg-gray-300 text-black") {
      setMode('bg-gray-800 text-gray-300')
      setHover('md:hover:bg-gray-700 hover:text-white')
      setActiveTab('bg-gray-900 text-white md:border-0 border-2 border-white')
      setMainBox('bg-gray-700')
      setMainBox2('bg-gray-600')
      settextMain('text-white')
      setTextArea('bg-slate-300 placeholder-slate-600')
      showAlert("Success ", " Dark mode is enabled")
      setAlertHide('block')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
    // set light mode
    else {
      setMode("bg-gray-300 text-black")
      setHover('md:hover:bg-gray-200')
      setActiveTab('bg-white text-black md:border-0 border-2 border-black')
      setMainBox('bg-white')
      setMainBox2('bg-slate-200')
      settextMain('text-black')
      setTextArea('bg-white placeholder-slate-400')
      showAlert("Success ", " Light mode is enabled")
      setAlertHide('block')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
  }


  const toggleAlert = () => {
    if (alertHide === "block") {
      setAlertHide('hidden');
    }
    else{
      setAlertHide('block');
    }
  }
  


  const toggleNavMenu = () => {
    if (navBtn === "block") {
      setNavBtn('hidden');
      setNavBtn2('block');
      setNavMenu('hidden');
    }
    else{
      setNavBtn('block');
      setNavBtn2('hidden');
      setNavMenu('block');
    }
  }



  return (
    <>
      {/* <Navbar title="React bitch" aboutText="About" showAlert={showAlert} mode={mode} toggleMode={toggleMode} hover={hover} activeTab={activeTab} />
      <Alert alertHide={alertHide} toggleAlert={toggleAlert} alert={alert} />
      <TextForm mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea} /> */}
      {/* <About/> */}

      <BrowserRouter>
      <Navbar navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} hover={hover} activeTab={activeTab}/>
      <Alert alertHide={alertHide} toggleAlert={toggleAlert} alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea} /> } />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
