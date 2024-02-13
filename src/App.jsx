import './App.css';
import BuildingFuture from './components/BuildingFuture';
import EvFeatures from './components/EvFeatures';
import Footer from './components/Footer';
import VideoBackground from './components/VideosBackground';
import WhatweDo from './components/What_we_Do';
import Navbar from './components/navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <VideoBackground />
      <BuildingFuture />
      <EvFeatures />
      <WhatweDo />
      <Footer />
    </main>
  );
}

export default App;
