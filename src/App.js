import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
// import TextForm from "./components/textForm";

function App() {
  return (
    <>
      <Navbar title="React bitch" aboutText="About" />
      {/* <TextForm/> */}
      <About/>
    </>
  );
}

export default App;
