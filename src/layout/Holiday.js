
import React, { useState, useRef, useEffect } from 'react';
import { Container, TextField, Select, MenuItem, Button, IconButton } from '@mui/material';
import { FaPlane } from "react-icons/fa";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import dayjs from 'dayjs';
import Carousel from "react-multi-carousel";
import Grid from '@mui/material/Grid';












function HoliDAy() {
  const airports = [
    { city: "Goa - Dabolim Airport, India", code: "GOI", name: "Goa Dabolim International Airport" },
    { city: "Mumbai, India", code: "BOM", name: "Chhatrapati Shivaji International Airport" },
    { city: "New Delhi, India", code: "DEL", name: "Indira Gandhi International Airport" },
    { city: "Bangkok, Thailand", code: "BKK", name: "Bangkok" },
    { city: "Bengaluru, India", code: "BLR", name: "Bengaluru International Airport" },
    { city: "Pune, India", code: "PNQ", name: "Pune Airport" },
    { city: "Hyderabad, India", code: "HYD", name: "Rajiv Gandhi International Airport" },
    { city: "Kolkata, India", code: "CCU", name: "Netaji Subhash Chandra Bose International Airport" },
    { city: "Chennai, India", code: "MAA", name: "Chennai International Airport" },
    { city: "Dubai, United Arab Emirates", code: "DXB", name: "Dubai International" },
  ];

  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [selectedOption, setSelectedOption] = useState('oneWay');
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAirports = airports.filter((airport) =>
    airport.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSwitch = () => {
    const temp = selectedFromAirport;
    setSelectedFromAirport(selectedToAirport);
    setSelectedToAirport(temp);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (card1Ref.current && !card1Ref.current.contains(event.target)) {
        setOpen(false);
      }
      if (card2Ref.current && !card2Ref.current.contains(event.target)) {
        setOpenTwo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
   <Container maxWidth="xl">
      <div className="w-full z-200 bg-white relative shadow-blue-500 md:shadow-red-500" style={{ padding: "60px", marginTop: "90px", marginBottom: "40px" }}>
        <div className="flex justify-start gap-3">
          <div className="flex">
            <input
              type="radio"
              value="oneWay"
              checked={selectedOption === 'oneWay'}
              onChange={() => handleOptionChange('oneWay')}
            />
            <label>One Way</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              value="multiCity"
              checked={selectedOption === 'multiCity'}
              onChange={() => handleOptionChange('multiCity')}
            />
            <label>Multi City</label>
          </div>
        </div>
        <div className='' style={{ position: "relative" }}>
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
                <li className='hover:bg-slate-100 cursor-pointer p-2' key={index} onClick={() => { setSelectedFromAirport(airport); setOpen(false); }}>
                  <div className='flex items-center gap-2'>
                    <FaPlane />
                    <div className='flex justify-between' style={{ fontSize: "15px" }}>
                      <p>{airport.city}</p>
                      <p>{airport.code}</p>
                    </div>
                  </div>
                  <p className='text-gray-600' style={{ fontSize: "14px" }}>{airport.name}</p>
                </li>
              ))}
            </ul>
          ) : null}
          <div className='flex justify-center'>
            <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff]' style={{ width: "300px", height: "112px" }} onClick={() => setOpen(true)}>
              <p className='text-sm'>From</p>
              <div className='flex flex-col justify-center'>
                <p className='text-2xl'>{selectedFromAirport ? selectedFromAirport.city : 'Select city'}</p>
                <p className='text-gray-500'>{selectedFromAirport ? selectedFromAirport.name : ''}</p>
              </div>
            </div>
            <div className='Swich' style={{ position: "absolute", left: "510px", top:"30px" }}>
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
                  <li className='hover:bg-slate-100 cursor-pointer p-2' key={index} onClick={() => { setSelectedToAirport(airport); setOpenTwo(false); }}>
                    <div className='flex items-center gap-2'>
                      <FaPlane />
                      <div className='flex justify-between' style={{ fontSize: "15px" }}>
                        <p>{airport.city}</p>
                        <p>{airport.code}</p>
                      </div>
                    </div>
                    <p className='text-gray-600' style={{ fontSize: "14px" }}>{airport.name}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff]' style={{ width: "300px", height: "112px" }} onClick={() => setOpenTwo(true)}>
              <p className='text-sm'>To</p>
              <div className='flex flex-col justify-center'>
                <p className='text-2xl'>{selectedToAirport ? selectedToAirport.city : 'Select city'}</p>
                <p className='text-gray-500'>{selectedToAirport ? selectedToAirport.name : ''}</p>
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className='hover:bg-[#eaf5ff]'
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
        </div>
        <div className='' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button className="Serch-Btn" role="button">Search</button>
        </div>
      </div>
   
      </Container>
      <Cards/>
      <ImageCarousel></ImageCarousel>
      <InternationalDestinations/>
      <HolidayCarousel/>
   </>
  );
}

export default HoliDAy;




export function Cards(params) {
  const data = [
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3052/Beautiful%20tropical%20beach%20in%20Thailand.jpg?crop=134:207&downsize=134:207", title: "Goa 4N" },
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=134:207&downsize=134:207", title: "Kerla 4N" },
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=134:207&downsize=134:207", title: "Bali 6N" },
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/Pura-Ulun-Danu-temple.jpg?crop=134:207&downsize=134:207", title: "Dubai 4N" },
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM_The%20Address%20JBR_Night.jpg?crop=134:207&downsize=134:207", title: "Kashnir 5N" },
    { img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3736/Yen-stream-in-Autumn.jpg?crop=134:207&downsize=134:207", title: "Vietnam 6N" },
  ];

  return (
    <>
      <div>
        <Container maxWidth='xl'>
          <div  style={{
        borderRadius: "6px",
        boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
        backgroundColor: "#ffffff",
        margin: "5px 10px 5px 2px",
        padding: "20px",
        cursor: "pointer",
        zIndex: "1",
        overflow:"hidden",
        marginBottom:"40px"
      }}>
            <div style={{ padding: "20px" }}>
              <h1 className='' style={{fontSize:"31px", fontWeight:"700", lineHeight:"38px"}}>Jackpot Deals on Top Selling Packages</h1>
              <p style={{fontSize:"12px", color:"#4a4a4a",fontWeight:'600'}}>Save extra with our exclusive deals!</p>
            </div>
            <Grid container spacing={1}>
              {data.map((item) => (
                <Grid item xs={2}>
                <div style={{width:"200px", position:"relative" , alignSelf: "baseline",
    borderRadius: "6px",
    height: "207px",
    overflow: "hidden",
    width: "134px"}}>
                    <div>
                      <div className="">
                        <img src={item.img} alt={item.title} className='' style={{width:"100%"}} />
                      </div>
                      <div style={{   width:"100%", background: "linear-gradient(180deg, transparent -4.82%, #000 87.02%)",
    borderRadius: "6px",
    bottom: "0",
    left: "0",
    position: "absolute",
    color:"white",
    fontWeight:"900"}}>
                        <p style={{textAlign:"center"}}>{item.title}</p>
                      </div>
                    </div>
                </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}



function ImageCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Data = [
    {
      Src: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/SwissPeak-1200x320-20Mar.jpg"
    },
    {
      Src: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Europe-Holiday-1200x320-19Mar.jpg"
    },
    {
      Src: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HolidaySale-1200x320-6Jun.jpg"
    }
  ];

  return (
    <Container maxWidth="xl" >
    <div style={{overflow:"hidden", marginBottom:"40px"}}>
      <Carousel responsive={responsive} arrows={false}   
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}>
        {Data.map((item, index) => (
          <div key={index} className="carousel-item"  style={{display:'flex' ,margin:"auto", width:"100%",overflow:"hidden"}}>
            <img
              className="d-block w-full"
              src={item.Src}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Carousel>
      </div>
    </Container>
  );
}

export { ImageCarousel };


const InternationalDestinations = () => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const destinations = [
    { name: "Europe", price: "₹95,200", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3198/shutterstock_176887880.jpg?crop=156:227&downsize=156:227" },
    { name: "Thailand", price: "₹52,100", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/I.jpg?crop=156:227&downsize=156:227" },
    { name: "Malaysia", price: "₹84,000", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1971/PetronasTwinTowersAndKLCCPark.jpg?crop=156:227&downsize=156:227" },
    { name: "Bali", price: "₹94,400", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4916/kuta.jpg?crop=156:227&downsize=156:227" },
    { name: "Dubai", price: "₹60,600", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/majestic-mauritus-and-dubai.jpg?crop=156:227&downsize=156:227" },
    { name: "Singapore", price: "₹68,900", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227" },
    { name: "Maldives", price: "₹70,500", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227" },
    { name: "Australia", price: "₹65,050", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Grand%20Park.JPG?crop=156:227&downsize=156:227"},
    { name: "Turkey", price: "₹45,400", image: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Grand%20Park.JPG?crop=156:227&downsize=156:227"},

  ];
  
  return (
    <Container maxWidth="xl">
    <div className="carousel-container" style={{overflow:"hidden", marginBottom:"40px"}}>
      <h2 className='card-item-title'>International Destinations!</h2>
      <Carousel responsive={responsive} >
        {destinations.map((destination, index) => (
          <div className="Internationalcard" key={index}>
            <img className="cards-img" src={destination.image} alt={destination.name} />
           <div className='card-item'>
            <h3 className='card-item-subtitle'>{destination.name}</h3>
            {destination.price && <p className='rupee'>Starting at {destination.price} Per person</p>}
          </div>
          </div>
        ))}
      </Carousel>
    </div>
    </Container>
  );
};

export {InternationalDestinations}








const HolidayCarousel = () => {
  const carouselItems = [
    {
      imgSrc: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2004/anantara-2.PNG?crop=188:139&downsize=188:139',
      title: 'Premium',
      description: 'Beach, Cultural, Island, Hill',
    },
    {
      imgSrc: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Honeymoon_category.jpg?crop=188:139&downsize=188:139',
      title: 'Honeymoon',
      description: 'Beaches, Hill Vacays, Adventure, City Escapes',
    },
    {
      imgSrc: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Honeymoon_category.jpg?crop=188:139&downsize=188:139',
      title: 'Wild Escapes',
      description: 'Ranthambhore, Corbett, Bandhavgarh, Kanha',
    },
    {
      imgSrc: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1381/Varanasi.jpg?crop=188:139&downsize=188:139',
      title: 'Pilgrimage',
      description: 'Ayodhya, Gujarat, Varanasi',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container maxWidth="xl">
      <div className="carousel-container" id='carousel-container'>
      <div className='carousel-container-main-Section'>

        <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={6}>
            <div style={{display:"flex" ,alignItems: "center"}}>
              <img src='https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/CategorySectionv2.png' alt="Explore Holidays" style={{height:"300px"}} />
            <div>
            <p>Pick from our specially curated packages</p>
            <h4 >Explore Holidays</h4>
            </div>
            </div>
           
          </Grid>
          <Grid item xs={6} md={6}>
            <Carousel responsive={responsive}>
              {carouselItems.map((item, index) => (
                <div key={index} className="slide" style={{overflow:"hidden",backgroundColor: "unset", borderRadius: "6px", width: "188px"}}>
                 <div style={{    alignSelf: "baseline",
    borderTopLeftRadius: "6px",
    height: "139px",
    position: "relative",
    }}> 
     <img src={item.imgSrc} alt={item.title} />

    </div>
                <div className='main-text-crouser'>
                  <h3>{item.title}</h3>
                  <div style={{display:"flex", 
                  flexWrap:"wrap",
    justifyContent: "center",
    maxHeight: "50px",
    marginTop:"20px",
    overflow: "hidden"}}>
                  {item.description.split(', ').map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                  </div>
                  <span>View More</span>
                  </div>
                </div>
              ))}
            </Carousel>
            </Grid>
         
           
            </Grid>
            </div>
     
      </div>
    </Container>
  );
};

export { HolidayCarousel }