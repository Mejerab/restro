import { FaArrowRightLong } from "react-icons/fa6";

const Cupon = () => {
    return (
        <div className="max-w-[1320px] mx-auto 2xl:px-0 text-white px-5">
            <div className="bg-[url(https://i.imgur.com/WXtEgyZ.png)] w-full bg-cover h-[110px] items-center px-16 flex justify-between">
                <h4 className="font-semibold text-[35px]">Do You Need Any Discount?</h4>
                <div className="flex items-center ">
                    <div className="w-[270px] h-[2.7px] -mr-1 bg-white"></div>
                    <FaArrowRightLong className="text-2xl" />
                </div>
                <button className="btn relative uppercase but tra w-[228px] h-[50px] rounded-full hover:bg-[#201F1B] hover:text-white bg-[#FFE149] border-0 font font-semibold text-[15px] text-[#201F1B]">
                    <div className="first absolute left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full text-white bg-[#201F1B]">
                        <FaArrowRightLong className="text-sm" />
                    </div>
                    <span className="tra whi ml-6">get a coupon code</span>
                    <FaArrowRightLong className="text-lg sec absolute right-6" />
                </button>
            </div>
        </div>
    );
};

export default Cupon;