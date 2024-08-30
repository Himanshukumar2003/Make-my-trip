import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
function PROMOTIONS(params) {
       const data = [
            {img:"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png", Heading:"Planning to book an international flight?", Link:"Check Travel Guidelines"},
            {img:"https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png", Heading:"We are now available in हिंदी!", Link:"Change Language"},
            {img:"https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png", Heading:"Complete your web check-in on MakeMyTrip in easy steps. ", Link:"Know More"},
        ]
 return(
    <>
    <Container maxWidth="xl" className='MainContended'>
    <Grid container spacing={2}>
    {data.map((item, index)=>
    <Grid item xs={4} key={index}>
                <div className='promoton' style={{display:"flex", alignItems:"center", justifyContent:"center",padding:"10px", gap:"5px", marginTop:"10px",cursor: "pointer",
borderRadius: "6px",
padding: "16px 30px",
minHeight: "80px",
boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
backgroundColor: "#fff",
}}>
                    <div>
                        <img src={item.img}  style={{width:""}}/>
                    </div>
                    <div>
                        <h2 style={{color:"#4a4a4a", fontSize:"18px", fontWeight:"600"}}>{item.Heading}</h2>
                        <p style={{color:"#008cff", fontWeight:"600"}}>{item.Link}</p>
                    </div>
                </div>
        </Grid>)}
    </Grid>
    </Container>
    </>
 )   
}
export default PROMOTIONS


export  function FlightCity(params) {
    const data =[
        {img:"https://promos.makemytrip.com/images/50x50-Other-23052019.png", name:"Chennai Flights", Dettiel:"Via - Delhi, Mumbai, Coimbatore, Madurai" },
        {img:"https://promos.makemytrip.com/store/GoaDT.JPG", name:"Goa Flights", Dettiel:"Via - Delhi , Mumbai, Bangalore, Ahmedabad" },
        {img:"https://promos.makemytrip.com/store/MumbaiDT.JPG", name:"Mumbai Flights", Dettiel:"Via - Delhi, Bangalore, Chennai, Ahmedabad" },
        {img:"https://promos.makemytrip.com/images/50x50-Ooty-23052019.png", name:"Hyderabad Flights", Dettiel:"Via - Chennai, Mumbai, Bangalore, Delhi" },
        {img:"https://promos.makemytrip.com/store/DelhiDT.JPG", name:"Delhi Flights", Dettiel:"Via - Mumbai, Pune, Bangalore, Chennai" },
        {img:"https://promos.makemytrip.com/store/PuneDT.JPG", name:"Pune Flights", Dettiel:"Via - Delhi, Bangalore, Chennai, Ahmedaba" },
        {img:"https://promos.makemytrip.com/store/SingaporeDT.JPG", name:"Kolkata Flights", Dettiel:"Via - Delhi, Mumbai, Bangalore, Pune" },
        {img:"https://promos.makemytrip.com/store/BangaloreDT.JPG", name:"Bangalore Flights", Dettiel:"Via - Delhi, Pune, Mumbai, Kolkata" },
        {img:"https://promos.makemytrip.com/store/JaipurDT.JPG", name:"Jaipur Flights", Dettiel:"Via - Mumbai, Delhi, Pune, Bangalore" },        
    ]

 return(
    <>
    <Container maxWidth="xl" className='MainContended'>
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
                        <img src={item.img}  style={{borderRadius:"50%"}}/>
                    </div>
                    <div>
                        <h2 style={{fontSize:"21px", fontWeight:"500" }}>{item.name}</h2>
                        <p style={{fontSize:"14px", fontWeight:"400",  }}>{item.Dettiel}</p>
                    </div>
                </div>
            </Grid>
        )}
    </Grid>
</Container>

    </>
 )   
}



export function Dawnload(params) {
    return(
        <>
        <Container maxWidth="xl" className='MainContended'>
        <div className='' style={{
        borderRadius: "6px",
padding: "16px 30px",
boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
backgroundColor: "#fff"}}>
             <Grid container spacing={2}>
        <Grid item xs={8}>
            <div>
                <div style={{display:"flex", alignItems:"center",}}>
                    <div>
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuXk9HZ7RWR94EY45Nj3yUGKWf9bu3dX4tfCvEcJzYasFLEGae" style={{width:'92px', height:'96px'}}></img>
                    </div>
                    <div>
                    <h1 style={{fontSize:"calc(var(--font-scale, 1)* 32px)",
    fontWeight: "900",
    color: "#000",
    lineHeight: "50px"}}>
                    Download App Now !</h1>
                    <p style={{lineHeight: '18px', color:"#4a4a4a", fontWeight:"500"}}>Use code <span style={{fontWeight:'900', color: '#000',fontSize:"19px"}}>WELCOMEMMT</span> and get FLAT <span style={{fontWeight:'900', color: '#000', fontSize:"19px"}}>12% OFF*</span>on your first domestic flight booking</p>
                    </div>
                </div>
                <div className='' style={{margin:"10px"}}>
                    <input  type="tel" placeholder='Enter Mobile numbher' style={{fontWeight: "400",letterSpacing: 'normal', color:'#000',padding:"10px", border:"1px solid black"}}/>
                    <button style={{border:"1px solid #008cff", textAlign:"center", fontWeight:"900", color:"#008cff", padding:"10px"}}>GET APP LINK</button>
                </div>
            </div>
        </Grid>


        <Grid item xs={4}> 
        <div style={{display:"flex", gap:"20px", alignItems:"center", justifyContent:'center',
        borderRadius: "6px",
padding: "16px 30px",
minHeight: "80px",
boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
backgroundColor: "#fff"}}>
                <div style={{display:"flex",  flexDirection:"column", gap:"20px",alignItems:"center", justifyContent:'center'}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg' style={{ width:"135px"}}/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' style={{ width:"135px"}}/>
                </div>
                <div>
                    <img src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg" style={{width:'105px',height: "105px"}}/>
                </div>
         </div>
        </Grid>
        </Grid>
        </div>
        </Container>
        </>
    )
}