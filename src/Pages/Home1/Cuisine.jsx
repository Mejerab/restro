import { FaArrowRightLong } from "react-icons/fa6";

const Cuisine = () => {
    return (
        <div className="max-w-[1320px] mx-auto 2xl:px-0 px-5 relative">
            <div className="flex justify-between items-center">
                <h4 data-aos='fade-right' className="font-medium text-[54px] text-[#201F1B]">Cuisine Experience:</h4>
                <button  data-aos='fade-left' className="btn relative uppercase but tra w-[192px] h-[50px] rounded-full hover:text-white bg-transparent border-[#E9E9E8] font font-semibold text-[15px] hover:bg-[#FE6A3A] text-[#201F1B]">
                    <div className="first absolute text-white bg-[#FE6A3A] left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full">
                        <FaArrowRightLong className="text-sm" />
                    </div>
                    <span className="tra whi ml-6">view all items</span>
                    <FaArrowRightLong className="text-lg sec absolute right-7" />
                </button>
            </div>
            <img className="absolute -top-12 right-[22rem]" src="https://i.imgur.com/GiK2qpe.png" alt="" />
            <div className="mt-16 flex justify-between">
                <div data-aos='fade-up' data-aos-delay={700} className="flex flex-col items-center gap-y-5">
                    <img className="p-5 border rounded-full" src="https://i.imgur.com/EgFTikt.png" alt="" />
                    <h4 className="font-medium text-[25px] text-[#201F1B]">Italian Foods</h4>
                </div>
                <div data-aos='fade-up' data-aos-delay={1000} className="flex flex-col items-center gap-y-5">
                    <img className="p-5 border rounded-full" src="https://i.imgur.com/ahK0DgV.png" alt="" />
                    <h4 className="font-medium text-[25px] text-[#201F1B]">Asian Foods</h4>
                </div>
                <div data-aos='fade-up' data-aos-delay={1300} className="flex flex-col items-center gap-y-5">
                    <img className="p-5 border rounded-full" src="https://i.imgur.com/rqn0iQN.png" alt="" />
                    <h4 className="font-medium text-[25px] text-[#201F1B]">Chinese Foods</h4>
                </div>
                <div data-aos='fade-up' data-aos-delay={1600} className="flex flex-col items-center gap-y-5">
                    <img className="p-5 border rounded-full" src="https://i.imgur.com/qY0Mait.png" alt="" />
                    <h4 className="font-medium text-[25px] text-[#201F1B]">Asian Foods</h4>
                </div>
                <div data-aos='fade-up' data-aos-delay={1900} className="flex flex-col items-center gap-y-5">
                    <img className="p-5 border rounded-full" src="https://i.imgur.com/5y23Qnd.png" alt="" />
                    <h4 className="font-medium text-[25px] text-[#201F1B]">Japanese Foods</h4>
                </div>
            </div>
        </div>
    );
};

export default Cuisine;