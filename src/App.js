import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/textForm";

function App() {
  return (
    <>
      <Navbar title="React bitch" aboutText="About" />
      <TextForm  />
    </>
  );
}

export default App;
