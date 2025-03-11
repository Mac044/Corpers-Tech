import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Highlights/>
      <Speakers/>
    </div>
  )
}


export default App;
