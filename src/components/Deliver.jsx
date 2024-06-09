import { TbTruckDelivery } from "react-icons/tb";
import delever from "../assets/images/delever.png";
import deleverImg from "../assets/images/deleverImg.svg";
import it1 from "../assets/icons/icon-map.svg"
import it2 from "../assets/icons/icon-loop.svg"
import it3 from "../assets/icons/mobile-corss.svg"
import it4 from "../assets/icons/icon-web.svg"
import it5 from "../assets/icons/design-phone.svg"
import GeneralCard from "../ui/GeneralCard";

const Deliver = () => {
    return (
        <div id="portfolio" className=" container mx-auto mb-[300px] ">
            <div className=" grid grid-cols-2 gap-[150px] ">
                <div className=" flex justify-end py-[50px] ">
                    <img src={delever} alt="image" />
                </div>

                <div>
                    <img src={deleverImg} alt="" className="mb-[30px] " />
                    <div className="flex items-center mb-[20px] " >
                        <span className="flex rounded-full py-2 px-5 justify-start text-[#ff5722] gap-2 text-[18px] bg-[#ffddd3]  items-center">  <TbTruckDelivery className="text-[28px] "/> Delivery </span> 
                    </div>
                    <p className="text mb-[20px] ">
                    Delever - Delivery service automation targeted at both consumers and restaurants.
                    </p>
                    <p className="text-[38px] mb-[20px] text-[--second] font-semibold ">What we did?</p>
                    <div className="grid grid-cols-3 mb-[50px] gap-[15px] " >
                <GeneralCard icon={it1} content={'Website'}/>
                <GeneralCard icon={it2} content={'Admin panel'}/>
                <GeneralCard icon={it3} content={'Crossplatform'}/>
                <GeneralCard icon={it4} content={'Web design'}/>
                <GeneralCard icon={it5} content={'Mobile design'}/>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Deliver;
