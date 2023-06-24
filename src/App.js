// import logo from './logo.svg';
// import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero className="h-full"/>
      <Footer />
    </div>
  );
}

export default App;
