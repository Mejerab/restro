import { Link, useNavigate } from "react-router-dom";
import BannerHook from "../hooks/BannerHook";
import SideHook from "../hooks/SideHook";
import Nav2 from "./Home2/Nav2";
import { useEffect, useState } from "react";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";

const Blogs = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const handleLocation = (idx) => {
        if (typeof (idx) == 'string') {
            navigate(`/blogs?${location.search == '?1' ? '2' : location.search == '?2' ? '3' : location.search == '?3' && '3'}`)
            // console.log('nothing');

        }
        else {
            navigate(`/blogs?${idx}`)
        }
    }
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Recent Articles']} link={['blog']} linkText={'Blogs'} />
            </div>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
                <div className="flex justify-between items-start gap-x-12">
                    <div className="w-3/4 grid grid-cols-2 gap-y-8">
                        {
                            items.map(item =>
                                <div data-aos='fade-up' className="w-[416px] h-[576px] border border-[#E9E9E8] flex flex-col justify-center rounded-lg px-6" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="flex gap-x-6 mt-9">
                                        <p className="text-[13px] font-medium text-[#63625F] uppercase">By: <span className="text-[#0E7258]">roland toski</span></p>
                                        <p className="text-[13px] font-medium text-[#63625F] uppercase">Date: <span className="text-[#FE6A3A]"> 02 november 2024</span></p>
                                    </div>
                                    <h4 className="text-[25px] leading-[35px] mt-6 text-[#201F1B] font-medium">Must-Try Dishes That Will Leave You Craving Restaurant.</h4>
                                    <p className="text-[19px] leading-[32px] text-[#63625F] my-3">Get to know the talented chefs who bring creativity and passion to every dish.</p>
                                    <Link to={`/blog?${item.id}`} className="btn relative w-[148px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] hover:text-white bg-[#FFF7F4] text-[#FE6A3A] hover:bg-[#FE6A3A] tra">read more</Link>
                                </div>
                            )
                        }
                    </div>
                    <SideHook />
                </div>
                <div className="flex items-center gap-x-5 mt-12">
                    <button onClick={() => handleLocation(1)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?1' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>01</button>
                    <button onClick={() => handleLocation(2)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?2' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>02</button>
                    <button onClick={() => handleLocation(3)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?3' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>03</button>
                    <button onClick={() => handleLocation('next')} className="px-8 h-[50px] hover:border-[#FE6A3A] tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg">Next</button>
                </div>
            </div>
            <Deal />
            <Footer2 two/>
        </div>
    );
};

export default Blogs;