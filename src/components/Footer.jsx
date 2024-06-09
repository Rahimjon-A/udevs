import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import logo from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <div className=" bg-[--bg] pt-[50px] ">
        <img src={logo} alt="" className="mx-auto " />
        <div className=" container mx-auto flex justify-between  pb-[40px] border-b  border-[--primary] " >

            <ul className="flex flex-col gap-[10px] text-[--primary] text-[20px] ">
                <li className="text-[--second] text-[24px] mb-[10px] font-bold ">About us</li>
                <li>Direction</li>
                <li>Command</li>
                <li>Tools</li>
                <li>Clients</li>
            </ul>

            <ul className="flex flex-col gap-[10px] text-[--primary] text-[20px] ">
                <li className="text-[--second] text-[24px] mb-[10px] font-bold ">Services</li>
                <li>Development of mobile applications</li>
                <li>Development and implementation ERP systems</li>
                <li>User interface, User experience design</li>
                <li>IT consulting</li>
                <li>Optimization IT consulting infrastructure</li>
            </ul>

            <ul className="flex flex-col gap-[10px] text-[--primary] text-[20px] ">
                <li className="text-[--second] text-[24px] mb-[10px] font-bold ">Portfolio</li>
                <li>Delever</li>
                <li>Sms.uz</li>
                <li>Goodzone</li>
                <li>Iman</li>
            </ul>

        </div>
        <div className=" container flex justify-between mx-auto pt-[30px] pb-[60px] ">
            <p className="text-[22px] text-[--primary] ">© 2024 Udevs. All rights reserved</p>
            <div className="flex gap-3">
             <span className=" rounded-full bg-[#dde6fd] py-3 px-3 "> <FaInstagram className="text-[--primary] "  /></span> 
             <span className=" rounded-full bg-[#dde6fd] py-3 px-3 "> <FaTwitter className="text-[--primary] "/></span> 
             <span className=" rounded-full bg-[#dde6fd] py-3 px-3 "> <FaYoutube className="text-[--primary] "/></span> 
            </div>
        </div>
    </div>
  )
}

export default Footer