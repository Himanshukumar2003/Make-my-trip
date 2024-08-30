import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { FaPlane } from "react-icons/fa";
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import SeatBooking from './SeatBooking';

import { useRef, useEffect} from 'react';


import { Select, MenuItem, Button, IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function FlightBook() {

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


// text Swich 

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

  // swich 





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
    <Container maxWidth="xl">
      <div className="w-full z-200 bg-white relative" style={{padding:"60px", marginTop:"30px", marginBottom:"30px"}}>
        <div className="flex justify-start gap-3 mb-2">
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
        <div className='' style={{position:"relative" }}>
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
                  <p className='text-gray-600' style={{ fontSize: "10px" }}>{airport.name}</p>
                </li>
              ))}
            </ul>
          ) : (null)}
          <div className='flex'>
            <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ width: "300px", height: "112px" }} onClick={() => setOpen(true)}>
              <p className='text-sm'>From</p>
              <div className='flex flex-col justify-center'>
                <p className='text-xl'>{selectedFromAirport ? selectedFromAirport.city : 'Select city'}</p>
                <p className='text-gray-500  text-sm'>{selectedFromAirport ? selectedFromAirport.name : ''}</p>
              </div>
            </div>
                  <div className='Swich' style={{position:"absolute", left:"245px", bottom:"30px" }}>
                  <IconButton onClick={handleSwitch}>
        <SwapHorizIcon style={{fontSize:"35px"}}/>
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
                  <p className='text-gray-600' style={{ fontSize: "10px" }}>{airport.name}</p>
                </li>
              ))}
            </ul>
          ) : (null)}
          <div className='flex flex-col border border-gray-300 rounded-md p-4 hover:bg-[#eaf5ff] rounded-tl-[8px]' style={{ width: "300px", height: "112px" }} onClick={() => setOpenTwo(true)}>
            <p className='text-sm'>To</p>
            <div className='flex flex-col justify-center'>
              <p className='text-xl'>{selectedToAirport ? selectedToAirport.city : 'Select city'}</p>
              <p className='text-gray-500 text-sm' >{selectedToAirport ? selectedToAirport.name : ''}</p>
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
                  <SeatBooking/>
          </div>
        </div>
        <div className='' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <button className="Serch-Btn" role="button">Search</button>
      </div> 
        </div>
    </Container>
  );
}

export default FlightBook;



