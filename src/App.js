import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nabvar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
