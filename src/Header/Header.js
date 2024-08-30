import Navbar from "./Navbar"
import "./Heder.css"
import Booking from "./Booking"
function Header(params) {
    return(
        <>
        <div className="Heaader-Section">
            <Navbar></Navbar>
        <Booking/>
        </div>
        </>
    )
}
export default Header