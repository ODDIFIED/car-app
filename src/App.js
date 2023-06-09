import './App.css';
import Navbar from './components/Banner/Navbar';
import CarSection from './components/CarSection/CarSection';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CarSection/>
    </div>
  );

}

export default App;
