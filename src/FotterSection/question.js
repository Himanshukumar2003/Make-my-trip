import { Container } from "@mui/material"
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Qns(params) {
    const data= [
        {Heading:"Why MakeMyTrip?", peraGraph:"Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands."},
        {Heading:"Booking Flights with MakeMyTrip", peraGraph:"At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us."},
        {Heading:"Domestic Flights with MakeMyTrip", peraGraph:"MakeMyTrip is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features."}
    ];
    
    return(
        <div style={{ padding:"60px 0",background: "#e7e7e7"}}>
            <Container maxWidth="xl"> 
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <div>
                                <h2 style={{marginBottom:"10px", fontSize:"18px", fontWeight:600 }}>{item.Heading}</h2>
                                <p style={{fontSize:"12px", fontWeight:"500", color:"#4a4a4a"}}>{item.peraGraph}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Qns

export function FooterBootem(params) {
    return(
        <>
            <div style={{backgroundColor:"black", color:"white",padding:"60px 0", }}>
            <Container maxWidth="xl" style={{display:"flex",textAlign:"center", justifyContent:"space-between"}}>
                <div style={{display:"flex", gap:"20px"}}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                </div>
                <div>
                    <p>© 2024 MAKEMYTRIP PVT. LTD.</p>
                    <p>Country India USA UAE</p>
                </div>
                </Container>
            </div>
        </>
    )
    
}