// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Hero className="h-full"/>
      <Footer />
    </div>
  );
}

export default App;
