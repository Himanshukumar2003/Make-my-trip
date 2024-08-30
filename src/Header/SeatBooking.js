import React, { useState } from 'react';

const SeatBooking = () => {
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const [travelClass, setTravelClass] = useState('Economy');
  const [submittedData, setSubmittedData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCloseCard = () => {
    setOpen(false);
  };

  const handlePassengerChange = (category, value) => {
    setPassengers(prevState => ({
      ...prevState,
      [category]: value
    }));
  };

  const handleTravelClassChange = (selectedClass) => {
    setTravelClass(selectedClass);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({
      passengers,
      travelClass
    });
    handleCloseCard();
  };

  const totalSeats = passengers.adults + passengers.children + passengers.infants;

  return (
    <>
      <div className='' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className='hover:bg-[#eaf5ff] rounded-tl-[8px] flex flex-col border border-gray-300 p-4' style={{width: "300px", height: "112px",textAlign:"center"}} onClick={()=>{setOpen(!open)}}>
          <p>{travelClass}</p>
          <p>{totalSeats} Traveller</p>
          <p>Economy/Premium Economy</p>
        </div>
        {open && (
          <div className="flight-booking-container" style={{width:"650px", margin:"auto", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", height:"450px", padding:"20px 40px", position:"absolute", top:"160px", zIndex:"999", backgroundColor:"white", right:"40px"}}>
            {/* Passenger selection section */}
            <div className="passenger-section">
              {/* Adults */}
              <div style={{padding:"20px 0"}}>
                <h1 style={{fontWeight:"700"}}>ADULTS (12+)</h1>
                <span style={{color:"#4a4a4a", fontWeight:"500", font:"xs"}}>on the day of travel</span>
              </div>
              <div className='flex' style={{ boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", width:"400px", gap:"5px"}}>
                {[...Array(9)].map((_, index) => (
                  <button
                    key={`adult-${index}`}
                    className={`seat ${passengers.adults === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePassengerChange('adults', index + 1)}
                    style={{padding:"10px", width:"100%"}}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Children */}
              <div className='flex gap-5'>
                <div>
                  <div style={{margin:"10px 0"}}>
                    <h1 style={{fontWeight:"700"}}>CHILDREN (2Y-12Y)</h1>
                    <span style={{color:"#4a4a4a", fontWeight:"500", fontSize:"12px"}}>on the day of travel</span>
                  </div>

                  <div className='flex' style={{ boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", gap:"5px", width:"250px"}}>
                    {[...Array(6)].map((_, index) => (
                      <button
                        key={`child-${index}`}
                        className={`seat ${passengers.children === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePassengerChange('children', index + 1)}
                        style={{padding:"10px", width:"100%", gap:"5px", width:"100%"}}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Infants */}
                <div>
                  <div style={{margin:"10px 0"}}>
                    <h1 style={{fontWeight:"700"}}>INFANTS (below 2y)</h1>
                    <span style={{color:"#4a4a4a", fontWeight:"500", fontSize:"12px"}}>on the day of travel</span>
                  </div>
                  <div className='flex' style={{ boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", gap:"5px", width:"250px"}}>
                    {[...Array(6)].map((_, index) => (
                      <button
                        key={`infant-${index}`}
                        className={`seat ${passengers.infants === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePassengerChange('infants', index + 1)}
                        style={{padding:"10px"}}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Travel class selection */}
            <div>
              <h1 className='font-md font-wight-md'>CHOOSE TRAVEL CLASS</h1>
              <div className='flex' style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", width:"60%", fontSize:"12px",fontWeight:"500", marginTop:"20px"}}>
                <button style={{padding:"10px", backgroundColor: travelClass === 'Economy' ? '#048cfc' : 'transparent'}} onClick={() => handleTravelClassChange('Economy')}>Economy/Premium Economy</button>
                <button style={{padding:"10px", backgroundColor: travelClass === 'Premium Economy' ? '#048cfc' : 'transparent'}} onClick={() => handleTravelClassChange('Premium Economy')}>Premium Economy</button>
                <button style={{padding:"10px", backgroundColor: travelClass === 'Business' ? '#048cfc' : 'transparent'}} onClick={() => handleTravelClassChange('Business')}>Business</button>
              </div>
            </div>

            {/* Submit button */}
            <div style={{display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
              <button onClick={handleSubmit} style={{borderRadius:"34px", background:"linear-gradient(93deg, #53b2fe, #065af3)", boxShadow:"0 1px 7px 0 rgba(0, 0, 0, 0.2", flexShrink:"0", color:"#fff", textTransform:"uppercase", cursor:"pointer", outline:"0", border:"0", textAlign:"center", padding:"10px"}}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SeatBooking;
