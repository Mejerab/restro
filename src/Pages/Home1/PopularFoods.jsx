import { useEffect, useState } from "react";
import PointHook from "../../hooks/PointHook";
import { Rating } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

const PopularFoods = () => {
    const [data, setData] = useState([]);
    const [pizza, setPizza] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [drink, setDrink] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [salad, setSalad] = useState([]);
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setShow(data)
                const pizza = data.filter(dat => dat.type === 'pizza');
                setPizza(pizza)
                const dessert = data.filter(dat => dat.type === 'dessert');
                setDessert(dessert)
                const drinks = data.filter(dat => dat.type === 'drinks');
                setDrink(drinks)
                const lunch = data.filter(dat => dat.type === 'lunch');
                setLunch(lunch)
                const salad = data.filter(dat => dat.type === 'salad');
                setSalad(salad)
            })
    }, [])
    return (
        <div className="relative">
            <div className="max-w-[1320px] mx-auto 2xl:px-0 px-5 or-star">
                <PointHook text={'Popular Food Menus'} />
                <div className="my-12 w-[90%] mx-auto flex justify-between">
                    <button onClick={() => setShow(data)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> All <span className="text-[#BCBCBB]">({data.length})</span></button>
                    <button onClick={() => setShow(pizza)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/8IaSbmd.png" alt="" /> Pizza <span className="text-[#BCBCBB]">({pizza.length})</span></button>
                    <button onClick={() => setShow(dessert)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/b2ubA19.png" alt="" /> Desserts <span className="text-[#BCBCBB]">({dessert.length})</span></button>
                    <button onClick={() => setShow(drink)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/6Fg2hBs.png" alt="" /> Drinks <span className="text-[#BCBCBB]">({drink.length})</span></button>
                    <button onClick={() => setShow(lunch)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> Lunch <span className="text-[#BCBCBB]">({lunch.length})</span></button>
                    <button onClick={() => setShow(salad)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/PWkjEAe.png" alt="" /> Salads <span className="text-[#BCBCBB]">({salad.length})</span></button>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-14">
                    {
                        show.slice(0, 10).map(item =>
                            <div key={item.id} className="border border-[#E9E9E8] hover:bg-[#FFF7F4] hover:border-[#FE6A3A] cursor-pointer tra h-[100px] rounded-[14px] flex justify-between items-center px-6">
                                <div className="flex items-center gap-x-5">
                                    <img src={item.image} alt="" />
                                    <div>
                                        <h5 className="font-medium text-[19px] text-[#201F1B]">{item.name}</h5>
                                        <p className="text-[15px] leading-[28px] text-[#63625F]">{item.ingredients.join(', ')}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[19px] text-right text-[#FE6A3A]">${item.price}</h4>
                                    <div className="rate flex items-center">
                                        <Rating name="read-only" value={item.rating} readOnly />
                                        <span className="text-[15px] text-[#63625F]">({item.rating})</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="mx-auto w-fit">
                    <button className="btn relative uppercase but tra text-center w-[206px] h-[50px] rounded-full hover:bg-white bg-[#FE6A3A] border-0 font font-semibold text-[15px] hover:text-[#FE6A3A] text-white">
                        <div className="first absolute left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full bg-white text-[#201F1B]">
                            <FaArrowRightLong className="text-sm" />
                        </div>
                        <span className="tra spa ml-6">view all menus</span>
                        <FaArrowRightLong className="text-lg sec absolute right-7" />
                    </button>
                </div>
                <img className="absolute top-0 -right-0" src="https://i.imgur.com/JFsO4Dt.png" alt="" />
                <img className="absolute top-1/3 -left-0" src="https://i.imgur.com/GKa4VeM.png" alt="" />
            </div>
        </div>
    );
};

export default PopularFoods;