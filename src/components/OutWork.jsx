import OutWorkCart from "../ui/OutWorkCart";
import phone from "../assets/icons/con-call.svg";
import ana from "../assets/icons/con-ana.svg";
import off from "../assets/icons/con-off.svg";
import team from "../assets/icons/con-team.svg";
import start from "../assets/icons/con-start.svg";

function OutWork() {
    return (
        <div className=" container mx-auto mb-[200px] ">
            <h1 className="title mb-[100px] ">How we work!</h1>
            <div className="grid grid-cols-5 gap-[40px] justify-between">
                <OutWorkCart
                    img={phone}
                    title={"Сontact"}
                    p={"Send us your project request or project idea."}
                />
                <OutWorkCart
                    img={ana}
                    title={"Analysis"}
                    p={"We will contact you to clarify your project requirements."}
                />
                <OutWorkCart
                    img={off}
                    title={"Offer"}
                    p={"We will provide you with our free, non-binding application."}
                />
                <OutWorkCart
                    img={team}
                    title={"Team"}
                    p={"We provide a team for your requirements."}
                />
                <OutWorkCart
                    img={start}
                    title={"Start"}
                    p={"You will get to know the team and we'll get started."}
                />
            </div>
        </div>
    );
}

export default OutWork;
