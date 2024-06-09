import erpImg from "../assets/images/erp-img.png";
import crm from "../assets/icons/crm-icon.svg";
import el from "../assets/icons/icon-el.svg";
import ec from "../assets/icons/icon-ec.svg";
import pos from "../assets/icons/icon-pos.svg";
import sms from "../assets/icons/icon-sms.svg";
import house from "../assets/icons/icon-house.svg";
import GeneralCard from "../ui/GeneralCard";

const Erp = () => {
    return (
        <div id="erp" className="bg-[--bg] pb-[80px] ">
            <div className=" container mx-auto ">
                <h1 className="title">ERP systems</h1>
                <div className="grid grid-cols-2 gap-[100px] ">
                    <div className="flex justify-start h-full p-[40px] ">
                        <img src={erpImg} alt="" />
                    </div>
                    <div>
                        <p className="text mb-[50px] ">IT Systems of any level of complexity at a convenient time for you</p>
                       <div className="grid grid-cols-3 gap-[15px] " >
                        <GeneralCard icon={crm} content={'CRM'}/>
                        <GeneralCard icon={el} content={'eLearning'}/>
                        <GeneralCard icon={ec} content={'E-Commerce'}/>
                        <GeneralCard icon={pos} content={'POS'}/>
                        <GeneralCard icon={sms} content={'Sms / Email'}/>
                        <GeneralCard icon={house} content={'Warehouse'}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erp;
