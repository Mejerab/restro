import { useEffect, useState } from "react";
import PointHook2 from "../../hooks/PointHook2";
import { Rating } from "@mui/material";

const Menu3 = () => {
    const [Dinner, setDinner] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [Breakfast, setBreakfast] = useState([]);
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                const Dinner = data.filter(dat => dat.type === 'dessert');
                setDinner(Dinner)
                const lunch = data.filter(dat => dat.type === 'lunch');
                setLunch(lunch)
                const Breakfast = data.filter(dat => dat.type === 'salad');
                setBreakfast(Breakfast)
                setShow(Breakfast)
            })
    }, [])
    return (
        <div className="bg-[#FFF7F4] relative py-24 !-mb-28">
            <img className="absolute -top-9 left-2/3 translate-x-1/2" src="https://i.imgur.com/0SvyOyU.png" alt="" />
            <img className="absolute left-0 top-64" src="https://i.imgur.com/B1WePbf.png" alt="" />
            <div className="max-w-[1320px] mx-auto ">
                <div className="flex justify-between items-center">
                    <PointHook2 head={'our menu'} text={'Popular Food Menus'} />
                    <div className="ml-auto w-2/3 mx-auto flex justify-end gap-x-12">
                        <button onClick={() => setShow(Breakfast)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/PWkjEAe.png" alt="" /> Breakfasts <span className="text-[#BCBCBB]">({Breakfast.length})</span></button>
                        <button onClick={() => setShow(lunch)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> Lunch <span className="text-[#BCBCBB]">({lunch.length})</span></button>
                        <button onClick={() => setShow(Dinner)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/b2ubA19.png" alt="" /> Dinners <span className="text-[#BCBCBB]">({Dinner.length})</span></button>
                    </div>
                </div>
                <div className="flex justify-between border-t border-[#F2DDDA] mt-10 pt-14">
                    <img className="" src="https://i.imgur.com/PUzqCCh.png" alt="" />
                    <div className="grid grid-cols-2 gap-x-24 w-3/5 pr-4">
                        {
                            show.slice(0, 6).map(item =>
                                <div className="flex w-full h-fit pb-8 border-[#F2DDDA] border-b" key={item.id}>
                                    <img className="w-[80px] mr-6 h-[80px] p-2 rounded-full bg-white" src={item.image} alt="" />
                                    <div>
                                        <div className="rate flex items-center">
                                            <Rating name="read-only" value={item.rating} readOnly />
                                            <span className="text-[15px] text-[#63625F]">({item.rating})</span>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-[19px] text-[#201F1B]">{item.name}</h5>
                                            <p className="text-[15px] leading-[28px] text-[#63625F]">{item.ingredients.join(', ')}</p>
                                        </div>
                                        <h4 className="font-medium text-[19px]  text-[#FE6A3A]">${item.price}</h4>
                                    </div>
                                </div>
                            )
                        }
                        <button className="btn mt-auto relative w-[190px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:border hover:bg-white tra">book a table</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu3;