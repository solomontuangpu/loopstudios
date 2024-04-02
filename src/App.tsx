import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <section className='hero'>
        <Navbar />
        <Hero />
      </section>
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
