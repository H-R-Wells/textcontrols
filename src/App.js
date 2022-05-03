import { useState } from "react";
import "./App.css";
// import About from "./components/about";
import Navbar from "./components/navbar";
import TextForm from "./components/textForm";

function App() {

  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-300 text-black");
  const [hover, setHover] = useState("hover:bg-gray-200");
  const [activeTab, setActiveTab] = useState("bg-white text-black");

  // useStates for TextForms
  const [mainBox, setMainBox] = useState("bg-white");
  const [mainBox2, setMainBox2] = useState("bg-slate-200");
  const [textMain, settextMain] = useState('text-black');
  const [textArea, setTextArea] = useState('bg-white placeholder-slate-400')



  const toggleMode =()=>{
    // set dark mode
    if (mode === "bg-gray-300 text-black"){
    setMode('bg-gray-800 text-gray-300')
    setHover('hover:bg-gray-700 hover:text-white')
    setActiveTab('bg-gray-900')
    setMainBox('bg-gray-700')
    setMainBox2('bg-gray-600')
    settextMain('text-white')
    setTextArea('bg-slate-300 placeholder-slate-600')
  }
  // set light mode
  else{
    setMode("bg-gray-300 text-black")
    setHover('hover:bg-gray-200')
    setActiveTab('bg-white text-black')
    setMainBox('bg-white')
    setMainBox2('bg-slate-200')
    settextMain('text-black')
    setTextArea('bg-white placeholder-slate-400')
    }
  }
  
  return (
    <>
      <Navbar title="React bitch" aboutText="About" mode={mode} toggleMode={toggleMode} hover={hover} activeTab={activeTab} />
      <TextForm mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea}/>
      {/* <About/> */}
    </>
  );
}

export default App;
