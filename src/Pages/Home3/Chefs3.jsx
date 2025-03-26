import PointHook2 from "../../hooks/PointHook2";

const Chefs3 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/Rn6ASip.png)] bg-no-repeat bg-cover py-24">
            <div className="max-w-[1320px] mx-auto px-0">
                <div className="text-center">
                    <PointHook2 head={'our master chefs'} text={'Meet Our Master Chefs'} center yellow />
                </div>
                <div data-aos='fade-down' className="mt-14 text-white grid grid-cols-5 gap-x-9">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.imgur.com/KbolP7c.png" alt="" />
                        <h4 className="font-medium text-[25px]">Ronald Richards</h4>
                        <p className="text-[19px] text-[#FFFFFF85]">Executive Chef</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.imgur.com/tZLAJ8c.png" alt="" />
                        <h4 className="font-medium text-[25px]">Bessie Cooper</h4>
                        <p className="text-[19px] text-[#FFFFFF85]">Bar Manager</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.imgur.com/0bJpp4E.png" alt="" />
                        <h4 className="font-medium text-[25px]">Leslie Alexander</h4>
                        <p className="text-[19px] text-[#FFFFFF85]">Sous Chef</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.imgur.com/JPAGI2x.png" alt="" />
                        <h4 className="font-medium text-[25px]">Guy Hawkins</h4>
                        <p className="text-[19px] text-[#FFFFFF85]">Service Manager</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.imgur.com/CSQmbhK.png" alt="" />
                        <h4 className="font-medium text-[25px]">Jenny Wilson</h4>
                        <p className="text-[19px] text-[#FFFFFF85]">Pastry Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs3;