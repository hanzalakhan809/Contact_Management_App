import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import MyContacts from './components/MyContacts';
import Charts from './components/Charts'
import ViewContactDetails from './components/ViewContactDetails';


function App() {
  return (
  <Router>
    <Navbar/>
    <div className='flex'>
    <SideMenu/>
     <Routes>
      <Route path="/" element={<MyContacts/>} />
      <Route path="/ChartsAndMaps" element={<Charts/>} />
      <Route path="/ViewContactDetails" element={<ViewContactDetails/>} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
