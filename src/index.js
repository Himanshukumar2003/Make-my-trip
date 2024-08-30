// 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForexPageSection from './ForexPage';
import Header from './Header/Header';
import MainSection from './MainSection/Main';
import { BookingNavbar } from './Header/Navbar';
import HoliDAy from './layout/Holiday';
import Bus from './layout/bus';
import Cabs from './layout/Cabs';
import Train from './layout/Trin';
import Homestays from './layout/HomeStayle';
import Footer from './FotterSection/Fotter';
import Form from './Header/LoginFrom';

const Root = () => (
  <Router>
    * <BookingNavbar/>  
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/MainSection" element={<MainSection />} />
      <Route path="/ForexCardSection" element={<ForexPageSection />}/>
      <Route path="/Cabs" element={<Cabs/>}/>
      <Route path="/Bus" element={<Bus/>}/>
      <Route path="/Train" element={<Train/>}/>
      <Route path="/HolidayPakeges" element={<HoliDAy/>}/>
      <Route path="/Homestays" element={<Homestays/>}/>
      <Route path="/TravelInsurance" element={<Form/>}/>

    </Routes>
   <Footer/>  
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
reportWebVitals();
