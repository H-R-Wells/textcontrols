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
  // Link,
} from "react-router-dom";




function App() {

  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("'md:hover:bg-gray-700 hover:text-white");
  const [projects, setProjects] = useState("'md:hover:bg-gray-700 hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white md:border-0 border-2 border-white");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");

  // useStates for TextForms
  const [mainBox, setMainBox] = useState("bg-gray-700");
  const [mainBox2, setMainBox2] = useState("bg-gray-600");
  const [textMain, settextMain] = useState('text-white');
  const [textArea, setTextArea] = useState('bg-slate-300 placeholder-slate-600');

  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();

// function to display msg in alert (not nessecery)
  const showAlert=(msg1, type1)=> {
    setAlert({
      msg: msg1,
      type: type1
    })
  }

  


  // function to change mode (dark/light)
  const toggleMode = () => {
    // set dark mode
    if (mode === "bg-gray-300 text-black") {
      setMode('bg-gray-800 text-gray-300')
      setAbout('md:hover:bg-gray-700 hover:text-white')
      setHome('bg-gray-900 text-white md:border-0 border-2 border-white')
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
      setAbout('md:hover:bg-gray-200')
      setHome('bg-white text-black md:border-0 border-2 border-black')
      setMainBox('bg-white')
      setMainBox2('bg-slate-200')
      settextMain('text-black')
      setTextArea('bg-white placeholder-slate-400')
      showAlert("Success ", " Dark mode is disabled")
      setAlertHide('block')
      setTimeout(() => {
        setAlertHide('hidden');
      }, 1500);
    }
  }


  // function to show alert 
  const toggleAlert = () => {
    if (alertHide === "block") {
      setAlertHide('hidden');
    }
    else{
      setAlertHide('block');
    }
  }
  


  // function to hide and unhide mobile navbar
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



  // function to hide and unhide profileMenu 
  const toggleProfile=()=>{
    if (profile==="hidden"){
      setProfile('block opacity-0');
      setTimeout(() => {
        setProfile('opacity-100')
      }, 100);
    }
    else{
      setProfile('opacity-0');
      setTimeout(() => {
        setProfile('hidden')
      }, 500);
    }
  }



  // functions to change nav tab designs
  let notActiveTabLight = "md:hover:bg-gray-200";
  let activeTabLight = "bg-white text-black md:border-0 border-2 border-black";
  let notActiveTabDark = "md:hover:bg-gray-700 hover:text-white";
  let activeTabDark = "bg-gray-900 text-white md:border-0 border-2 border-white";

   // Home
   const homeNav=()=>{
    if (mode==="bg-gray-300 text-black"){
      // Light mode
      setHome(activeTabLight);
      setAbout(notActiveTabLight);
      setProjects(notActiveTabLight);
    }
    else{
      // Dark mode
      setHome(activeTabDark);
      setAbout(notActiveTabDark);
      setProjects(notActiveTabDark);
    }
  }

  // About
  const aboutNav=()=>{
    if (mode==="bg-gray-300 text-black"){
      // Light mode
      setAbout(activeTabLight);
      setHome(notActiveTabLight);
      setProjects(notActiveTabLight);
    }
    else{
      // Dark mode
      setAbout(activeTabDark);
      setHome(notActiveTabDark);
      setProjects(notActiveTabDark);
    }
  }

   // Projects
   const projectNav=()=>{
    if (mode==="bg-gray-300 text-black"){
      // Light mode
      setProjects(activeTabLight);
      setAbout(notActiveTabLight);
      setHome(notActiveTabLight);
    }
    else{
      // Dark mode
      setProjects(activeTabDark);
      setAbout(notActiveTabDark);
      setHome(notActiveTabDark);
    }
  }

 



  return (
    <>
      <BrowserRouter>
      <Navbar projectNav={projectNav} projects={projects} homeNav={homeNav} aboutNav={aboutNav} profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} about={about} home={home}/>
      <Alert alertHide={alertHide} toggleAlert={toggleAlert} alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm mainBox={mainBox} mainBox2={mainBox2} textMain={textMain} textArea={textArea} /> } />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
