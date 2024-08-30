
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbTrain } from "react-icons/tb";
import { FaBus } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiCurrencyLine } from "react-icons/ri";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import './Heder.css'


import React from 'react';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import Form, { Language } from './LoginFrom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Booking from "./Booking";
import { Link } from "react-router-dom";


function Navbar() {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isCardOpenTwo, setIsCardOpenTwo] = useState(false);


    const toggleCard = () => {
        setIsCardOpenTwo(!isCardOpenTwo);
    };

    const openCArd=()=>{
        setIsCardOpen(!isCardOpenTwo)
    }

    const CloseBtn =()=>{
        setIsCardOpen(false)
    }
    return (
        <>
            <Container maxWidth="xl">
                <div className="nav cursor-pointer" >
                    <div className='Logo'>
                        <img src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png' alt="logo"  className='logo'/>
                    </div>
                    <div className='NavTabs'>
                        <ul className='NavTabs-Link'>
                            <li>
                                <span className='nav-icon'></span>
                                <div className='Nav-List'>
                                    <p className='list-Heading'>List Your Property</p>
                                    <p className='List-sub-Deetiels'>Start earning today!</p>
                                </div>
                            </li>
                          
                            <li>
                                <span className='nav-icon'></span>
                                <div className='Nav-List'>
                                    <p className='list-Heading'>Introducing MyBiz</p>
                                    <p className='List-sub-Deetiels'>Business Travel Solution</p>
                                </div>
                            </li>
                         
                            <li>
                                <span className='nav-icon'></span>
                                <div className='Nav-List'>
                                    <p className='list-Heading'>My Trips</p>
                                    <p className='List-sub-Deetiels'>Manage your bookings</p>
                                </div>
                            </li>
                     
                            <li style={{border:"none"}}>
                            <div id="Login-btn" style={{display:"flex", fontSize:"8px", alignItems:"center", justifyContent:"center", color:"white" }} onClick={openCArd}>
                                <img src='https://play-lh.googleusercontent.com/1llAcleLs0UDr5ysUl_C4aHM-vN70HGTy7gjlM78SLsPCOijj7oosBLQc26G2daqOg=w240-h480-rw' style={{width:"20px"}}/>
                                <div className='Nav-List'>
                                    <p className='list-Heading'>Login or Create Account</p>
                                </div>
                                <ArrowDropDownIcon/>
                                </div>
                                {isCardOpen ? (<Form CloseBtn={CloseBtn}/>):(null)}
                            </li>

                            <li id='Language'>
                            <div style={{display:"flex", fontSize:"8px", alignItems:"center",gap:"5px"}}>
                            <div>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAflBMVEXxWyUAaTT////xVhoAZCz2kXFfmnrz8/fY2OTS0uDk5OwnJ2729vnq6vHw8PX6+vy9vc8jI21sbJcAAGEMDGSoqMKBgadgYJBbW4txcZuHh6kxMXIYGGjGxtcsLG8SEmU7O3odHWmZmba3t854eJ9RUYVISH+RkbFBQXyvr8UfgS9oAAABwUlEQVRoge2W2W6cMBRAyU1bvOCFfTBhMyae+f8f7G0aKW3VaibCVl98hIwf0BHy9V2yLJFIJBKJRCKR+B88RyT7GpEMPoGSUn3m+4fl+a3iNcKrWx5YLrtmqbeyqsqtXhYjQsr3ueErLUhRUEVX3ox7OLltNi8kEBACFyn81thQcluvThH8fyAEFyDKXetH7A/I94ZTAEahVYSoFihDP290CLmYFweTAguaIho3agK3zPejel/uGg9QWCU64bX2+FIWL6Nv3Hk541dBGORDbkhvbU8MboERtnJ2Wm6Xi4SpZbKfjsGY4aC9EO0E8rLY0/KjpAUmkff6MJ3B59DWSzwoWh5n5XJ8FWxvqdQX48ww4HLZJb3dmHgd5Uk54SXe8HzqKtf5a1leO4PbCSNKNk5OyulLh9Gjk24HN/B55m4YWj1RjLF7oaHlQ0B51GOJGtCoV/E9iWycJGJ8ZVgHc/eR/i5Y+kctXCDGv5fcMUTJjdosfm1zjIVuc28N2vzeoO/flIflsI8/RgtFf44WZdDRApPILG9DUb+FH4og6jj3jrxXTf6Qf4tI9iUi2VNEkjzJkzzJkzzJkzzJkzzJ/8V3qoFT2IY72o0AAAAASUVORK5CYII='
                                    style={{width:"20px"}}/>
                                </div>
                                <div style={{fontSize:"12px", color:"white"}} onClick={toggleCard}>
                                    <span>IN</span>
                                    <span> | ENG</span>
                                    <span> | INR</span>
                                </div>
                                <ArrowDropDownIcon/>

                            </div>
                             {isCardOpenTwo ? (<Language/>):(null)} 
                            </li>
                            
                            </ul>

                    </div>
                </div>
            </Container>
        </>
    );
}

export default Navbar;




export function BookingNavbar() {
    const [seatActive, setSeatActive] = useState(null);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setShowNavbar(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const item = [
        { icons: <GiCommercialAirplane />, name: "Flight", link:"/" },
        { icons: <FaHotel />, name: "Hotels" ,link:""},
        { icons: <MdMapsHomeWork />, name: "Homestays & Villas",link:"Homestays" },
        { icons: <FaUmbrellaBeach />, name: "Holiday Packages",link:"/Holiday" },
        { icons: <TbTrain/>, name: "Trains",link:"Train" },
        { icons: <FaBus />, name: "Buses",link:"Bus" },
        { icons: <LiaCarSideSolid />, name: "Cabs", link:"/Cabs" },
        { icons: <RiCurrencyLine />, name: "Forex Card & Currency", link: "/ForexCardSection" },
        { icons: <AddToPhotosIcon />, name: "Travel Insurance" }
    ];
  

    return (
        <div className={`MainNav ${showNavbar ? "show" : "hide"}`} style={{backgroundColor:"white", zIndex:"9999"}} >
        <Container maxWidth="xl">
        <div className="flex items-center justify-between">
        <div className="flex" style={{justifyContent:"space-evenly", alignItems:"center", gap:"20px"}}>
        <img src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png' alt="logo"  style={{width:"100%",height:"50px"}}/>
        {item.map((item, index) => (
                        <div  key={index}>
                        <Link to={item.link} className="truncate"  style={{width:"60px", display:"flex", flexDirection: "column",gap:"10px", alignItems: "center", objectFit: "contain", justifyContent: "space-between" }}>
                                <p style={{ color:"##808080",fontSize: "20px", marginBottom: "4px", textAlign: "center" }}>{item.icons}</p>
                                <p className="truncate" style={{fontSize:"12px" ,width: "50px", 
  overflow: "hidden",
  textOverflow: "ellipsis",textAlign:"center", fontWeight:"400"}} >{item.name}</p>
                         </Link>
                        </div>  
                         ))}
                 </div>
        <div className="flex items-center justify-between gap-5">
            <div>
                <img src=""/>
                <p>Login And</p>
                <p>Create Account</p>

            </div>
            <div className="flex flex-col">
                <span>Contry</span>
                <select>
                    <option>India</option>
                    <option>UEA</option>
                    <option>USE</option>
                </select>
            </div>
           
            <div className="flex flex-col">
                <span>Language</span>
                <select>
                    <option>हिंदी</option>
                    <option>English</option>
                    <option>தமிழ்</option>
                </select>
            </div>
        </div>
        </div>
                 </Container>

        </div>
    );
}
