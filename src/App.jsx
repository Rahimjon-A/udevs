import Contact from "./components/Contact";
import Deliver from "./components/Deliver";
import Design from "./components/Design";
import Erp from "./components/Erp";
import Footer from "./components/Footer";
import Goodzone from "./components/Goodzone";
import Hero from "./components/Hero";
import Iman from "./components/Iman";
import It from "./components/It";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import Optimization from "./components/Optimization";
import OutWork from "./components/OutWork";
import Samsung from "./components/Samsung";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Team from "./components/Team";

function App() {
    return (
        <div>
            <Navbar />
            <div className=" container mx-auto mt-[100px] ">
              <Hero/>
              <Services/>
            </div>
            <Team/>
            <Mobile/>
            <Erp/>
            <Design/>
            <Optimization/>
            <It/>
            <Slider/>
            <Deliver/>
            <Samsung/>
            <Goodzone/>
            <Iman/>
            <OutWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
