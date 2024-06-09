import logo from "../assets/images/logo.svg";
import drop1 from "../assets/icons/drop-1.svg";
import drop2 from "../assets/icons/drop-2.svg";
import drop3 from "../assets/icons/drop-3.svg";
import drop4 from "../assets/icons/drop-4.svg";
import drop5 from "../assets/icons/drop-5.svg";
import drop6 from "../assets/icons/drop-6.svg";
import drop7 from "../assets/icons/drop-7.svg";
import drop8 from "../assets/icons/drop-8.svg";
import drop9 from "../assets/icons/drop-9.svg";
import eng from "../assets/icons/eng.svg";
import rus from "../assets/icons/rus.svg";
import { useState } from "react";

const Navbar = () => {
    const [drop, setDrop] = useState(false);
    const [ active, setActive] = useState(0)

    return (
        <nav className=" fixed z-50 top-0 w-full  bg-white border-b ">
            <div className="flex py-[20px] mx-auto container items-center justify-between w-full ">
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className="ml-auto flex items-center gap-[40px] ">
                    <li
                    onClick={()=>setActive(1)}
                        className={`text-[18px] font-semibold m-[10px] pb-[15px] ${ active === 1 ? "border-b-[2px]" : null} hover:border-b-[2px] border-[--primary] `}
                    >
                        <a href="#services"> Direction </a>
                    </li>
                    
                    <li
                    onClick={()=>setActive(2)}
                        className={`text-[18px] font-semibold m-[10px] pb-[15px]  border-[--primary] ${ active === 2 ? "border-b-[2px]" : null} hover:border-b-[2px] `}
                    >
                        <a href="#team"> Command </a>
                    </li>

                    <li
                    onClick={()=>setActive(3)}
                        onMouseEnter={() => setDrop(true)}
                        onMouseLeave={() => setDrop(false)}
                        className={`${ active === 3 ? "border-b-[2px]" : null} hover:border-b-[2px] text-[18px] relative font-semibold m-[10px] pb-[15px]  border-[--primary] `}
                    >
                        <a href="#mobile"> Services </a>

                        <div
                            onMouseEnter={() => setDrop(true)}
                            onMouseLeave={() => setDrop(false)}
                            className={` ${
                                drop ? " block" : "hidden"
                            } absolute z-50 rounded-lg shadow-md pb-[40px] top-[50px] w-[350px] bg-white `}
                        >
                            <p className="my-[30px] px-[20px] ">Services</p>
                            <ul className="flex flex-col gap-6">
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#mobile"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop1} alt="" /> Development
                                        of mobile applications{" "}
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#erp"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop2} alt="" /> ERP systems
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#design"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop3} alt="" /> UI / UX
                                        design
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#optimaze"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop4} alt="" /> Optimization
                                        Infrastructure
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#it"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop5} alt="" /> IT consulting
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li
                    onClick={()=>setActive(4)}
                        className={` ${ active === 4 ? "border-b-[2px]" : null} hover:border-b-[2px] text-[18px] font-semibold m-[10px] pb-[15px]  border-[--primary] `}
                    >
                        <a href="3"> Tools </a>
                    </li>
                    <li
                    onClick={()=>setActive(5)}
                        className={` ${ active === 5 ? "border-b-[2px]" : null} hover:border-b-[2px] text-[18px] font-semibold m-[10px] pb-[15px]  border-[--primary] `}
                    >
                        <a href="#clients"> Clients </a>
                    </li>
                    <li
                    onClick={()=>setActive(6)}
                        className={`${ active === 6 ? "border-b-[2px]" : null} hover:border-b-[2px] text-[18px] group relative font-semibold m-[10px] pb-[15px]  border-[--primary] `}
                    >
                        <a href="#portfolio"> Portfolio </a>

                        <div
                            className={`  group-hover:block  hidden absolute z-50 rounded-lg shadow-md pb-[40px] top-[40px] w-[350px] bg-white `}
                        >
                            <p className="my-[30px] px-[20px] ">Portfolio</p>
                            <ul className="flex flex-col gap-6">
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#portfolio"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop6} alt="" /> Delever
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#sms"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop7} alt="" /> SMS.uz
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#zone"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop8} alt="" /> GoodZone
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#iman"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={drop9} alt="" /> Iman
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className={`text-[18px] group font-semibold m-[10px] pb-[15px]  border-[--primary] `}
                    >
                        <a href="3"> Language </a>
                        <div
                            className={`  group-hover:block  hidden absolute z-50 rounded-lg shadow-md pb-[40px] top-[70px] w-[150px] bg-white `}
                        >
                            <ul className="flex flex-col gap-6">
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={rus} alt="" className="w-[30px]  " /> Rus
                                    </a>
                                </li>
                                <li className="hover:bg-[--primary] hover:text-white py-2 px-[20px] ">
                                    <a
                                        href="#"
                                        className="flex gap-5 items-center"
                                    >
                                        <img src={eng} alt="" className="w-[30px]  " /> Eng
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className=" ml-[40px] ">
                    <button
                        className={
                            " bg-[--primary] font-semibold text-white text-[20px] py-[10px] px-[20px] rounded-md "
                        }
                    >
                        <a href="#contact">Contact</a>{" "}
                    </button>{" "}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
