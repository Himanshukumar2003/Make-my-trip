
import React from 'react';
import { Container } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EastIcon from '@mui/icons-material/East';
function Cards() {
  const data = [
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//Desktop-Prebuzz-NoKidding-26Mar.jpg?im=Resize=(134,134)",
      heading: "HOLIDAYS",
      subHeading: "FLAT 45% OFF* on Holiday Packages",
      text: "MyMedRefund on your flight bookings, in case of medical emergencies."
    },
    {
      img: "https://promos.makemytrip.com/images//Desktop-Aroundtheworld-230224.jpg?im=Resize=(134,134)",
      heading: "INTL HOTELS",
      subHeading: "GRAB NOW",
      text: "Up to 30% OFF* on International Hotels and make your dream trips come true"
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//idfc-116x116-05012023.jpg?im=Resize=(134,134)",
      heading: "INTL FLIGHTS",
      subHeading: "For Worry-free Travel: Grab Up to 15% OFF*",
      text: "+ 3- & 6-months interest-free EMI on domestic & international flights and stays!"
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//116X116-oyo-16082023.jpg?im=Resize=(134,134)",
      heading: "DOM HOTELS",
      subHeading: "Book Comfortable Stays at OYO Hotels",
      text: "with FLAT 30% OFF*!"
    },
    {
      img: "https://promos.makemytrip.com/notification/xhdpi//DT-Med-Refund.jpg?im=Resize=(134,134)",
      heading: "DOM FLIGHT",
      subHeading: "Get a full refund",
      text: "with MyMedRefund on your flight bookings, in case of medical emergencies."
    }
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
      <Container maxWidth="xl" className='MainContended'>
      <div style={{borderRadius: "6px",
                webkitBoxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ffffff",
                margin: "5px 10px 5px 2px",
                padding: "20px",
                cursor: "pointer",
                zIndex:"1",
                marginBottom:"40px",
                overflow:"hidden"

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
        <div style={{textAlign:"right"}}>
          <p className='  text-lg text-lg font-bold' style={{color:"#0284c7"}}>VIEW All</p>
        </div>
        <div>
        </div>
      </div>
        <Carousel responsive={responsive}>
          {data.map((item,index) => (
            <div
              key={index}
              style={{
                borderRadius: "6px",
                webkitBoxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ffffff",
                margin: "5px 10px 5px 2px",
                padding: "20px",
                cursor: "pointer",
                width: "450px",
                height:"220px",
               
              }}
            >
              <div className="mainCard" style={{ display: "flex", justifyContent: "space-evenly", gap:"20px"}}>
                <div className="cardItem" style={{width:"160px", maxHeight:"165px", objectFit:"cover"}}>
                  <img src={item.img} style={{ borderRadius: "5px", width:"160px", maxHeight:"165px" }}/>
                </div>
                <div className="snd-Item">
                  <h3 style={{ marginBottom: "5px", fontSize: "12px", fontWeight: "500" }}>{item.heading}</h3>
                  <p style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "900" }}>{item.subHeading}</p>
                  <span
                    style={{
                      width: "33px",
                      height: "1px",
                      background: "#eb2026",
                      display: "flex"
                    }}
                  ></span>
                  <p style={{ padding: "10px 0", color: "#4a4a4a" }}>{item.text}</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", alignItems: "center" }}>
                <p>T&C's Apply</p>
                <button style={{color:"blue", fontWeight:"900px"}}>Book Now</button>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
      </Container>
    </>
  );
}

export default Cards;

