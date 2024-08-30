import React, { useState, useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { FaPlane } from 'react-icons/fa';
import { Container, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EastIcon from '@mui/icons-material/East';

function Train() {
  const Railway = [
    {
      stationName: "New Delhi Railway Station",
      stationCode: "NDLS"
    },
    {
      stationName: "Kolkata Howrah Junction",
      stationCode: "HWH"
    },
    {
      stationName: "Mumbai Kalyan Junction",
      stationCode: "KYN"
    },
    {
      stationName: "Chennai Central Railway Station",
      stationCode: "MAS"
    },
    {
      stationName: "Hyderabad Secunderabad Junction",
      stationCode: "SC"
    },
    {
      stationName: "Bangalore City Junction",
      stationCode: "SBC"
    },
    {
      stationName: "Pune Junction",
      stationCode: "PUNE"
    },
    {
      stationName: "Ahmedabad Junction",
      stationCode: "ADI"
    },
    {
      stationName: "Patna Junction",
      stationCode: "PNBE"
    },
    {
      stationName: "Jaipur Railway Junction",
      stationCode: "JP"
    }
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



  const [trainDetails, setTrainDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSwitch = () => {
    const temp = selectedFromRailway;
    setSelectedFromRailway(selectedToRailway);
    setSelectedToRailway(temp);
  };
  
  const handleChangeFrom = (event) => {
    setSelectedFromRailway(event.target.value);
  };
  
  const handleChangeTo = (event) => {
    setSelectedToRailway(event.target.value);
  };



  const handleSearchChangeFrom = (event) => {
    setSearchQueryFrom(event.target.value);
  };

  const handleSearchChangeTo = (event) => {
    setSearchQueryTo(event.target.value);
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







  useEffect(() => {
    const fetchTrainDetails = async () => {
      const url = 'https://indian-railway-irctc.p.rapidapi.com/services/train/12051?key=012562ae-60a9-4fcd-84d6-f1354ee1ea48';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '8540ffddd2mshef868452578c630p1e66b2jsnbfd51fa28f89',
          'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        const result = await response.json(); // Parse the response as JSON
        setTrainDetails(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchTrainDetails();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!trainDetails) {
    return <div>Loading...</div>;
  }





  return (
    <>
      <div>
      <Container>
        <div className="w-full z-200 bg-white relative shadow-blue-500 md:shadow-red-500" style={{padding:"60px", marginTop:"120px", marginBottom:"40px"}}>
          <div className='flex'>
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
                    <div className="flex items-center ">
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

            <div className='Swich' style={{position:"absolute", top:"45%",left:"29.5%", zIndex:"999"}}>
                  <IconButton onClick={handleSwitch}>
        <SwapHorizIcon />
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
                    <div className="flex items-center gap-2">
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
                style={{ width: "300px", height: "112px"}}
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
  renderInput={(params) => <TextField {...params} className='w-full'/>}
/>
</LocalizationProvider>
          </div>
          <div >
        <div  className='border border-gray-300  rounded-lg p-2' style={{position:"relative", display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center",height:"110px" }} onClick={()=>{setOpen(!open)}}>
        <p> Class</p>
        <p className="text-2xl text-center">{SeleactclassName}</p>
        </div>
{open?(
  <div style={{position:"absolute", top:"90px", backgroundColor:"white", overflow:"scroll", padding:"10px"}}>
{AllClass.map((className, index) => (
<div key={index} onClick={() => { setSelectedclassName(className); setOpen(false); }}>
<p className='text-gray-500'>{className}</p>
</div>
))}  
</div>
):(null)}
</div>
    </div>
    <div className='' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <button className="Serch-Btn" role="button">Search</button>
      </div>   
        </div>
       
        </Container>
        <TrainOfferCard/>
      </div>
    </>
  );
}

export default Train;

function TrainOfferCard() {
  const data = [
    {
      image: 'https://promos.makemytrip.com/appfest/xhdpi//Desktop-VandeBharat-4May.jpg?im=Resize=(134,134)',
      title: 'BOOKINGS ARE OPEN NOW!',
      description: 'Plan Your Next Train Journey for the upcoming long weekends',
      buttonText: 'BOOK NOW',
    },
    {
      image: 'https://promos.makemytrip.com/appfest/xhdpi//Desktop-SummerTrip-3Feb.jpg?im=Resize=(134,134)',
      title: 'Exciting NEWS: Book Tickets for Vande Bharat Expre...',
      description: 'with us hassle-free & get set for a train journey.',
      buttonText: 'BOOK NOW',
    },
    {
      image: 'https://promos.makemytrip.com/appfest/xhdpi//Desktop-Ayodhya-28Dec.jpg?im=Resize=(134,134)',
      title: 'Trip Guarantee on Trains!',
      description: 'Waitlisted tickets no more. Get a confirmed ticket or a free upgrade to flights, cabs & more.',
      buttonText: 'KNOW MORE',
    },
    {
      image: 'https://promos.makemytrip.com/notification/xhdpi//bus-116x116-22022022.jpg?im=Resize=(134,134)',
      title: 'WELCOME THE SUMMER OF 2024 WITH:',
      description: 'Free Cancellation Starting at ₹1* on trains',
      buttonText: 'BOOK NOW',
    },
    {
      image: 'https://promos.makemytrip.com/notification/xhdpi//sbi-116x116-06012021.jpg?im=Resize=(134,134)',
      title: '#DEALS ON WHEELS',
      description: 'Offer starts in 11h 05m',
      buttonText: 'BOOK NOW',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container maxWidth="xl" className='MainContainer'>
      <div style={{
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
        <div className='card-header' style={{
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
            <p className='text-lg font-bold' style={{ color: "#0284c7" }}>VIEW ALL</p>
            <EastIcon className='font-bold' style={{ color: "#0284c7" }} />
          </div>
        </div>
        <Carousel responsive={responsive}>
          {data.map((item, index) => (
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
                <div className="cardItem" style={{ width: "160px", maxHeight: "165px", objectFit: "cover" }}>
                  <img src={item.image} alt={item.title} style={{ borderRadius: "5px", width: "160px", maxHeight: "165px" }} />
                </div>
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
                  <p style={{ padding: "10px 0", color: "#4a4a4a" }}>{item.title}</p>
                </div>
              </div>
             
              <div style={{position:"absolute", bottom:"10px", right:"30px"}}>
                <button style={{ color: "#2596be",fontSize:"18px", fontWeight: "900" }}>{item.buttonText}</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export { TrainOfferCard };
