import erpImg from "../assets/images/erp-img.png";
import arch from "../assets/icons/icon-arch.svg";
import auto from "../assets/icons/icon-auto.svg";
import test from "../assets/icons/icon-test.svg";
import load from "../assets/icons/icon-load.svg";
import devop from "../assets/icons/icon-devop.svg";
import cloud from "../assets/icons/icon-cloud.svg";
import loop from "../assets/icons/icon-loop.svg";
import GeneralCard from "../ui/GeneralCard";

const Optimization = () => {
  return (
    <div id="optimaze" className="bg-[--bg] pb-[80px] ">
    <div className=" container mx-auto ">
        <h1 className="title w-[60%] leading-[110%] ">Optimization Infrastructure</h1>
        <div className="grid grid-cols-2 gap-[100px] ">
            <div className="flex justify-start py-[80px] ">
                <img src={erpImg} alt="" />
            </div>
            <div>
                <p className="text mb-[50px] ">Our experienced professionals will help you optimize your infrastructure</p>
               <div className="grid grid-cols-3 gap-[15px] " >
                <GeneralCard icon={arch} content={'Architecture'}/>
                <GeneralCard icon={auto} content={'Auto testing'}/>
                <GeneralCard icon={test} content={'Stress testing'}/>
                <GeneralCard icon={load} content={'Load testing'}/>
                <GeneralCard icon={devop} content={'Devops'}/>
                <GeneralCard icon={cloud} content={'Cloud'}/>
                <GeneralCard icon={loop} content={'CI / CD'}/>
               </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Optimization