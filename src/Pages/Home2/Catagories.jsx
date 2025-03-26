import { useState } from "react";
import PointHook2 from "../../hooks/PointHook2";
import { LuCheck } from "react-icons/lu";

const Catagories = () => {
    const [type, setType] = useState('Asian')
    return (
        <div className="bg-[#FBF0EC]">
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 h-[650px] pt-24">
                <div className="flex flex-col items-center">
                    <PointHook2 head={'food category'} center text={'Latest Categories'} />
                    <div className="flex justify-between items-center w-[75%] font-medium text-[25px] mt-10 text-[#201F1B]">
                        <button onClick={()=>setType('Italian')} className="focus:text-[#FE6A3A] tra">Italian Foods</button>
                        <span>-</span>
                        <button onClick={()=>setType('Asian')} className="focus:text-[#FE6A3A] tra">Asian Foods</button>
                        <span>-</span>
                        <button onClick={()=>setType('Chinese')} className="focus:text-[#FE6A3A] tra">Chinese Foods</button>
                        <span>-</span>
                        <button onClick={()=>setType('Turkish')} className="focus:text-[#FE6A3A] tra">Turkish Foods</button>
                        <span>-</span>
                        <button onClick={()=>setType('Japanese')} className="focus:text-[#FE6A3A] tra">Japanese Foods</button>
                    </div>
                </div>
                <div className="h-[598px] w-full px-9 rounded-[10px] mt-14 bg-white flex justify-between items-center">
                    <div data-aos='fade-right' className="space-y-3">
                        <div className="space-y-2">
                            <div className='flex items-center gap-x-2'>
                                <div className="bg-[#0E7258] w-[50px] h-[1px]"></div>
                                <h5 className="text-[#0E7258] font-semibold text-[14px] uppercase">{type} Food</h5>
                            </div>
                            <h4 className="font-medium text-[44px] text-[#201F1B]">Spice Up Your Day with Authentic Asian Cuisine! <span className="text-[#FE6A3A]">Special Offers Inside!</span></h4>
                        </div>
                        <p className="text-[19px] leading-[32px] text-[#63625F] w-[40rem]">Asian cuisine is a celebration of flavors, textures, and aromas that tantalize the senses. From the spicy curries of South Asia to the delicate sushi of Japan, every dish tells a story of culture and tradition.</p>
                        <div className="grid grid-cols-2 justify-between py-3 pb-5 w-[37rem] gap-y-3">
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Spicy Tuna Roll</h4>
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Korean Bibimbap Bowl</h4>
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Vietnamese Pho Soup</h4>
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Tandoori Chicken Platter</h4>
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Crispy Spring Rolls</h4>
                            <h4 className="text-[19px] flex items-center gap-x-2 font-medium text-[#201F1B]"><LuCheck className="text-[#0E7258] text-[20px]" />Grilled Satay Skewers</h4>
                        </div>
                        <button className="btn relative w-[190px] h-[56px] rounded-[10px] hover:border-[#FE6A3A] uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">book a table</button>
                    </div>
                    <img data-aos='fade-left' src="https://i.imgur.com/ZzHZ3ez.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Catagories;