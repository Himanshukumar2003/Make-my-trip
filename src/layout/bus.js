import React, { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import dayjs from 'dayjs';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { FaPlane } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';

function Bus() {
  const Railway = [
    { stationName: "New Delhi Railway Station", stationCode: "NDLS" },
    { stationName: "Kolkata Howrah Junction", stationCode: "HWH" },
    { stationName: "Mumbai Kalyan Junction", stationCode: "KYN" },
    { stationName: "Chennai Central Railway Station", stationCode: "MAS" },
    { stationName: "Hyderabad Secunderabad Junction", stationCode: "SC" },
    { stationName: "Bangalore City Junction", stationCode: "SBC" },
    { stationName: "Pune Junction", stationCode: "PUNE" },
    { stationName: "Ahmedabad Junction", stationCode: "ADI" },
    { stationName: "Patna Junction", stationCode: "PNBE" },
    { stationName: "Jaipur Railway Junction", stationCode: "JP" }
  ];

  const AllClass = [
    "Sleeper Class",
    "Third AC",
    "Second AC",
    "First AC",
    "Second Seating",
    "Vistadome AC",
    "AC Chair Car",
    "First Class",
    "Third AC Economy"
  ];

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [selectedFromRailway, setSelectedFromRailway] = useState(null);
  const [selectedToRailway, setSelectedToRailway] = useState(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const [searchQueryFrom, setSearchQueryFrom] = useState('');
  const [searchQueryTo, setSearchQueryTo] = useState('');
  const [filteredRailwayFrom, setFilteredRailwayFrom] = useState(Railway);
  const [filteredRailwayTo, setFilteredRailwayTo] = useState(Railway);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState([null, null]);
  const [open, setOpen] = useState(false);
  const [SeleactclassName, setSelectedclassName] = useState("First AC");

  const handleSearchChangeFrom = (event) => {
    setSearchQueryFrom(event.target.value);
  };

  const handleSearchChangeTo = (event) => {
    setSearchQueryTo(event.target.value);
  };

  const swapStations = () => {
    const temp = selectedFromRailway;
    setSelectedFromRailway(selectedToRailway);
    setSelectedToRailway(temp);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (card1Ref.current && !card1Ref.current.contains(event.target)) {
        setOpenFrom(false);
      }
      if (card2Ref.current && !card2Ref.current.contains(event.target)) {
        setOpenTo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <Container>
          <div className="w-full z-200 bg-white relative " style={{padding:"60px", marginTop:"120px", marginBottom:"40px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <div className='flex' style={{alignItems:"center", justifyContent:"center"}}>
              {openFrom && (
                <ul
                  ref={card1Ref}
                  className="w-96 h-64 overflow-y-scroll absolute top-20 left-0 right-0 mx-auto bg-white border border-gray-300 rounded-md shadow-lg z-10"
                  style={{ padding: "15px" }}
                >
                  <input
                    type="text"
                    value={searchQueryFrom}
                    onChange={handleSearchChangeFrom}
                    placeholder="Search by city..."
                    className="w-full mb-4 border border-gray-300 rounded-md p-2"
                  />
                  {filteredRailwayFrom.map((station, index) => (
                    <li className="hover:bg-slate-100 cursor-pointer p-2" key={index}>
                      <div className="flex items-center gap-2">
                        <FaPlane />
                        <div
                          className="flex justify-between hover:bg-[#eaf5ff] rounded-tl-[8px]"
                          style={{ fontSize: "15px" }}
                          onClick={() => {
                            setSelectedFromRailway(station);
                            setOpenFrom(false);
                          }}
                        >
                          <p>{station.stationName}</p>
                          <p>{station.stationCode}</p>
                        </div>
                      </div>
                      <p className="text-gray-600" style={{ fontSize: "14px" }}>{station.stationName}</p>
                    </li>
                  ))}
                </ul>
              )}
              <div className='Swich' style={{ position: "absolute", position:"absolute", top:"45%",left:"44%", zIndex: "999", bottom: "30px" }}>
              <IconButton onClick={swapStations}>
                <SwapHorizIcon style={{ fontSize: "35px" }} />
              </IconButton>
            </div>
              {openTo && (
                <ul
                  ref={card2Ref}
                  className="w-96 h-64 overflow-y-scroll absolute top-20 left-0 right-0 mx-auto bg-white border border-gray-300 rounded-md shadow-lg z-10"
                  style={{ padding: "15px" }}
                >
                  <input
                    type="text"
                    value={searchQueryTo}
                    onChange={handleSearchChangeTo}
                    placeholder="Search by city..."
                    className="w-full mb-4 border border-gray-300 rounded-md p-2"
                  />
                  {filteredRailwayTo.map((station, index) => (
                    <li className="hover:bg-slate-100 cursor-pointer p-2" key={index}>
                      <div className="flex items-center ">
                        <FaPlane />
                        <div
                          className="flex justify-between hover:bg-[#eaf5ff] rounded-tl-[8px]"
                          style={{ fontSize: "15px" }}
                          onClick={() => {
                            setSelectedToRailway(station);
                            setOpenTo(false);
                          }}
                        >
                          <p>{station.stationName}</p>
                          <p>{station.stationCode}</p>
                        </div>
                      </div>
                      <p className="text-gray-600" style={{ fontSize: "14px" }}>{station.stationName}</p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex">
                <div
                  className="flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]"
                  style={{ width: "300px", height: "112px" }}
                  onClick={() => setOpenFrom(true)}
                >
                  <p className="text-sm">From</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-2xl">{selectedFromRailway ? selectedFromRailway.stationCode : 'Select city'}</p>
                    <p className="text-gray-500">{selectedFromRailway ? selectedFromRailway.stationName : ''}</p>
                  </div>
                </div>
                <div
                  className="flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]"
                  style={{ width: "300px", height: "112px" }}
                  onClick={() => setOpenTo(true)}
                >
                  <p className="text-sm">To</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-2xl">{selectedToRailway ? selectedToRailway.stationCode : 'Select city'}</p>
                    <p className="text-gray-500">{selectedToRailway ? selectedToRailway.stationName : ''}</p>
                  </div>
                </div>
               
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DatePicker
                    className='hover:bg-[#eaf5ff] rounded-tl-[8px]'
                    label="From"
                    value={fromDate}
                    defaultValue={dayjs()}
                    onChange={(newFromDate) => {
                      setFromDate(newFromDate);
                      if (newFromDate && toDate && newFromDate > toDate) {
                        setToDate(null);
                      }
                    }}
                    renderInput={(params) => <TextField {...params} className='w-full' />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <div className='border border-gray-300 p-2 rounded-lg' style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "110px" }} onClick={() => { setOpen(!open) }}>
                  <p>Class</p>
                  <p className="text-2xl text-center">{SeleactclassName}</p>
                </div>
                {open ? (
                  <div style={{ position: "absolute", top: "60px", backgroundColor: "white", overflow: "scroll", padding: "10px" }}>
                    {AllClass.map((className, index) => (
                      <div key={index} onClick={() => { setSelectedclassName(className); setOpen(false); }}>
                        <p className='text-gray-500'>{className}</p>
                      </div>
                    ))}
                  </div>
                ) : (null)}
              </div>
            </div>
            <div className='' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button className="Serch-Btn" role="button">Search</button>
            </div>
          </div>
        </Container>
        <BuseOfferCard />
      </div>
    </>
  );
}

export default Bus;



const offers = [
  {
    "title": "AYODHYA SPECIAL",
    "description": "Enjoy EPIC Offers on booking buses, cabs & trains with us",
    "cta": "BOOK NOW"
  },
  {
    "title": "#DealsOnWheels: Save Up to 8%* on Bus Bookings",
    "description": "and get set for a fun-filled road trip!",
    "cta": "VIEW DETAILS"
  },
  {
    "title": "FOR YOU: Up to 12% OFF* on domestic flights and buses for your next trip in India!",
    "code": "MMTICICINB",
    "cta": "VIEW DETAILS"
  },
  {
    "title": "Grab up to 20% OFF*",
    "description": "on flights, hotels, homestays & bus.",
    "cta": "VIEW DETAILS"
  },
  {
    "title": "GET SET FOR YOUR NEXT ROAD TRIP WITH",
    "description": "FLAT 10% OFF* on Buses from Delhi, Uttar Pradesh, Rajasthan & more",
    "code": "MMTNORTH",
    "cta": "BOOK NOW"
  },
  {
    "title": "GET SET FOR EPIC ROAD TRIPS",
    "description": "Grab FLAT 10% OFF* on Buses from Andhra Pradesh & Karnataka",
    "code": "MMTSOUTH",
    "cta": "BOOK NOW"
  },
  {
    "title": "FLAT ₹500 OFF*",
    "description": "on flights, hotels, buses & cabs for your trips in India!",
    "cta": "VIEW DETAILS",
    "expires": "30 Jun 24"
  },
  {
    "title": "For Your Travels: Get FLAT 10% OFF* + Up to ₹1000",
    "description": "on domestic flights + hotels, buses & outstation cabs",
    "cta": "VIEW DETAILS"
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function BuseOfferCard() {
  return (
    <Container maxWidth="xl" className="MainContainer">
      <div style={{
        overflow:"hidden",
        borderRadius: "6px",
        boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor: "#ffffff",
        padding: "20px",
        cursor: "pointer",
        zIndex: "1",
        marginBottom:"40px"
      }}>
        <div className="card-header" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px solid black",
          marginBottom: "10px",
          padding: "5px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            color: "#4a4a4a",
            fontSize: "14px"
          }}>
            <h1 style={{ fontSize: "32px", fontWeight: "900" }}>Offers</h1>
            <p>All Offers</p>
            <p>Flights</p>
            <p>Hotels</p>
            <p>Holidays</p>
            <p>Trains</p>
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px"
          }}>
            <p className="text-lg font-bold" style={{ color: "#0284c7" }}>VIEW ALL</p>
            <EastIcon className="font-bold" style={{ color: "#0284c7" }} />
          </div>
        </div>
        <Carousel responsive={responsive}>
          {offers.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "6px",
                boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ffffff",
                margin: "5px 10px 5px 2px",
                padding: "20px",
                cursor: "pointer",
                width: "450px",
                height: "220px"
              }}
            >
              <div className="mainCard" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                <div className="snd-Item">
                  <h3 style={{ marginBottom: "5px", fontSize: "12px", fontWeight: "500" }}>{item.title}</h3>
                  <p style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "900" }}>{item.description}</p>
                  <span
                    style={{
                      width: "33px",
                      height: "1px",
                      background: "#eb2026",
                      display: "flex"
                    }}
                  ></span>
                  <p style={{ padding: "10px 0", color: "#4a4a4a" }}>{item.cta}</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "10px", right: "30px" }}>
                <button style={{ color: "#2596be", fontSize: "18px", fontWeight: "900" }}>{item.cta}</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export { BuseOfferCard };
