import { useEffect, useState } from "react";
import { TiArrowRight } from "react-icons/ti";
const SideHook = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
            fetch('/foods.json')
                .then(res => res.json())
                .then(data => setData(data))
        }, [])
    return (
        <div data-aos='fade-left' className="w-1/4 grid space-y-12">
            <div className="space-y-5 bg-[#FFF7F4] p-[30px] pt-5 rounded-[8px]">
                <h4 className="text-[#201F1B] font-medium text-[25px]">Search:</h4>
                <input type="text" className="w-full rounded-lg border border-[#F2DDDA] h-[54px] placeholder:text-[#63625F] text-[#63625F] pl-4 text-[19px]" placeholder="Search here..." />
            </div>
            <div className="bg-[#FFF7F4] p-[30px] rounded-[8px]">
                <h4 className="text-[#201F1B] font-medium text-[25px]">Category:</h4>
                <div className="mt-7 space-y-4">
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Appetizer Platters <TiArrowRight className="text-xl" /></button>
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Grilled Sandwiches<TiArrowRight className="text-xl" /></button>
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Gourmet Burgers<TiArrowRight className="text-xl" /></button>
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Seafood Specials<TiArrowRight className="text-xl" /></button>
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Vegetarian Favorites<TiArrowRight className="text-xl" /></button>
                    <button className="btn hover:bg-[#FE6A3A] hover:text-white tra w-full bg-white border-[#F2DDDA] text-[#63625F] text-[19px] font-normal justify-between h-[54px]">Breakfast Delights<TiArrowRight className="text-xl" /></button>
                </div>
            </div>
            <div className="bg-[#FFF7F4] p-[30px] rounded-[8px] py-7">
                <h4 className="text-[#201F1B] font-medium text-[25px]">Top Selling Food:</h4>
                <div className="space-y-5 mt-5">
                    {
                        data.slice(0, 4).map(item =>
                            <div className="flex items-center gap-x-5" key={item.id}>
                                <img className="p-2.5 w-[80px] border border-[#E9E9E8] bg-white rounded-full" src={item.image} alt="" />
                                <div className="space-y-1.5">
                                    <h4 className="text-[#201F1B] text-[19px] font-medium">{item.name}</h4>
                                    <p className="text-[#FE6A3A] text-[15px]">${item.price}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="bg-[#FFF7F4] p-[30px] rounded-[8px] py-7">
                <h4 className="text-[#201F1B] font-medium text-[25px]">Popular Tags:</h4>
                <div className="grid grid-cols-5 gap-3 mt-5">
                    <button className="btn col-span-2 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A]  text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Grilled</button>
                    <button className="btn col-span-3 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Sushi Rolls</button>

                    <button className="btn col-span-3 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Creamy Pasta</button>
                    <button className="btn col-span-2 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Steaks</button>

                    <button className="btn col-span-2 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Desserts</button>
                    <button className="btn col-span-3 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Indian Curries</button>

                    <button className="btn col-span-3 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F] px-0">Cold Beverages</button>
                    <button className="btn col-span-2 hover:text-[#201F1B] tra hover:bg-transparent hover:border-[#FE6A3A] text-[19px] font-normal h-[54px] border border-[#F2DDDA] bg-white w-full text-[#63625F]">Pasta</button>
                </div>
            </div>
        </div>
    );
};

export default SideHook;