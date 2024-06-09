import erpImg from "../assets/icons/imanImg.png";
import deleverImg from "../assets/icons/iman.svg";
import it1 from "../assets/icons/icon-map.svg";
import it2 from "../assets/icons/icon-loop.svg";
import it3 from "../assets/icons/mobile-corss.svg";
import GeneralCard from "../ui/GeneralCard";
import { FaRegEnvelope } from "react-icons/fa";

const Iman = () => {
    return (
        <div id="iman" className=" container mx-auto ">
            <div className=" grid grid-cols-2 gap-[150px] ">
                <div>
                    <img src={deleverImg} alt="" className="mb-[30px] " />
                    <div className="flex items-center mb-[20px] ">
                        <span className="flex rounded-full py-2 px-5 justify-start text-[#01cab0] gap-2 text-[18px] bg-[#ccf4ef]  items-center">
                            <FaRegEnvelope className="text-[28px] " />
                            Finance
                        </span>
                    </div>
                    <p className="text mb-[20px] ">
                        Iman - It is a mutual financing platform based on the
                        principles of Islamic Finance. Buyers, sellers and
                        investors meet here.
                    </p>
                    <p className="text-[38px] mb-[20px] text-[--second] font-semibold ">
                        What we did?
                    </p>
                    <div className="grid grid-cols-3 mb-[50px] gap-[15px] ">
                        <GeneralCard icon={it1} content={"Website"} />
                        <GeneralCard icon={it2} content={"Admin panel"} />
                        <GeneralCard icon={it3} content={"Crossplatform"} />
                    </div>
                </div>
                <div className="flex py-[100px] ">
                    <img src={erpImg} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Iman;
