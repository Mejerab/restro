import { useLocation } from "react-router-dom";
import PointHook2 from "../../hooks/PointHook2";

const About2 = () => {
    const location = useLocation();
    return (
        <div className={`${location.pathname==='/home2'&&'pt-72'} max-w-[1320px] mx-auto px-5 2xl:px-0 flex justify-between items-center`}>
            <div className="bg-[url(https://i.imgur.com/o2O4Pg7.png)] bg-cover bg-no-repeat w-[642px] h-[642px] relative">
                <div className="flex justify-between items-center absolute bottom-8 pl-12 pr-6 w-full">
                    <div>
                        <h3 className="font-semibold text-[30px] leading-[50px] text-[#FE6A3A]"><span className="text-[106px] text-[#0E7258]">28</span>+</h3>
                        <p className="text-[#63625F] text-[13px] font-semibold uppercase">years of experience</p>
                    </div>
                    <p className="text-[19px] leading-[32px] underline text-[#63625F] w-72">“Our special burger offer brings you the best and value variety of flavors to choose sure.”</p>
                </div>
            </div>
            <div className="bg-[url(https://i.imgur.com/MGBwEaL.jpeg)] bg-cover bg-no-repeat w-[642px] bg-left-bottom h-[642px]">
                <div className="bg-gradient-to-r from-[#FBF0EC] to-[#FBF0EC1A] py-12 p-14 h-full w-full flex flex-col justify-between">
                    <PointHook2 head={'about us'} text={'Welcome To Restro Restaurant.'} />
                    <p className="text-[#63625F] text-[19px] leading-[32px]">Looking for the perfect burger at the perfect price? Look no further! Our exclusive burger deals are designed to give you the best value without compromising on flavor. Fresh, hot, and full of flavor these burgers are everything.</p>
                    <p className="text-[#63625F] text-[19px] leading-[32px]">Get ready for a burger experience like no other! Our special burger offer brings you the best of taste and value. With a variety of flavors to choose from, you&apos;re sure. Fresh, hot, and full of flavor these burgers are everything.</p>
                    <button className="btn relative w-[180px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">read more about</button>
                </div>
            </div>
        </div>
    );
};

export default About2;