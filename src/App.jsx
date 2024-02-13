import './App.css';
import BuildingFuture from './components/BuildingFuture';
import EvFeatures from './components/EvFeatures';
import Footer from './components/Footer';
import VideoBackground from './components/VideosBackground';
import Navbar from './components/navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <VideoBackground />
      <BuildingFuture />
      <EvFeatures />
      <Footer />
    </main>
  );
}

export default App;
