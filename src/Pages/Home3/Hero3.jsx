import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';

import { Autoplay } from 'swiper/modules';

const Hero3 = () => {
    const [index, setIndex] = useState(1);
    const handleChange = (param) => {
        setIndex(index + param);
    }
    console.log(index);

    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="bg-[url(https://i.imgur.com/1gB3ilS.jpeg)] pl-20 pr-4 bg-cover bg-center bg-no-repeat rounded-[20px] h-[600px] flex items-center justify-between">
                <div data-aos='fade-right'>
                    <h4 className="text-[90px] font-semibold text-[#201F1B] leading-[90px]">Bold Flavors, Unforgettable Meals<span className="text-[#FE6A3A]">.</span></h4>
                    <p className="text-[#201F1B] text-[23px] py-4">Embark on a culinary journey at Restro Restaurant, where the world’s finest flavors converge.</p>
                    <button className="btn relative w-[180px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">explore menu</button>
                    <div className='w-3/5 -mb-7 mt-7 flex gap-x-2 items-center'>
                        <span className={`text-[#201F1B] text-[18px] font-medium`}>{index % 2 !== 0 ? '01' : '02'}</span>
                        <div className='w-4/5'>
                            <div className='bg-white h-[4px] w-full rounded-[100px]'>
                                <div className={`${index % 2 !== 0 ? 'w-1/2' : 'w-full'} bg-[#0E7258] h-full tra rounded-[100px]`}></div>
                            </div>
                        </div>
                        <span className='text-[#201F1B] text-[18px] font-medium'>02</span>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={5}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                        onSlideChangeTransitionEnd={() => handleChange(1)}
                        className="h-[550px] w-[650px]"
                        modules={[Autoplay]}
                    >
                        <SwiperSlide><img className='h-[550px]' src="https://i.imgur.com/Qbar51I.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-[550px]' src="https://i.imgur.com/Qbar51I.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-[550px]' src="https://i.imgur.com/Qbar51I.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-[550px]' src="https://i.imgur.com/Qbar51I.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero3;