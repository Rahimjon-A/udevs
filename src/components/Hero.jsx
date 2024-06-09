import logo from "../assets/images/logo.svg";
import heroImg from "../assets/images/hero.svg";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 mt-[300px] mb-[240px] justify-between ">
            <div>
                <img
                    src={logo}
                    alt="hero logo"
                    className=" w-[300px] mb-[30px] "
                />
                <p className="text-[50px] text-[--seccond] font-bold mb-[20px] ">
                    IT-Outsourcing Company
                </p>

                <Typewriter
                    options={{
                        strings: [
                            "Development and implementation ERP systems",
                            "User interface, User experience design",
                            "Optimization IT consulting infrastructure",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />

                <div>
                    <button
                        className={
                            " bg-[--primary] font-semibold text-white text-[30px] py-[15px] px-[100px] rounded-lg "
                        }
                    >
                        <a href="#">Contact</a>{" "}
                    </button>
                </div>
            </div>

            <div className="flex justify-end h-full ">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;
