import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Nav2 from "./Home2/Nav2";
import BannerHook from "../hooks/BannerHook";
import { Rating } from "@mui/material";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaUser } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import TopSelling from "./Home2/TopSelling";
import Footer2 from "./Home2/Footer2";
import Deal from "./Home2/Deal";
import { storedData } from "./storage";

const FoodItems = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [img, setImg] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [state, setState] = useState('desc');
    const [heart, setHeart] = useState(false);
    const location = useLocation();
    const data = useLoaderData();
    const id = parseInt(location.search.substring(1));
    useEffect(() => {
        fetch('/image.json')
            .then(res => res.json())
            .then(data => setImg(data))
        for (const item of data) {
            if (item.id === id) {
                setItem(item);
            }
        }
        const items = JSON.parse(localStorage.getItem('foods'))?.find(it => it.id === item.id);
       setQuantity(items?.quant || 1);
    }, [data, id, item.id])

    const handleAdd = () => {
        storedData(item.id, quantity, item.discount_price);
        navigate('/cart');
    }
    if (img.length) {
        return (
            <div className="space-y-28">
                <div>
                    <Nav2 />
                    <BannerHook head={['Food Details']} link={['food-item']} linkText={['Food Item']} />
                </div>
                <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 or-star">
                    <div className="flex justify-between items-start gap-x-12">
                        <div className="w-1/3 rounded-lg flex justify-center items-center h-[418px] bg-[#FFF7F4]">
                            <img className="w-4/6" src={img[item.id - 1].image} alt="" />
                        </div>
                        <div className="w-2/3">
                            <div className="flex items-center">
                                <Rating name="read-only" value={item.rating} readOnly />
                                <span className="text-[#63625F] text-[15px]">({item.rating})</span>
                            </div>
                            <h4 className="text-[#201F1B] font-medium text-[32px] mt-3 leading-[42px]">{item.name}</h4>
                            <p className="text-[25px] font-medium text-[#FE6A3A] my-5"><span className="mr-5 line-through text-[#BCBCBB]">${item.price}</span>    ${item.discount_price}</p>
                            <p className="text-[#878787] text-[19px] leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                            <div className="mt-7">
                                <h5 className="font-medium text-[#201F1B] text-[19px]">Quantity:</h5>
                                <div className="mt-3 flex justify-between h-[56px]">
                                    <div className="flex items-center gap-x-4">
                                        <div className="w-[119px] text-[#878787] h-full rounded-lg border flex items-center justify-around border-[#E9E9E8]">
                                            <FaMinus onClick={() => { quantity > 1 && setQuantity(quantity - 1) }} className="text-xs cursor-pointer" />
                                            <span className="text-[#201F1B] select-none">{quantity}</span>
                                            <FaPlus onClick={() => setQuantity(parseInt(quantity) + 1)} className="text-xs cursor-pointer" />
                                        </div>
                                        <button className="w-[56px] h-full flex justify-center items-center border rounded-lg"><TbTruckReturn className="text-2xl" /></button>
                                        <button onClick={() => setHeart(!heart)} className="w-[56px] h-full flex justify-center items-center border rounded-lg">{heart ? <FaHeart className="text-xl text-red-600" /> : <FaRegHeart className="text-xl" />}</button>
                                    </div>
                                    <button onClick={handleAdd} className="btn relative w-[180px] h-[56px] rounded-lg hover:border border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">add to cart</button>
                                </div>
                            </div>
                            <div className="text-[19px] mt-10">
                                <div className="flex justify-between items-center border-b border-[#E9E9E8] pb-2">
                                    <h5 className="text-[#201F1B] font-medium">Category:</h5>
                                    <p className="text-[#63625F]">Burrito,Salads, pizza, lemon zest</p>
                                </div>
                                <div className="flex justify-between items-center border-b pt-5 border-[#E9E9E8] pb-2">
                                    <h5 className="text-[#201F1B] font-medium">Free shipping & Returns:</h5>
                                    <p className="text-[#63625F]">Fast Food, Good Meal</p>
                                </div>
                                <div className="flex justify-between items-center border-b pt-5 border-[#E9E9E8] pb-2">
                                    <h5 className="text-[#201F1B] font-medium">SKU:</h5>
                                    <p className="text-[#63625F]">restrorestaruant-small6398-pizza--68579029</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="font-medium text-[25px] text-[#201F1B] flex items-center gap-x-12">
                            <h5 onClick={() => setState('desc')} className={`hover:text-[#FE6A3A] ${state == 'desc' && 'text-[#FE6A3A]'} cursor-pointer tra`}>Description</h5>
                            <h5 onClick={() => setState('info')} className={`hover:text-[#FE6A3A] ${state == 'info' && 'text-[#FE6A3A]'} cursor-pointer tra`}>Additional Information</h5>
                            <h5 onClick={() => setState('review')} className={`hover:text-[#FE6A3A] ${state == 'review' && 'text-[#FE6A3A]'} cursor-pointer tra`}>Reviews (02)</h5>
                        </div>
                        {state === 'desc' ? <div className="text-[#63625F] text-[19px] leading-[32px] space-y-5 mt-5 border-t border-[#E9E9E8] pt-5">
                            <p>Mauris donec nisl egestas metus augue ex. Curae maecenas cubilia scelerisque dictum nunc tempus. Dictumst sociosqu risus tempor; et sollicitudin fames ante rutrum curae. Adipiscing vivamus est accumsan taciti accumsan dignissim turpis mattis. Ex ultrices rhoncus sapien natoque sagittis senectus vitae mus ex. Curae pulvinar vitae augue nam pretium est. Arcu enim venenatis arcu litora lobortis eu vehicula.</p>

                            <p>Mauris donec nisl egestas metus augue ex. Curae maecenas cubilia scelerisque dictum nunc tempus. Dictumst sociosqu risus tempor; et sollicitudin fames ante rutrum curae. Adipiscing vivamus est accumsan taciti accumsan dignissim turpis mattis. Ex ultrices rhoncus sapien natoque sagittis senectus vitae mus ex. Curae pulvinar vitae augue nam pretium est. Arcu enim venenatis arcu litora lobortis eu vehicula.</p>

                            <p>Mauris donec nisl egestas metus augue ex. Curae maecenas cubilia scelerisque dictum nunc tempus. Dictumst sociosqu risus tempor; et sollicitudin fames ante rutrum curae. Adipiscing vivamus est accumsan taciti accumsan dignissim turpis mattis. Ex ultrices rhoncus sapien natoque sagittis senectus vitae mus ex. Curae pulvinar vitae augue nam pretium est. Arcu enim venenatis arcu litora lobortis eu vehicula.</p>
                        </div> : state === 'info' ?
                            <div className="text-[#63625F] text-[19px] leading-[32px] space-y-5 mt-5 border-t border-[#E9E9E8] pt-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi neque distinctio unde blanditiis iure consectetur ullam, harum necessitatibus eum nulla dolore accusantium fugit exercitationem ea nihil, repellendus consequatur ipsam incidunt magnam illo? Natus, omnis inventore perferendis neque aut labore, ducimus, dolorum quo quam ipsam modi commodi harum! Magnam accusantium aliquid delectus laboriosam unde eos harum eum aliquam dignissimos veniam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi neque distinctio unde blanditiis iure consectetur ullam, harum necessitatibus eum nulla dolore accusantium fugit exercitationem ea nihil, repellendus consequatur ipsam incidunt magnam illo? Natus, omnis inventore perferendis neque aut labore, ducimus, dolorum quo quam ipsam modi commodi harum! Magnam accusantium aliquid delectus laboriosam unde eos harum eum aliquam dignissimos veniam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi neque distinctio unde blanditiis iure consectetur ullam, harum necessitatibus eum nulla dolore accusantium fugit exercitationem ea nihil, repellendus consequatur ipsam incidunt magnam illo? Natus, omnis inventore perferendis neque aut labore, ducimus, dolorum quo quam ipsam modi commodi harum! Magnam accusantium aliquid delectus laboriosam unde eos harum eum aliquam dignissimos veniam.</p>
                            </div> :
                            <div className="text-[#63625F] text-[19px] leading-[32px] space-y-8 mt-7 border-t border-[#E9E9E8] pt-5">
                                <div className="flex items-center gap-x-5">
                                    <div className="p-2 rounded-full bg-slate-200 w-fit">
                                        <FaUser className="text-3xl rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-[#201F1B] text-[19px]">User</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-5">
                                    <div className="p-2 rounded-full bg-slate-200 w-fit">
                                        <FaUser className="text-3xl rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-[#201F1B] text-[19px]">User</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <Deal />
                <TopSelling />
                <Footer2 two />
            </div>
        );
    }
    else {
        return <span>Loading...</span>
    }
};

export default FoodItems;