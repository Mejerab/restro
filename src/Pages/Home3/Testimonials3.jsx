import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft } from 'react-icons/fa';
import PointHook2 from '../../hooks/PointHook2';

const Testimonials3 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-0">
            <div className="flex justify-between items-center">
                <PointHook2 head={'our testimonials'} text={'What client say about us?'} />
                <div className='flex items-center gap-x-6'>
                    <div id='prev' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                        <FaArrowLeft className='text-sm' />
                    </div>
                    <div id='next' className='w-[60px] cursor-pointer h-[60px] flex justify-center items-center rounded-full hover:text-white text-[#201F1B] tra bg-transparent border border-[#E9E9E8] hover:bg-[#FE6A3A]'>
                        <FaArrowLeft className='text-sm rotate-180' />
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={35}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                navigation={{
                    prevEl: '#prev',
                    nextEl: '#next'
                }}
                modules={[Navigation, Autoplay]}
                className="h-[470px] mt-16"
            >
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/MOqAZja.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Marvin McKinney</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Absolutely fantastic! The food was bursting with flavor, and every dish we tried was cooked to perfection. The service was warm and attentive, making the experience even more delightful. I can&aspo;t wait to come back! The ambiance was cozy, the staff was friendly.”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/4tu9wcJ.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Darrell Steward</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/GZfGPTa.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Ronald Richards</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/MOqAZja.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Marvin McKinney</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Absolutely fantastic! The food was bursting with flavor, and every dish we tried was cooked to perfection. The service was warm and attentive, making the experience even more delightful. I can&aspo;t wait to come back! The ambiance was cozy, the staff was friendly.”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/4tu9wcJ.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Darrell Steward</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border rounded-[10px] relative !w-[416px] border-[#E9E9E8] p-8'>
                    <img src="https://i.imgur.com/acXj4iu.png" alt="" />
                    <p className='text-[19px] leading-[32px] pt-8 pb-12 text-[#363532]'>“Explore a diverse range of delicious, mouthwatering dishes from around the world. From comforting classics to bold, flavorful specialties, these popular food menus are guaranteed to delight your taste!”</p>
                    <div className='absolute bottom-10 flex items-center gap-x-5'>
                        <img src="https://i.imgur.com/GZfGPTa.png" alt="" />
                        <div>
                            <h4 className='font-medium text-[25px] text-[#201F1B]'>Ronald Richards</h4>
                            <p className='text-[#201F1B85] text-[15px]'>Happy Customer</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials3;