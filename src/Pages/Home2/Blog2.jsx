import { FaArrowLeft } from "react-icons/fa6";
import PointHook2 from "../../hooks/PointHook2";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Blog2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
            <div className="flex justify-between">
                <div className="w-[30rem]">
                    <PointHook2 head={'blog post'} text={'Our Latest Blog And Articles.'} />
                </div>
                <div data-aos='fade-left' className='flex items-center gap-x-6'>
                    <div id='prevv' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                        <FaArrowLeft className='text-sm' />
                    </div>
                    <div id='nextt' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                        <FaArrowLeft className='text-sm rotate-180' />
                    </div>
                </div>
            </div>
            <Swiper
            data-aos='fade-left'
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '#prevv',
                    nextEl: '#nextt'
                }}
                modules={[Navigation]}
                className=" mt-16"
            >
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/BCOQ8WZ.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/89logRk.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/T6SvduZ.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/BCOQ8WZ.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/89logRk.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
                <SwiperSlide><div className="w-full hover:border-[#0E7258] tra h-[576px] rounded-[8px] border border-[#E9E9E8] p-6 pl-8">
                    <img src="https://i.imgur.com/T6SvduZ.png" alt="" />
                    <div className="flex gap-x-6 mt-9">
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                    </div>
                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                    <button className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</button>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Blog2;