
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { FaPlane } from "react-icons/fa";
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useRef, useEffect} from 'react';
import { Select, MenuItem, Button, IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';




import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EastIcon from '@mui/icons-material/East';
function Cabs() {

  const airports = [
  {
      city: "Goa - Dabolim Airport, India",
      code: "GOI",
      name: "Goa Dabolim International Airport"
    },
    {
      city: "Mumbai, India",
      code: "BOM",
      name: "Chhatrapati Shivaji International Airport"
    },
    {
      city: "New Delhi, India",
      code: "DEL",
      name: "Indira Gandhi International Airport"
    },
    {
      city: "Bangkok, Thailand",
      code: "BKK",
      name: "Bangkok"
    },
    {
      city: "Bengaluru, India",
      code: "BLR",
      name: "Bengaluru International Airport"
    },
    {
      city: "Pune, India",
      code: "PNQ",
      name: "Pune Airport"
    },
    {
      city: "Hyderabad, India",
      code: "HYD",
      name: "Rajiv Gandhi International Airport"
    },
    {
      city: "Kolkata, India",
      code: "CCU",
      name: "Netaji Subhash Chandra Bose International Airport"
    },
    {
      city: "Chennai, India",
      code: "MAA",
      name: "Chennai International Airport"
    },
    {
      city: "Goa - Dabolim Airport, India",
      code: "GOI",
      name: "Goa Dabolim International Airport"
    },
    {
      city: "Dubai, United Arab Emirates",
      code: "DXB",
      name: "Dubai International"
    }
  ];









  const [open,setOpen]= useState(false)
  const [openTwo,setOpenTwo]= useState(false)


  const [selectedOption, setSelectedOption] = useState('oneWay');
  const [selectedOptionText, setSelectedOptionText] = useState('Delhi');
  const [searchQuery, setSearchQuery] = useState('');
 
 
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);


  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

 
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedOptionText(option === 'oneWay' ? 'One Way' : option === 'roundTrip' ? 'Round Trip' : 'Multi City');
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredAirports = airports.filter((airport) =>
    airport.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const handleSwitch = () => {
    const temp = selectedFromAirport;
    setSelectedFromAirport(selectedToAirport);
    setSelectedToAirport(temp);
  };

  const handleChangeFrom = (event) => {
    setFromValue(event.target.value);
  };

  const handleChangeTo = (event) => {
    setToValue(event.target.value);
  };




  useEffect(() => {
    // Function to handle clicks outside the card
    const handleClickOutside = (event) => {
      if (card1Ref.current && !card1Ref.current.contains(event.target)) {
        setOpen(false);
      }
      if (card2Ref.current && !card2Ref.current.contains(event.target)) {
        setOpenTwo(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <>
    <Container maxWidth="xl">
      <div className="w-full z-200 bg-white relative shadow-blue-500 md:shadow-red-500" style={{padding:"60px", marginTop:"90px", marginBottom:"40px"}}>
        <div className="flex justify-start gap-3 pt-5">
          <div className="flex">
            <input
              type="radio"
              className=""
              value="oneWay"
              checked={selectedOption === 'oneWay'}
              onChange={() => setSelectedOption('oneWay')}
            />
            <label>One Way</label>
          </div>
         <div className="flex">
            <input
              type="radio"
              className=""
              value="multiCity"
              checked={selectedOption === 'multiCity'}
              onChange={() => handleOptionChange('multiCity')}
            />
            <label>Multi City</label>
          </div>
        </div>
        <div className='' style={{position:"relative"}}>
          {open ? (
            <ul ref={card1Ref} className="w-96 h-64 overflow-y-scroll absolute top-20 left-0 right-0 mx-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" style={{ padding: "15px" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by city..."
                className="w-full mb-4 border border-gray-300 rounded-md p-2"
              />
              {filteredAirports.map((airport, index) => (
                <li className='hover:bg-slate-100 cursor-pointer p-2' key={index}>
                  <div className='flex items-center gap-2'>
                    <FaPlane />
                    <div className='flex justify-between hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ fontSize: "15px" }} onClick={() => { setSelectedFromAirport(airport); setOpen(false); }}>
                      <p >{airport.city}</p>
                      <p>{airport.code} </p>
                    </div>
                  </div>
                  <p className='text-gray-600' style={{ fontSize: "14px" }}>{airport.name}</p>
                </li>
              ))}
            </ul>
          ) : (null)}
          <div className='flex'>
            <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ width: "300px", height: "112px" }} onClick={() => setOpen(true)}>
              <p className='text-sm'>From</p>
              <div className='flex flex-col justify-center'>
                <p className='text-2xl'>{selectedFromAirport ? selectedFromAirport.city : 'Select city'}</p>
                <p className='text-gray-500'>{selectedFromAirport ? selectedFromAirport.name : ''}</p>
              </div>
            </div>
                  <div className='Swich' style={{position:"absolute", left:"275px", bottom:"30px"}}>
                  <IconButton onClick={handleSwitch}>
        <SwapHorizIcon />
      </IconButton>
                  </div>
            {openTwo ? (
            <ul ref={card2Ref} className="w-96 h-64 overflow-y-scroll absolute top-20 left-0 right-0 mx-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" style={{ padding: "15px" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by city..."
                className="w-full mb-4 border border-gray-300 rounded-md p-2"
              />
              {filteredAirports.map((airport, index) => (
                <li className='hover:bg-slate-100 cursor-pointer p-2' key={index}>
                  <div className='flex items-center gap-2'  onClick={() => { setSelectedToAirport(airport); setOpenTwo(false); }}>
                    <FaPlane />
                    <div className='flex justify-between hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ fontSize: "15px" }} >
                      <p>{airport.city}</p>
                      <p>{airport.code} </p>
                    </div>
                  </div>
                  <p className='text-gray-600' style={{ fontSize: "14px" }}>{airport.name}</p>
                </li>
              ))}
            </ul>
          ) : (null)}
          <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ width: "300px", height: "112px" }} onClick={() => setOpenTwo(true)}>
            <p className='text-sm'>To</p>
            <div className='flex flex-col justify-center'>
              <p className='text-2xl'>{selectedToAirport ? selectedToAirport.city : 'Select city'}</p>
              <p className='text-gray-500'>{selectedToAirport ? selectedToAirport.name : ''}</p>
            </div>
            </div>
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
                renderInput={(params) => <TextField {...params} className='w-full'/>}
              />
              <DatePicker
              className='hover:bg-[#eaf5ff] rounded-tl-[8px]'
                label="To"
                value={toDate}
                defaultValue={dayjs()}
                onChange={(newToDate) => {
                  setToDate(newToDate);
                  if (newToDate && fromDate && newToDate < fromDate) {
                    setFromDate(null);
                  }
                }}
                renderInput={(params) => <TextField {...params} className='w-full'/>}
              />
            </LocalizationProvider>            
          </div>
        </div>
        <div className='' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <button className="Serch-Btn" role="button">Search</button>
      </div>   
        </div>
      </Container>
      <BuseOfferCard/>
      </>
  );
}

export default Cabs;






const offers = [
  {
    title: "AYODHYA SPECIAL",
    description: "Enjoy EPIC Offers on booking buses, cabs & trains with us",
    cta: "BOOK NOW",
    image: "https://promos.makemytrip.com/notification/xhdpi//116X116-CanaraBank-28092022.jpg?im=Resize=(134,134)"
  },
  {
    title: "#DealsOnWheels: Save Up to 8%* on Bus Bookings",
    description: "and get set for a fun-filled road trip!",
    cta: "VIEW DETAILS",
    image: "https://promos.makemytrip.com/notification/xhdpi//icici-116x116-09022023.jpg?im=Resize=(134,134)"
  },
  {
    title: "FOR YOU: Up to 12% OFF* on domestic flights and buses for your next trip in India!",
    code: "MMTICICINB",
    description: "and get set for a fun-filled road trip!",

    cta: "VIEW DETAILS",
    image: "https://promos.makemytrip.com/appfest/xhdpi//Desktop-Ayodhya-28Dec.jpg?im=Resize=(134,134)"
  },
  {
    title: "Grab up to 20% OFF*",
    description: "on flights, hotels, homestays & bus.",
    cta: "VIEW DETAILS",
    image: "https://promos.makemytrip.com/notification/xhdpi//116X116-mobikwik-30052023.jpg?im=Resize=(134,134)"
  },
  {
    title: "GET SET FOR YOUR NEXT ROAD TRIP WITH",
    description: "FLAT 10% OFF* on Buses from Delhi, Uttar Pradesh, Rajasthan & more",
    code: "MMTNORTH",
    cta: "BOOK NOW",
    image: "https://promos.makemytrip.com/notification/xhdpi//116X116-au-bank-04072023.jpg?im=Resize=(134,134)"
  },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BuseOfferCard = () => {
  return (
    <>
    <Container maxWidth="xl" className="MainContended">
    <div style={{borderRadius: "6px",
           webkitBoxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
           boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
           backgroundColor: "#ffffff",
           margin: "5px 10px 5px 2px",
           padding: "20px",
           cursor: "pointer",
           zIndex:"1",
           overflow:"hidden",
           marginBottom:"40px"
 }}>
 <div className='card-header' style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"20px", borderBottom:"1px solid black", marginBottom:"10", padding:"5px"}}>
   <div style={{display:"flex",  justifyContent:"space-between", alignItems:"center", gap:"20px", color:"#4a4a4a", fontWeight:"14px"}}>
   <h1 style={{fontSize:"32px", fontWeight:"900"}}>Offers</h1>
     <p>All Offers</p>
     <p>Flights</p>
     <p>Hotels</p>
     <p>Holidays</p>
     <p>Trains</p>
     <p>Cabs</p>
     <p>Bank Offers</p>
   </div>
   <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"20px"}}>
     <p className='  text-lg text-lg font-bold' style={{color:"#0284c7"}}>VIEW All</p>
     <EastIcon className='font-bold' style={{color:"#0284c7"}}/>
   </div>
   <div>
   </div>
 </div>
   <Carousel responsive={responsive}>
 {offers.map((offer, index) => (
   <div
     key={index}
     className="offer-card"
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
       <div className="cardItem" style={{ width: "160px", maxHeight: "165px", objectFit: "cover" }}>
         <img src={offer.image} style={{ borderRadius: "5px", width: "160px", maxHeight: "165px" }} />
       </div>
       <div className="snd-Item">
         <h3 style={{ marginBottom: "5px", fontSize: "12px", fontWeight: "500" }}>{offer.title}</h3>
         <p style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "900", }}>{offer.description}</p>
         <span
           style={{
             width: "33px",
             height: "1px",
             background: "#eb2026",
             display: "flex"
           }}
         ></span>
<p style={{ padding: "10px 0", color: "#4a4a4a" }}>
  {offer && offer.description? offer.description : ''}
  {offer && offer.code? ` (${offer.code})` : ''}
</p>       </div>
     </div>
     <div style={{position:"absolute", bottom:"20px"}}>
     <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", alignItems:"end"}}>
       <p>T&C's Apply</p>
       <button style={{ color: "blue", fontWeight: "900" }}>{offer.cta}</button>
     </div>
     </div>
   </div>
 ))}
 </Carousel>
 </div>
</Container>
</>
);
};

export {BuseOfferCard}




















// const DigitalClock = () => {
//   return (
//     <div className="digital-clock">
//       <div className="time">
//             <div>
//                     {[...Array(24).map((items,index)=>
//                     <div key={index}>
//                             <p>{items}</p>
//                     </div>
//                     )]}
//             </div>




//       </div>
//     </div>
//   );
// };

// export{DigitalClock}