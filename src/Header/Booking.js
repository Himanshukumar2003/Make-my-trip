import { Container } from "@mui/material";
import { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbTrain } from "react-icons/tb";
import { FaBus } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiCurrencyLine } from "react-icons/ri";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { BsCalendar2Check } from "react-icons/bs";

import './Heder.css'
import { Link } from "react-router-dom";
function Booking() {
    const [seatActive, setSeatActive] = useState(0);

    const item = [
        { icons: <GiCommercialAirplane />, name: "Flight", link:"/" },
        { icons: <FaHotel />, name: "Hotels" ,link:""},
        { icons: <MdMapsHomeWork />, name: "Homestays & Villas",link:"Homestays" },
        { icons: <FaUmbrellaBeach />, name: "Holiday Packages",link:"/HolidayPakeges" },
        { icons: <TbTrain/>, name: "Trains",link:"Train" },
        { icons: <FaBus />, name: "Buses",link:"Bus" },
        { icons: <LiaCarSideSolid />, name: "Cabs", link:"/Cabs" },
        { icons: <RiCurrencyLine />, name: "Forex Card & Currency", link: "/ForexCardSection" },
        { icons: <BsCalendar2Check/>, name: "Travel Insurance", link:"/TravelInsurance"}
    ];

    const handleCardClick = (index) => {
        setSeatActive(index);
    };

    return (
        <Container maxWidth="lg" className='MainContended'>
            <div className="card" style={{ height: "150px", background: "#fff", borderRadius: "8px", boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.1)", display: "flex", zIndex: "5", alignItems: "center", padding: "20px 30px", position:"absolute", top:"70px",left:"25%",justifyContent:"space-between", width:"50%"}}>
                <div style={{ height: "40px", display: "flex", justifyContent: "space-between", width: "100%", textAlign: "center" }}>
                    {item.map((item, index) => (
                        <div onClick={() => handleCardClick(index)} key={index}>
                        <Link to={item.link} className={`card-icons ${index === seatActive ? 'active' : ''}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", objectFit: "contain", justifyContent: "space-between", textAlign:"center" }}>
                                <p style={{ fontSize: "28px", marginBottom: "4px", textAlign: "center", }}>{item.icons}</p>
                                <p style={{fontSize:"12px",textAlign:"center"}}>{item.name}</p>
                         </Link>
                        </div>
                      
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Booking;
