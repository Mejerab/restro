import PointHook2 from "../../hooks/PointHook2";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';
import { useLocation } from "react-router-dom";
const TopSelling = () => {
    const location = useLocation();
    return (
        <div className={`${location.pathname=='/home3'?'max-w-[1500px]':"max-w-[1320px]"} mx-auto 2xl:px-0 px-5 or-star`}>
            <div className="flex items-center justify-between">
                <PointHook2 head={'popular items'} text={'Top Selling Items'} />
                <button data-aos='fade-left' className="btn relative w-[180px] h-[56px] rounded-[10px] border-[#FE6A3A] uppercase font-semibold text-[14px] text-[#FE6A3A] bg-transparent hover:bg-[#FE6A3A] hover:text-white tra tra">explore menu</button>
            </div>
            <Swiper data-aos='fade-left'
                slidesPerView={location.pathname==='/home3'?5:4}
                spaceBetween={36}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="h-[560px] mt-14"
            >
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'}`}>
                        <img src="https://i.imgur.com/JXG93Vf.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'} relative`}>
                        <div className="absolute top-3 left-4">
                            <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        </div>
                        <img src="https://i.imgur.com/WYWfmaq.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'}`}>
                        <img src="https://i.imgur.com/HAz4xOS.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'} relative`}>
                        <div className="absolute top-3 left-4">
                            <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        </div>
                        <img src="https://i.imgur.com/C4PdVqd.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'}`}>
                        <img src="https://i.imgur.com/JXG93Vf.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'} relative`}>
                        <div className="absolute top-3 left-4">
                            <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        </div>
                        <img src="https://i.imgur.com/WYWfmaq.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'}`}>
                        <img src="https://i.imgur.com/HAz4xOS.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                <SwiperSlide><div className={`${location.pathname=='/home3'?'w-[270px]':'w-[303px]'} space-y-2`}>
                    <div className={`h-[303px] border flex justify-center items-center ${location.pathname=='/home3'&&'bg-white rounded-[10px]'} relative`}>
                        <div className="absolute top-3 left-4">
                            <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        </div>
                        <img src="https://i.imgur.com/C4PdVqd.png" alt="" />
                    </div>
                    <div className="flex items-center gap-x-1 pt-4">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">Crispy roasted salmon fish steak with herbs and garlic.</h5>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopSelling;