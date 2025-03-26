import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Testimonial1 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 pt-36 relative">
            <div data-aos='fade-up'>
                <h4 className={`w-[56rem] text-center mx-auto text-[#201F1B] font font-medium text-[54px] leading-[60px]`}>We have earned over <span className="text-[#FE6A3A]">6,000</span> reviews on Google from our customers!</h4>
                <svg className="mx-auto -mt-2" width="70" height="40" viewBox="5 0 80 40">
                    <path className={`green-wave`} fill="none" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
                </svg>
            </div>
            <div className="text-center my-12">
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                <h6 className="font-medium text-[19px]">Average Google Rating is <span className="text-[#0E7258]">4.8</span></h6>
            </div>
            <div data-aos='fade-right' className="flex justify-between items-center gap-x-10">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="h-[450px] bg-test"
                >
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/9FW3twg.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/F4BvgUl.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/9FW3twg.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/F4BvgUl.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/9FW3twg.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="border border-[#F9E9E7] bg-[#FFF7F4] h-[356px] w-full rounded-[20px] p-8">
                        <h4 className="font-medium text-[19px] text-[#0E7258]">“Definitely worth a visit!”</h4>
                        <p className="text-[19px] leading-[32px] text-[#363532] py-3 w-[32rem]">Gotek Restaurant is a true gem. The variety on the menu is amazing, and everything we ordered was cooked to perfection. The service was impeccable, and the overall experience was one we won’t forget.</p>
                        <div className="flex items-center gap-x-8 mt-6">
                            <img src="https://i.imgur.com/F4BvgUl.png" alt="" />
                            <div>
                                <h4 className="text-[25px] font-medium text-[#201F1B]">Marvin McKinney</h4>
                                <p className="text-[#201F1B85] text-[19px] ">Happy Customer</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial1;