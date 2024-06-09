import { TbTruckDelivery } from "react-icons/tb";
import erpImg from "../assets/images/erp-img.png";
import deleverImg from "../assets/icons/samsung.svg";
import it1 from "../assets/icons/icon-map.svg";
import it2 from "../assets/icons/icon-loop.svg";
import it3 from "../assets/icons/mobile-corss.svg";
import GeneralCard from "../ui/GeneralCard";
import { FaRegEnvelope } from "react-icons/fa";

const Samsung = () => {
    return (
        <div id="sms" className=" container mx-auto mb-[300px] ">
            <div className=" grid grid-cols-2 gap-[150px] ">
                <div>
                    <img src={deleverImg} alt="" className="mb-[30px] " />
                    <div className="flex items-center mb-[20px] ">
                        <span className="flex rounded-full py-2 px-5 justify-start text-[--primary] gap-2 text-[18px] bg-[#dae3fa]  items-center">
                            <FaRegEnvelope className="text-[28px] " />
                            Notification
                        </span>
                    </div>
                    <p className="text mb-[20px] ">
                    Smsuz.uz - It is a platform for bulk SMS messaging.
                    </p>
                    <p className="text-[38px] mb-[20px] text-[--second] font-semibold ">What we did?</p>
                    <div className="grid grid-cols-3 mb-[50px] gap-[15px] ">
                        <GeneralCard icon={it1} content={"Website"} />
                        <GeneralCard icon={it2} content={"Admin panel"} />
                        <GeneralCard icon={it3} content={"Crossplatform"} />
                    </div>
                </div>
                <div className="flex ">
                    <img src={erpImg} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Samsung;
