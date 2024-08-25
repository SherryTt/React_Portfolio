import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nabvar } from './components/Navbar';
import { Banner } from './components/Banner'

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Banner />
    </div>
  );
}

export default App;
