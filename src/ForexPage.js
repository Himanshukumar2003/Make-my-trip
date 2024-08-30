import { Container } from "@mui/material";
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "./Header/Header";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Qns from "./FotterSection/question";
function ForexPageSection(params) {
    return(
        <>
        {/* <Header></Header> */}
          <ForexPage></ForexPage>
          <Products></Products>
          <Accordion/>
          <ForexCard/>
          <SubForexCard></SubForexCard>
        </>
    )
}
export default ForexPageSection



export const ForexPage = () => {
  return(
    <>
    <Container maxWidth="xl">
        <div className="min-h-80 w-full max-w-100 mx-auto bg-white mb-20 z-99 " style={{ zIndex:"1", padding:"110px 35px 0 35px", marginTop:"60px"}}>
        <p className="px-0" style={{
    fontSize: '24px',
    lineHeight: '32px',marginBottom:"10px"}}>Get Forex Card & Currency At Your DoorstepWe<span className="" style={{color:'green', fontSize:"26px"}}> offer same-day delivery </span> in 125+ Indian cities</p>
        <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
            <div className="border-2 border-solid border-rgb(226, 226, 226)-500  rounded-2xl">
                <div className="Forex Card p-5 flex justify-between gap-2 items-center">
                        <img className="w-30 h-20" src="https://tripmoneycmsimgak.mmtcdn.com/img/Microsoft_Teams_image_7_1b8800d124.png"/>
                    <div>
                        <div className="">
                            <div className="flex justify-between items-center ">
                            <p className="font-medium text-base font:black">Multicurrency Card</p>
                            <p className="" style={{color:"rgb(0, 140, 255)", fontWight:"900", }}>GET YOUR Card</p>
                            </div>
                            <p style={{ fontWight:"900", fontSize:"16px", padding:"10px", textAlign:"justify" }}>
                            Zero forex mark-upAccepted in 150+ countriesUp to 5% more savings over Credit/Debit CardsOffers & cashback
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Grid>
            <Grid item xs={12} md={6}>


            <div className="border-2 border-solid border-rgb(226, 226, 226)-500  rounded-2xl">
                <div className="Forex-Card p-5  flex justify-between gap-2 items-center">
                    <div className="">
                        <img src="https://tripmoneycmsimgak.mmtcdn.com/img/currency_img_small_8bc249fe6d.png" className="w-30 h-20"/>
                    </div>
                    <div>
                     <div className="">
                        <div className="flex justify-between">
                            <p style={{color:"#4a4a4a", fontWight:"900", fontSize:"18px", }}>Multicurrency Card</p>
                            <p style={{color:"rgb(0, 140, 255)", fontWight:"900", fontSize:"18px", }}>BUY CURRENCY</p>
                        </div>
                            <p style={{ fontWight:"900", fontSize:"16px", padding:"10px", textAlign:"justify" }}>
                            40+ currenciesBest ratesGenuine Notes from RBI licensed companies
                            </p>
                    </div>
                    </div>
                </div>
            </div>
            </Grid>
            </Grid>
        </div>
    </Container>
    </>
  )
};





export function Products() {
    const data = [
        {img:"https://tripmoneycmsimgak.mmtcdn.com/img/Mask_group_8a01fa816f.svg"},
        {img:"https://tripmoneycmsimgak.mmtcdn.com/img/Mask_group2_9e45a9dc44.svg"},
        {heading:"Multicurrency Card"},
        {heading:"Foreign Currency Notes"},
        {peraGraph:"Zero forex markup. ",subPeraGraph:" Get actual interbank rates"},
        {peraGraph:"No hidden charges." ,subPeraGraph:" Zero reload, unload & annual fee"},
        {peraGraph:"Save upto 5%",subPeraGraph:"over your Credit/Debit cards"},
        {peraGraph:"40+ currencies available.",subPeraGraph:" Genuine currency notes",},
        {peraGraph:"Best exchange rates. ",subPeraGraph:"Lowest rates in the market",},
        {peraGraph:"100+ RBI-licensed money changers",subPeraGraph:"across 50+ cities",},
        {btn:"Know More"},
        {btn:"Order Now"},
    ]
    return(
        <>          <Container maxWidth="xl">    
            <div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="text-4xl font-semibold">
                        Why Trust Us
                        </h1>
                    </div>
                    <div>
                    <p className="text-4xl font-semibold">12,00,000+</p>
                    <p>Happy Travellers with Forex Transactions</p>
                    </div>
                    <div>
                        <p className="text-4xl font-semibold">Forex Powered by</p>
                        <div className="flex items-center justify-between  gap-2 h-10">
                            <img className="" src="https://tripmoneycmsimgak.mmtcdn.com/img/yesbank_new_593f4a6738.png"/>
                            <img className="w-25" src="https://tripmoneycmsimgak.mmtcdn.com/img/bmf_logo_poweredby_e82acf3f02.png"/>
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl font-semibold mt-10 p-10">Know More about our Products</h1>
            </div>

            <div className="ProductCard  shadow-lg" style={{margin:"50px 0 ", padding:"10px 30px", overflowX:"hidden"}}>
            <Grid container spacing={2}>
            {data.map((item)=> 
                <Grid item xs={12} md={6}> 
                <div className="" key={item} >
            <div className="">
                <img src={item.img}/>
                   <div className="leading-3 font-black">
                   <h1 className="text-lg font-extrabold">{item.heading}</h1>
                    <p  className="text-sm font-black leading-2">{item.peraGraph}<span className=" font-medium">{item.subPeraGraph}</span></p>               
                    <p className='text-lg font-sm text-center text-blue-600 font-medium '>{item.btn}</p>
                   </div>
                </div>
                </div>
                </Grid>
           )}
           </Grid>
           </div> 
           </Container>          
        </>
    )
}







export function ForexCard(params) {
const data = [
    {mainHeading:"Advantages of Forex Card"},
    {mainHeading:"Features of Forex Card"},
    {subMainHeading:"The top advantages of Forex cards from MakeMyTrip, powered by BookMyForex, include the following:"},
    {subMainHeading:"Keep your overseas trips hassle-free and memorable with a range of features of MakeMyTrip Forex cards powered by BookMyForex."},
    {heading: "Free of any charges: ", peraGraph:"The Forex card does not attract any issuance, reloading, or unloading charges commonly associated with international travel cards."},
    {heading: "Covered against fraud, assault and theft ", peraGraph:"The card comes with free insurance cover against theft, fraud, and assault,and keeps your money protected."},
    {heading: "Emergency cash support:", peraGraph:"In case the card is lost or stolen, emergency cash support is available in all major international cities"},
    {heading: "Enhanced savings:", peraGraph:"The Forex card provides savings of 6.5% to 7% on ATM withdrawals. Chip and pin secured: With enhanced chip"},
    {heading: "Chip and pin secured: ", peraGraph:"It takes a simplified and quick online process to apply for the Forex card. and pin security, the card remains protected against theft and counterfeits."},
    {heading: "Easy application process: ", peraGraph:"It takes a simplified and quick online process to apply for the Forex card."},
    {heading: "", peraGraph:"These prepaid Forex travel cards come without any Forex markups or hidden charges. Exchange currency at exact interbank rates, eliminate any surcharge and pay only what you see."},
    {heading: "Fixed exchange rates:", peraGraph:"Zero Forex markups/hidden charges:"},
    {heading: "Minimal ATM fees:", peraGraph:"The charges applicable on ATM withdrawals with these Forex cards are minimal."},
    {heading: "Loads up to 14 currencies:", peraGraph:"You can load as many as 14 currencies on a single Forex card from MakeMyTrip powered by BookMyForex."},
    {heading: "Accepted everywhere:", peraGraph:"These cards have widespread acceptability, with a reach of 30+ million stores, 2+ million ATMs, and 1+ million e-commerce sites."},
    {heading: "Easy card reloads/unloads", peraGraph:" The Forex cards come with easy remote reloading and unloading features, allowing easy currency usage internationally and a balance conversion back to INR on return."},
]
    return(
        <>
      <div>
       <Container maxWidth="xl">
      <Grid container spacing={0.8}>
    {data.map((item, index) => (
        <Grid item xs={12} md={6}>
        <div key={index}>
            <h2 className="text-sm font-extrabold">{item.mainHeading}</h2>
            <p className="text-xs font-medium ">{item.subMainHeading}</p>
            <div>
                <ul className="pl-4">
                    <li className="">
                        <p className="text-xs font-black">{item.heading} <sapn className="text-xs font-semibold">{item.peraGraph}</sapn></p>                       
                    </li>
                </ul>
            </div>
        </div>
        </Grid>
    ))}
   
    </Grid>
    </Container>
</div>
            
</>
    )
}

export function SubForexCard(params) {
    return(
        <>
        <Container maxWidth="xl">

        <div className="border-t-2 border-black mt-9 py-12">
              <Grid container spacing={5}>

             <Grid item xs={12} md={6}>
    <div >
            <h2 className="text-sm font-extrabold mb-3">Documents Required to Apply for a Forex Card</h2>
            <p className="text-xs font-medium mb-3">In India, you need to submit a few documents in order to apply for a Forex Card. While these may depend on the destination, trip duration, etc., in most cases, only the below documents are required -</p>
            <div>
                <ul className="pl-4 text-xs font-semibold leading-1">
                    <li className="">Copy of valid Passport</li>
                    <li className="">Copy of valid Visa</li>
                    <li className="">Copy of PAN Card</li>
                    <li className="">Flight tickets for travel within 60 days from the date of applying.</li>
                </ul>
            </div>
        </div>
        </Grid>


        <Grid item xs={12} md={6}>
        <div>
            <h2 className="text-sm font-extrabold mb-m">How to Buy Forex Card Online on MakeMyTrip</h2>
            <p className="text-xs font-medium mb-3"></p>
            <div>
                <ul className="pl-4">
                    <li className="">
                        <p className="text-xs font-black">Step 1: <sapn className="text-xs font-semibold">Go to Forex Card & Currency and select your city of delivery</sapn></p>                       
                    </li>
                    <li className="">
                        <p className="text-xs font-black">Step 2: <sapn className="text-xs font-semibold"> Provide traveller and trip details</sapn></p>                       
                    </li>
                    <li className="">
                        <p className="text-xs font-black">Step 3: <sapn className="text-xs font-semibold">Choose your preferred currency to load</sapn></p>                       
                    </li>
                    <li className="">
                        <p className="text-xs font-black">Step 4: <sapn className="text-xs font-semibold">Enter the currency amount you need converted and buy Forex</sapn></p>                       
                    </li>
                    <li className="">
                        <p className="text-xs font-black">Step 4: <sapn className="text-xs font-semibold">Enter the delivery address and submit</sapn></p>                       
                    </li>
                </ul>
            </div>
        </div>
</Grid>
        </Grid>
</div>
</Container>
        </>
    )
}




export const Accordion = () => {
  const Qson = [
    {
      Qsn: "What is a Multicurrency Card?",
      Ans:
        "A Multicurrency Card is a prepaid card designed specifically for international travelers. It is fully compliant with RBI regulations and provides peace of mind with 100% acceptance at all merchants in over 150 countries. It also provides digital controls within the app, allowing you to lock/unlock the card instantly and offers several benefits, without the need to link your bank account to the card. Click here to know more."
    },
    {
      Qsn: "Who should use Multicurrency Card?",
      Ans:
        "Multicurrency Card is ideal for anyone who values peace of mind during international trips and wants to avoid all forex markups and hidden charges."
    },
    {
      Qsn: "Why should I not use a Debit/Credit card instead?",
      Ans:
        "Using a Debit/Credit card for international transactions may come with several drawbacks such as high markups (up to 5%), additional service charges, hidden fees, low acceptance at certain places, higher risk of scams, potential misuse in case of loss, negative impact on your CIBIL score, and fluctuating exchange rates. You can avoid all these by opting for Multicurrency Card."
    },
    {
      Qsn: "Does this card give reward points?",
      Ans:
        "No, this card does not offer reward points. However, it is still the most rewarding option due to its lowest forex rates and cashback offers."
    },
    {
      Qsn: "How do I get this card?",
      Ans:
        " You can easily order this card online within 2 minutes. Simply enter your PAN (Permanent Account Number) and delivery address, and the card will be delivered to your doorstep within 48 hours. Click here to order now."
    },
    {
      Qsn: "How can I load money into my card?",
      Ans:
        "You can load money instantly using UPI, NetBanking, and Debit Card. You can top up your card anytime, even during your international trip."
    },
    {
      Qsn:
        "What if I don’t want to use the card later?",
      Ans:
        "If you no longer wish to use the card, you have the option to withdraw the unused money instantly. Additionally, you can choose to temporarily lock the card or close it anytime."
    },
  ];

const [openItem, setOpenItem] = useState(null);
  const [Active, setActive] = useState(true);

  const handleClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqHendelChenge = (id) => {
    setActive(true);
  };

  const faqHendelChengeTwo = (id) => {
    setActive(false);
  };

  return (
    <div className="bg-white p-10">
    <Container maxWidth="xl">
      <div className="w-5/6">
        <div>
          <h1 className="text-4xl font-bold">FAQs</h1>
          <div className="flex gap-12 my-10">
            <p 
              className="p-3 shadow-[rgba(0,0,0,0.24) 0px 3px 8px] rounded-lg"
              onClick={ faqHendelChenge}
            >
              Multicurrency Card
            </p>
            <p 
              className="p-3 shadow-[rgba(0,0,0,0.24) 0px 3px 8px] rounded-lg" 
              onClick={faqHendelChengeTwo}
            >
              Foreign Currency
            </p>
          </div>
        </div>
        {Active ? (
          Qson.map((item, index) => (
            <div className="w-5/6 " onClick={() => handleClick(index)} key={index}>
              <div className="flex justify-between items-center cursor-pointer p-2 hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] font-lg text-xl font-bold">
                <p className="mb-4 p-2">{item.Qsn}</p>
                {openItem === index ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </div>
              {openItem === index && (
                <div>
                  <p className="mb-4 p-2 hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] h-20 text-md">{item.Ans}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          null
        )}
      </div>
    </Container>
  </div>
  );
};