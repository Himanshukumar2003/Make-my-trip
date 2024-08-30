import './App.css';
import Header from './Header/Header';
import Footer from './FotterSection/Fotter';
import Main from './MainSection/Main';
import { Language } from './Header/LoginFrom';
import { Outlet } from 'react-router-dom';
import MainSection from './MainSection/Main';
import SeatBooling from './Header/SeatBooking';
import {BookingNavbar} from './Header/Navbar';
import Homestayel from './layout/HomeStayle';
import Train from './layout/Trin';
function App() {
  return (
    <>
    <MainSection></MainSection>
   <Outlet/>   

</>
  );
}

export default App;