import BannerHook from "../hooks/BannerHook";
import Nav2 from "./Home2/Nav2";
import { useEffect, useState } from "react";
import { TfiLayoutGrid3, TfiMenuAlt } from "react-icons/tfi";
import { Rating } from "@mui/material";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideHook from "../hooks/SideHook";

const Shop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [img, setImage] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setData(data))
        fetch('/image.json')
            .then(res => res.json())
            .then(image => {
                setImage(image)
            })
    }, [])
    const handleLocation = (idx) => {
        if (typeof (idx) == 'string') {
            navigate(`/shop?${location.search == '?1' ? '2' : location.search == '?2' ? '3' : location.search == '?3' && '3'}`)
            // console.log('nothing');

        }
        else {
            navigate(`/shop?${idx}`)
        }
    }
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Food Items']} link={['shop']} linkText={['shop']} />
            </div>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 flex items-start gap-x-12">
                <SideHook />
                <div  className="w-3/4">
                    <div className="flex items-center justify-between h-[54px]">
                        <div className="border border-[#E9E9E8] rounded-lg w-fit px-2">
                            <p className="text-[#63625F] text-[19px] py-3 px-3">Showing 1 - 22 Of 29 Results</p>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="border border-[#E9E9E8] rounded-lg w-fit px-2">
                                <p className="text-[#63625F] text-[19px] py-3 px-3">Short By: <span className="ml-4">A - Z</span></p>
                            </div>
                            <div className="border border-[#E9E9E8] rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer">
                                <TfiMenuAlt className="text-[#201F1B] text-xl" />
                            </div>
                            <div className="border border-[#E9E9E8] rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer">
                                <TfiLayoutGrid3 className="text-[#201F1B] text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-7 or-star mt-14">
                        {
                            data && img.length ?
                                location.search === '?1' ?
                                    data.slice(0, 12).map((item, idx) =>
                                        <div key={item.id} data-aos='fade-up'>
                                            <Link to={`/food-item?${item.id}`}>
                                                <div className='h-[303px] rounded-lg border flex justify-center items-center'>
                                                    <img src={img[idx].image} alt="" />
                                                </div>
                                                <div className="flex items-center gap-x-1 pt-5">
                                                    <Rating name="read-only" value={item.rating} readOnly />
                                                    <span className="text-[#63625F] font text-[15px]">{item.rating}</span>
                                                </div>
                                                <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">{item.name}</h5>
                                                <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">${item.price}</span>   <span>${item.discount_price}</span></p>

                                            </Link>
                                        </div>
                                    ) : location.search === '?2' ?
                                        data.slice(13, 25).map((item, idx) =>
                                            <div key={item.id} data-aos='fade-up'>
                                                <Link to={`/food-item?${item.id}`}>
                                                    <div className='h-[303px] rounded-lg border flex justify-center items-center'>
                                                        <img src={img.reverse()[idx].image} alt="" />
                                                    </div>
                                                    <div className="flex items-center gap-x-1 pt-5">
                                                        <Rating name="read-only" value={item.rating} readOnly />
                                                        <span className="text-[#63625F] font text-[15px]">{item.rating}</span>
                                                    </div>
                                                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">{item.name}</h5>
                                                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">${item.price}</span>   <span>${item.discount_price}</span></p>
                                                </Link>
                                            </div>) :
                                        data.slice(26, 38).map((item, idx) =>
                                            <div key={item.id} data-aos='fade-up'>
                                                <Link to={`/food-item?${item.id}`}>
                                                    <div className='h-[303px] rounded-lg border flex justify-center items-center'>
                                                        <img src={img[idx].image} alt="" />
                                                    </div>
                                                    <div className="flex items-center gap-x-1 pt-5">
                                                        <Rating name="read-only" value={item.rating} readOnly />
                                                        <span className="text-[#63625F] font text-[15px]">{item.rating}</span>
                                                    </div>
                                                    <h5 className="font-medium text-[19px] leading-[28px] text-[#201F1B]">{item.name}</h5>
                                                    <p className="font !mb-4 text-[19px] space-x-3 text-[#FE6A3A]"><span className="text-[#D4D4D4] line-through">${item.price}</span>   <span>${item.discount_price}</span></p>
                                                </Link>
                                            </div>)
                                :
                                <div className="flex justify-center items-center h-screen">
                                    <span className="loading loading-spinner loading-xl"></span>
                                </div>
                        }
                    </div>
                    <div className="flex items-center gap-x-5 mt-12">
                        <button onClick={() => handleLocation(1)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?1' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>01</button>
                        <button onClick={() => handleLocation(2)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?2' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>02</button>
                        <button onClick={() => handleLocation(3)} className={`w-[50px] h-[50px] hover:border-[#FE6A3A] ${location.search === '?3' && 'border-[#FE6A3A] text-[#FE6A3A]'} tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg`}>03</button>
                        <button onClick={() => handleLocation('next')} className="px-8 h-[50px] hover:border-[#FE6A3A] tra text-[#63625F] text-[15px] border border-[#E9E9E8] rounded-lg">Next</button>
                    </div>
                </div>
            </div>
            <Deal />
            <Footer2 two />
        </div>
    );
};

export default Shop;