import FlightBook from "../Header/FlightBooking"
import Cards from "./Card"
import PROMOTIONS, {FlightCity, Dawnload} from "./Grird"

function MainSection(params) {
    return(
        <>
        <div className="p-12 mt-12">
        <FlightBook/>
        <Cards/>
        <PROMOTIONS></PROMOTIONS>
        <Dawnload></Dawnload>
        <FlightCity/>
        </div>
       </>
    )
}
export default MainSection