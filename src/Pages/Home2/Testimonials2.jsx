import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowLeft } from 'react-icons/fa';

const Testimonials2 = () => {
    return (
        <div data-aos='fade-right' className="max-w-[1320px] mx-auto px-5 2xl:px-0 relative">
            <div className='flex items-center gap-x-2 '>
                <div className="bg-[#0E7258] w-[50px] h-[1px]"></div>
                <h5 className="text-[#0E7258] font-semibold text-[14px] uppercase">our testimonials</h5>
            </div>
            <h4 className="font-medium text-[48px] leading-[54px] w-[60rem] text-[#201F1B]">We Have Earned Over <span className="text-[#FE6A3A]">6,000</span> Reviews On Google From Our Customers!</h4>
            <Swiper
                data-aos='fade-left'
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '#prev',
                    nextEl: '#next'
                }}
                modules={[Navigation]}
                className="h-[431px] mt-16"
            >
                <SwiperSlide><div className="w-full relative p-4 rounded-[10px] border border-[#E9E9E8] flex items-center gap-x-6">
                    <img src="https://i.imgur.com/6il66oY.png" alt="" />
                    <div>
                        <p className="text-[19px] text-[#363532] leading-[32px]">“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                        <div className="flex items-center gap-x-4 mt-5">
                            <img src="https://i.imgur.com/KKHoRVA.png" alt="" />
                            <div>
                                <h5 className="text-[19px] font-medium text-[#201F1B]">Ronald Richards</h5>
                                <p className="text-[15px] text-[#201F1B85]">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                    <img className="absolute bottom-10 right-8 select-none" src="https://i.imgur.com/OF5PHnd.png" alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full relative p-4 rounded-[10px] border border-[#E9E9E8] flex items-center gap-x-6">
                    <img src="https://i.imgur.com/kfgQXxi.png" alt="" />
                    <div>
                        <p className="text-[19px] text-[#363532] leading-[32px]">“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                        <div className="flex items-center gap-x-4 mt-5">
                            <img src="https://i.imgur.com/Q7P4RDO.png" alt="" />
                            <div>
                                <h5 className="text-[19px] font-medium text-[#201F1B]">Ronald Richards</h5>
                                <p className="text-[15px] text-[#201F1B85]">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                    <img className="absolute bottom-10 right-8 select-none" src="https://i.imgur.com/OF5PHnd.png" alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full relative p-4 rounded-[10px] border border-[#E9E9E8] flex items-center gap-x-6">
                    <img src="https://i.imgur.com/6il66oY.png" alt="" />
                    <div>
                        <p className="text-[19px] text-[#363532] leading-[32px]">“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                        <div className="flex items-center gap-x-4 mt-5">
                            <img src="https://i.imgur.com/KKHoRVA.png" alt="" />
                            <div>
                                <h5 className="text-[19px] font-medium text-[#201F1B]">Ronald Richards</h5>
                                <p className="text-[15px] text-[#201F1B85]">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                    <img className="absolute bottom-10 right-8 select-none" src="https://i.imgur.com/OF5PHnd.png" alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full relative p-4 rounded-[10px] border border-[#E9E9E8] flex items-center gap-x-6">
                    <img src="https://i.imgur.com/kfgQXxi.png" alt="" />
                    <div>
                        <p className="text-[19px] text-[#363532] leading-[32px]">“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                        <div className="flex items-center gap-x-4 mt-5">
                            <img src="https://i.imgur.com/Q7P4RDO.png" alt="" />
                            <div>
                                <h5 className="text-[19px] font-medium text-[#201F1B]">Ronald Richards</h5>
                                <p className="text-[15px] text-[#201F1B85]">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                    <img className="absolute bottom-10 right-8 select-none" src="https://i.imgur.com/OF5PHnd.png" alt="" />
                </div></SwiperSlide>
            </Swiper>
            <div className='absolute z-50 bottom-0 left-1/2 flex items-center gap-x-6 -translate-x-1/2'>
                <div id='prev' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                    <FaArrowLeft className='text-sm' />
                </div>
                <div id='next' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                    <FaArrowLeft className='text-sm rotate-180' />
                </div>
            </div>
        </div>
    );
};

export default Testimonials2;