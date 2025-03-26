import { Rating } from "@mui/material";
import PointHook from "../../hooks/PointHook";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';

const BestSeller = () => {
    return (
        <div className="relative max-w-[1320px] mx-auto 2xl:px-0 px-5 or-star">
            <img className="absolute left-0 -top-24" src="https://i.imgur.com/igbgu1a.png" alt="" />
            <img className="absolute -right-0 -top-24" src="https://i.imgur.com/p0rDkgr.png" alt="" />
            <PointHook text={'Best Seller Items'} />
            <div className="mt-16 flex justify-between">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={36}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="h-[510px]"
                >
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 right-4">
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/JXG93Vf.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Crispy roasted salmon fish steak</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 flex justify-between w-full px-4">
                        <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/fBaqeo8.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(4.8)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Baked Honey Glazed Cod Fillet</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$62.86</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 right-4">
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/9hok9E2.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(4.2)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Coconut Crusted Jumbo Prawns</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$65.59</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 flex justify-between w-full px-4">
                        <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">45% Off</p>
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/fvmtUEQ.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Grilled Garlic Butter Shrimp Skewers</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$68.25</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 right-4">
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/JXG93Vf.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Crispy roasted salmon fish steak</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$60.78</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 flex justify-between w-full px-4">
                        <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">50% Off</p>
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/fBaqeo8.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(4.8)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Baked Honey Glazed Cod Fillet</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$62.86</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 right-4">
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/9hok9E2.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(4.2)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Coconut Crusted Jumbo Prawns</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$65.59</span></p>
                </div></SwiperSlide>
                    <SwiperSlide><div data-aos='fade-left' className="bg-[url(https://i.imgur.com/pfm6oXH.png)] flex justify-center items-center flex-col w-[303px] h-[413px] space-y-3 relative">
                    <div className="absolute top-4 flex justify-between w-full px-4">
                        <p className="w-[60px] h-[20px] text-center text-white rounded-[4px] font text-[13px] bg-[#FE6A3A]">45% Off</p>
                        <Rating
                            defaultValue={0}
                            max={1}
                            icon={<FaHeart className="text-[18px] text-[#FE6A3A]" />}
                            emptyIcon={<FaRegHeart className="text-[18px] text-gray-500" />}
                        />
                    </div>
                    <img src="https://i.imgur.com/fvmtUEQ.png" alt="" />
                    <div className="flex items-center gap-x-1">
                        <Rating name="read-only" value={5} precision={0.5} readOnly />
                        <span className="text-[#63625F] font text-[15px]">(5.0)</span>
                    </div>
                    <h4 className="font font-medium text-[19px] text-[#201F1B] leading-[28px] w-56 text-center">Grilled Garlic Butter Shrimp Skewers</h4>
                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">$70.62</span>   <span>$68.25</span></p>
                </div></SwiperSlide>
                </Swiper>
                <img className="absolute -bottom-14 -left-44" src="https://i.imgur.com/TQCGHOu.png" alt="" />
            </div>
        </div>
    );
};

export default BestSeller;