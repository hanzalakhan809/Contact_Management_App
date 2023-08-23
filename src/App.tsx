import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MyContacts from './components/MyContacts';
import Charts from './components/Charts'


function App() {
  return (
  <Router>
    <Navbar/>
    <div className='flex'>
    <SideMenu/>
     <Routes>
      <Route path="/" element={<MyContacts/>} />
      <Route path="/ChartsAndMaps" element={<Charts/>} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
