import mobile1 from "../assets/icons/mobile-ios.svg";
import mobile2 from "../assets/icons/mobile-android.svg";
import mobile3 from "../assets/icons/mobile-corss.svg";
import mobileImg from "../assets/images/mobile-app.png";
import swift from "../assets/icons/swift.svg";
import kotlin from "../assets/icons/kotlin.svg";
import flutter from "../assets/icons/flutter.svg";
import GeneralCard from "../ui/GeneralCard";


const Mobile = () => {
    return (
        <div id="mobile" className=" container mx-auto">
            <h1 className="title w-[80%] leading-[110%] ">
                Development of mobile applications
            </h1>
            <div className="grid grid-cols-2 gap-[100px] ">
               <div>
               <p className=" text mb-[30px] w-[80%] ">
                    In collaboration with startups, we have learned how to
                    create a creative and functional user interface for mobile
                    applications.
                </p>
                <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
                    <GeneralCard icon={mobile1} content={'iOS'} />
                    <GeneralCard icon={mobile2} content={'Android'} />
                    <GeneralCard icon={mobile3} content={'Crossplatform'} />
                </div>
                <p className="text-[38px] mb-[30px] text-[--second] font-semibold ">Technologies</p>
                
                <div className="flex gap-[60px] mb-[40px]">
                    <div className="flex justify-center flex-col ">
                        <img src={swift} alt="" className="w-[80px] " />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Swift</p>
                    </div>
                    <div className="flex justify-center flex-col ">
                        <img src={kotlin} alt="" className="w-[80px] " />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Kotlin</p>
                    </div>
                    <div className="flex justify-center flex-col ">
                        <img src={flutter} alt="" className="w-[80px] " />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Flutter</p>
                    </div>
                </div>
               </div>
               <div className="flex justify-end h-full" >
                <img src={mobileImg} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Mobile;
