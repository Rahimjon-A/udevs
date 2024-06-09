import partner1 from "../assets/images/partner1.svg";
import partner2 from "../assets/images/parner2.svg";
import partner3 from "../assets/images/partner3.svg";
import partner4 from "../assets/images/partner4.svg";
import partner5 from "../assets/images/partner5.svg";
import partner6 from "../assets/images/partner6.svg";
import partner7 from "../assets/images/partner7.svg";
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div id="clients" className="mb-[120px]  ">
            <h1 className="title my-[50px] container mx-auto  ">Our clients</h1>

            <Marquee speed={30} className="mb-[30px] z-0 ">
            <div className="flex gap-8 justify-between ">
                    <img
                        src={partner1}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner2}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner3}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner4}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner5}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner6}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner7}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                </div>
            </Marquee>
            <Marquee direction="right" speed={30} >
            <div className="flex gap-8 justify-between ">
                    <img
                        src={partner1}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner2}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner3}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner4}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner5}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner6}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                    <img
                        src={partner7}
                        alt=""
                        className=" w-[220px] h-[130px] rounded-xl "
                    />
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;
