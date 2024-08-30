import { Container } from "@mui/material"
import Links from "./About"
import "./Fotter.css"
import Qns, {FooterBootem} from "./question"
function Footer(params) {
    return (
        // <Container maxWidth="xl">
       <>
        <Links/>
        <Qns/>
        <FooterBootem/>
        </>
       
        // </Container>
    )
}
export default Footer