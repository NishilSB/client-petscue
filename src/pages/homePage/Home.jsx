import NavbarComponent from "../../components/homeComponent/NavbarComponent"
import FooterComponent from "../../components/homeComponent/FooterComponent"
import BodyComponent from "../../components/homeComponent/BodyComponent"
import Aboutus from "../../components/homeComponent/Aboutus"
import Discription from "../../components/homeComponent/Discription"

const Home = () => {
  return (
    <div>
        <NavbarComponent/>
        <BodyComponent/>
        <Aboutus/>
        <Discription/>
        <FooterComponent/> 
    </div>
  )
}

export default Home
