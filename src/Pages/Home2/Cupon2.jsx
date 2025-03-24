import { FaArrowRightLong } from "react-icons/fa6";

const Cupon2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
            <div className="bg-[url(https://i.imgur.com/ygcIXvx.png)] bg-cover bg-no-repeat h-[110px] items-center px-16 flex justify-between text-white">
                <h4 className="font-semibold text-[35px]">Do You Need Any Discount?</h4>
                <div className="flex items-center ">
                    <div className="w-[270px] h-[2.7px] -mr-1 bg-white"></div>
                    <FaArrowRightLong className="text-2xl" />
                </div>
                <button className="btn relative w-[228px] h-[52px] rounded-[6px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">get a coupon code</button>
            </div>
        </div>
    );
};

export default Cupon2;