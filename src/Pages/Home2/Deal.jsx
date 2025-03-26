import { LuCheck } from "react-icons/lu";

const Deal = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 rounded-[10px]">
            <div className="bg-[url(https://i.imgur.com/PqO5L9w.png)] rounded-[10px] bg-cover bg-no-repeat w-full h-[400px]">
                <div data-aos='fade-left' className="bg-gradient-to-r from-[#0E181FB2] to-transparent h-full rounded-[10px] text-white flex justify-center pl-16 flex-col gap-y-5">
                    <div className=" flex items-center gap-x-2">
                        <div className="bg-[#FE6A3A] w-[50px] h-[1px]"></div>
                        <h5 className="text-[#FE6A3A] font-semibold text-[14px] uppercase">Sizzling Deal</h5>
                    </div>
                    <h4 className="font-medium text-[48px] -mt-3 w-[40rem]">Get <span className="text-[#FFE149]">50% Off</span> on Grilled Garlic Butter Shrimp Skewers!</h4>
                    <div className="flex gap-x-7 items-center mb-3">
                        <h4 className="text-[19px] flex items-center gap-x-2 font-medium"><LuCheck className="text-[#FFE149] text-[20px]" />Spicy Tuna Roll</h4>
                        <h4 className="text-[19px] flex items-center gap-x-2 font-medium"><LuCheck className="text-[#FFE149] text-[20px]" />Crispy Spring Rolls</h4>
                        <h4 className="text-[19px] flex items-center gap-x-2 font-medium"><LuCheck className="text-[#FFE149] text-[20px]" />Grilled Satay Skewers</h4>
                    </div>
                    <button className="btn relative w-[190px] h-[56px] rounded-[8px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">book a table</button>
                </div>
            </div>
        </div>
    );
};

export default Deal;