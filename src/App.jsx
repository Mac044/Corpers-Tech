import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Scholarship from "./components/Scholarship";
import Speakers from "./components/Speakers";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Highlights/>
      <Speakers/>
      <div className="bg-gray-300'">
      <Scholarship/>
      <Blog/>
      </div>
      <Footer/>
    </div>
  )
}


export default App;
