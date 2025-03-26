import PointHook from "../../hooks/PointHook";

const Chefs = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/55oUUBu.png)] bg-cover bg-no-repeat w-full relative bg-center">
            <div className="absolute top-7 left-1/2 -translate-x-1/2">
                <div className="relative">
                    <img className="rot w-44" src="https://i.imgur.com/PYi7ajS.png" alt="" />
                    <img className="absolute top-[2.7rem] left-[2.7rem] w-[5.6rem]" src="https://i.imgur.com/mch1fKy.png" alt="" />
                </div>
            </div>
            <div className="py-72 max-w-[1320px] mx-auto px-5 2xl:px-0">
                <PointHook text={'Meet Our Master Chefs'} white />
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
            <img className="absolute -top-36 right-0" src="https://i.imgur.com/ioVdZ75.png" alt="" />
            <img className="absolute -bottom-40 left-1/2 -translate-x-1/2" src="https://i.imgur.com/iZ97y0H.png" alt="" />
        </div>
    );
};

export default Chefs;