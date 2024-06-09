import teamImg from "../assets/images/team-img.svg" 

const Team = () => {
    return (
        <div id="team" className="bg-[--bg] pb-[50px] ">
            <div className="container mx-auto">
                <h1 className="title">Team</h1>
                <div className=" grid grid-cols-2 gap-[100px] ">
                    <div className="pb-[80px] ">
                        <p className="text mb-[40px] ">
                            For each project, we form a team that includes a
                            project manager, business analyst, UI / UX designer,
                            DevOps, QA engineer, backend and front-end
                            developers.
                        </p>
                        <p className="text-[140px] mb-0 leading-[80%] text-[--primary] font-extrabold " >100+</p>
                        <p className=" text-[40px] text-[--second] font-bold ">Dedicated team</p>
                    </div>
                    <div className=" flex justify-end h-full">
                        <img src={teamImg} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
