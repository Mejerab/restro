import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";

const Hero1 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/3S9xRAh.png)] bg-cover relative mx-3 2xl:pt-7 pt-4 pb-44 2xl:pb-24">
            <div className="max-w-[1320px] mx-auto 2xl:px-0 px-5 flex justify-between items-center">
                <div className="2xl:w-1/2 space-y-5">
                    <h2 className="text-[#201F1B] font font-semibold text-[70px] leading-[80px]">Where Culinary Traditions <span className="rotateBg relative text-white -ml-2"><span className="z-20 relative top-2 px-2">Meet</span></span> Innovation.</h2>
                    <p className="font text-[19px] leading-[32px] w-[33rem] text-[#37352B]">Embark on a culinary journey at Metta Restaurant, where the world’s finest flavors converge.</p>
                    <div className="space-x-5">
                        <button className="btn relative uppercase but tra w-[192px] h-[50px] rounded-full hover:bg-white bg-[#FE6A3A] border-0 font font-semibold text-[15px] hover:text-[#FE6A3A] text-white">
                            <div className="first absolute left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full bg-white text-[#201F1B]">
                                <FaArrowRightLong className="text-sm" />
                            </div>
                            <span className="tra spa ml-6">explore menu</span>
                            <FaArrowRightLong className="text-lg sec absolute right-7" />
                        </button>
                        <button className="btn but z-30 border-2 border-[#201F1B] relative uppercase tra w-[194px] h-[52px] rounded-full bg-transparent hover:bg-transparent hover:border-[#201F1B] font font-semibold text-[15px]">
                            <div className="first absolute left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#0F8264] text-white">
                                <IoPlayOutline className="text-sm" />
                            </div>
                            <span className="tra ml-6">How To Order</span>
                            <IoPlayOutline className="text-lg sec absolute right-7" />
                        </button>
                    </div>
                </div>
                <img className="w-[50%] 2xl:w-full" src="https://i.imgur.com/EiCauVb.png" alt="" />
            </div>
            <div className="absolute bottom-3 2xl:-bottom-14 left-1/2 -translate-x-1/2">
                <div className="relative">
                    <img className="rot" src="https://i.imgur.com/4y0y9xD.png" alt="" />
                    <img className="absolute top-[2.7rem] left-[2.7rem]" src="https://i.imgur.com/mch1fKy.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero1;