import React, { useState, useEffect, useRef } from 'react';
import { Container, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import "./layout.css";
import EastIcon from '@mui/icons-material/East';

import {Grid} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const cities = [
  'Delhi',
  'Mumbai',
  'Bengaluru',
  'Goa',
  'Chennai',
  'Dubai',
  'Jaipur',
  'Hyderabad',
  'Bangkok',
  'Singapore',
  'Pattaya',
  'Phuket'
];

const Homestays = () => {
  const [cityName, setCityName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelection = (city) => {
    setCityName(city);
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <Container maxWidth="xl">
      <div className="w-full z-200 bg-white relative" style={{padding:"60px", marginTop:"120px", marginBottom:"30px"}}>
      <div className='flex bg-white items-center justify-center shadow-blue-500 md:shadow-red-500'>
      <div>
      <div className='hover:bg-[#eaf5ff] rounded-tl-[8px] cw-full border border-gray-300 rounded-md p-4' style={{ fontSize: "15px" }}   >
      <p className='text-sm text-gray-500'>City, Property Name Or Location</p>
        <h2 className='text-2xl' onClick={toggleOpen}>{cityName || 'Select city'}</h2>
        <p>India</p>

        </div>
        {open && (
          <ul className="w-96 h-64 overflow-y-scroll absolute top-20 left-0 right-0 mx-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" style={{ padding: "15px" }}>
            <input
              type="text"
              placeholder="Search for a city"
              value={searchTerm}
              onChange={handleSearchChange}
               className="w-full mb-4 border border-gray-300 rounded-md p-2"

            />
            {filteredCities.map((city) => (
              <li className='hover:bg-slate-100 cursor-pointer p-2' key={city} onClick={() => handleCitySelection(city)}>
                <p>{city}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            label="Check In Date"
            value={checkInDate}
            placeholder="Search by city..."
            onChange={handleCheckInDateChange}
            renderInput={(params) => <TextField {...params} />}
            className='hover:bg-[#eaf5ff] rounded-tl-[8px]'

          />
          <DatePicker
            label="Check Out Date"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            placeholder="Search by city..."
            renderInput={(params) => <TextField {...params} />}
            className='hover:bg-[#eaf5ff] rounded-tl-[8px]'

          />
        </LocalizationProvider>
      </div>
      <ChildrenComponent/>
          <div className='border border-gray-300 p-11 rounded-lg'>
        <select className="w-40 rounded-md">
          <option value="0">0-1500</option>
          <option value="1500">1500-3000</option>
          <option value="3000">3000-4500</option>
          <option value="5000">500+</option>
        </select>
          </div>
    </div>
    <div className='' style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"40px"}}>
          <button className="Serch-Btn" role="button">Search</button>
      </div>      
     </div>
   
    <HomeStaleCads></HomeStaleCads>
    <OffersCarousel/>
    </Container>
  );
};

export default Homestays;



export  function HomeStaleCads(params) {
  const data =[
      {img:"https://promos.makemytrip.com/store/GoaDT.JPG", name:"Goa", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/store/MumbaiDT.JPG", name:"Mumbai", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/store/DelhiDT.JPG", name:"Delhi", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/conoor.jpg", name:"Mukteshwar", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/gokarna.jpg", name:"Gokarna", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/mukhteshwar.jpg", name:"Coonoor", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/kasol.jpg", name:"Kasol", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/malvan.jpg", name:"Malvan", Dettiel:"Homestays - Villas & Apts" },
      {img:"https://promos.makemytrip.com/altaccoimages/aa_collections_img/jibhi.jpg", name:"Jibhi", Dettiel:"Homestays - Villas & Apts" },        
  ]

return(
  <>
  <Container maxWidth="xl" className='MainContended'>
  <div style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",backgroundColor: "#fff", marginBottom:"40px", marginTop:"40px"}}>

  <Grid container spacing={2}>
      {data.map((item, index) =>
          <Grid item xs={4} key={index}>
              <div style={{display:"flex", alignItems:"center",padding:"10px", gap:"5px", marginTop:"10px",cursor: "pointer",
borderRadius: "6px",
padding: "16px 30px",
minHeight: "80px",
boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
backgroundColor: "#fff"}}>
                  <div>
                      <img src={item.img}  style={{borderRadius:"50%", width:"50px",}}/>
                  </div>
                  <div>
                      <h2 style={{fontSize:"21px", fontWeight:"500" }}>{item.name}</h2>
                      <p style={{fontSize:"14px", fontWeight:"400",  }}>{item.Dettiel}</p>
                  </div>
                  </div>
          </Grid>
          
      )}
  </Grid>
  </div>
  <div style={{display:"flex", margin:"auto",  width:"80%",}}>
    <img src="https://platforms.makemytrip.com/contents/06431ea6-b292-479e-bc68-0b885013db3e" style={{ borderRadius:"20px"}}/>
  </div>
</Container>

  </>
)   
}




































const ChildrenComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [childAges, setChildAges] = useState(Array(numberOfChildren).fill(''));

  const cardRef = useRef(null);

  const handleNumberOfAdultsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumberOfAdults(count);
  };

  const handleNumberOfChildrenChange = (e) => {
    const count = parseInt(e.target.value);
    setNumberOfChildren(count);
    setChildAges(Array(count).fill(''));
  };

  const handleChildAgeChange = (e, index) => {
    const newChildAges = [...childAges];
    newChildAges[index] = e.target.value;
    setChildAges(newChildAges);
  };

  const handleOutsideClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="" style={{position:"relative",  }}>
    <div >
      <div
        onClick={() => setIsOpen(!isOpen)}
           className="w-40  rounded-md p-3 border border-gray-300  ">
           <p className='text-2.5xl'>Guests</p>
          <p className='text-2xl'>{numberOfAdults} </p>
            <p  className='text-2xl'>Adult{numberOfChildren}</p>
      </div>
      {isOpen && (
        <div  className="" style={{position:"absolute", width:"400px", top:"80px", padding:"10px", backgroundColor:"white"}}>
        <div className='flex justify-between items-center'>
       <div> 
          <label className="block mt-4">
             Adults:
            <select
              value={numberOfAdults}
              onChange={handleNumberOfAdultsChange}
              className="border rounded-md p-2"
            >
              {[...Array(6).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
          </div>
          </div>

        <div>
        <div className='flex justify-between'>       
          </div>
              <div>
          <label className="block mt-4">
            Number of Children:
            <select
              value={numberOfChildren}
              onChange={handleNumberOfChildrenChange}
              className="border rounded-md p-2"
            >
              {[...Array(6).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
          </div>
        </div>
          {childAges.map((age, index) => (
            <div key={index} className="mt-4">
            <p style={{fontSize:"12px"}}>Please provide right number of children along with their right age for best options and prices.</p>
            <div className='flex justify-between item-center'> <p>Child</p>
              <label>
                Child {index + 1} Age:
                <select
                  value={age}
                  onChange={(e) => handleChildAgeChange(e, index)}
                  className="border rounded-md p-2"
                >
                  <option value="">Select Age</option>
                  {[...Array(18).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};


export {ChildrenComponent}





const OffersCarousel = () => {
  
const offers = [
  {
    title: "Grab Up to 45% OFF* on Domestic & International",
    description: "Hotels and Homestays with our Check-in to a Break Sale!",
    buttonText: "BOOK NOW",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-evolve-back-09022024.jpg?im=Resize=(134,134)", // replace with actual image paths or URLs
  },
  {
    title: "GOOD NEWS FOR YOUR NEXT TRIP:",
    description: "Grab up to 15% OFF* on flights, hotels & homestays!",
    buttonText: "BOOK NOW",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-airtel-08062023.jpg?im=Resize=(134,134)",
  },
  {
    title: "Enjoy FLAT 15% OFF* on Duty-free Shopping with Kin...",
    description: "Also, get up to 40% OFF* at select Indian restaurants.",
    buttonText: "BOOK NOW",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//onecard-116x116-01122023.jpg?im=Resize=(134,134)",
  },
  {
    title: "Grab FLAT 15% OFF* on Domestic & Int’l Hotels",
    description: "Enjoy a memorable stay!",
    buttonText: "VIEW DETAILS",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//pattaya-116x116-30042024.jpg?im=Resize=(134,134)",
    offerEnds: "Offer ends in 11h:36m",
  },
  {
    title: "Direct",
    description: "Enjoy instant benefits with our special offers",
    buttonText: "BOOK NOW",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-red-earth-07052024.jpg?im=Resize=(134,134)",
  },
  {
    title: "‘Buy Now, Pay Later’",
    description: "Now available with select stays!",
    buttonText: "VIEW DETAILS",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-red-earth-07052024.jpg?im=Resize=(134,134)"
  },
  {
    title: "Grab FLAT 15% OFF* on Domestic & Int’l Hotels",
    description: "Enjoy a memorable stay!",
    buttonText: "VIEW DETAILS",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//pattaya-116x116-30042024.jpg?im=Resize=(134,134)",
    offerEnds: "Offer ends in 11h:36m",
  },
  {
    title: "Direct",
    description: "Enjoy instant benefits with our special offers",
    buttonText: "BOOK NOW",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-red-earth-07052024.jpg?im=Resize=(134,134)",
  },
  {
    title: "‘Buy Now, Pay Later’",
    description: "Now available with select stays!",
    buttonText: "VIEW DETAILS",
    imgSrc: "https://promos.makemytrip.com/notification/xhdpi//116X116-red-earth-07052024.jpg?im=Resize=(134,134)"
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
   <>
        <Container maxWidth="xl" className="MainContended">
         <div style={{borderRadius: "6px",
                webkitBoxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ffffff",
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
              <img src={offer.imgSrc} style={{ borderRadius: "5px", width: "160px", maxHeight: "165px" }} />
            </div>
            <div className="snd-Item">
              <h3 style={{ marginBottom: "5px", fontSize: "12px", fontWeight: "500" }}>{offer.title}</h3>
              <p style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "900" }}>{offer.description}</p>
              <span
                style={{
                  width: "33px",
                  height: "1px",
                  background: "#eb2026",
                  display: "flex"
                }}
              ></span>
              <p style={{ padding: "10px 0", color: "#4a4a4a" }}>{offer.description}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", alignItems: "center" }}>
            <p>T&C's Apply</p>
            <button style={{ color: "blue", fontWeight: "900" }}>{offer.buttonText}</button>
          </div>
        </div>
      ))}
      </Carousel>
      </div>
    </Container>
   </>
  );
};

export  {OffersCarousel}
