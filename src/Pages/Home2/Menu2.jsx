import { useEffect, useState } from "react";
import PointHook2 from "../../hooks/PointHook2";
import { Rating } from "@mui/material";

const Menu2 = () => {
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
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
            <div className="flex items-center flex-col">
                <PointHook2 head={'our menu'} center text={'Most Popular Food Menus'} />
            </div>
            <div className="my-12 mb-14 w-[90%] mx-auto flex justify-between">
                <button onClick={() => setShow(data)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> All <span className="text-[#BCBCBB]">({data.length})</span></button>
                <button onClick={() => setShow(pizza)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/8IaSbmd.png" alt="" /> Pizza <span className="text-[#BCBCBB]">({pizza.length})</span></button>
                <button onClick={() => setShow(dessert)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/b2ubA19.png" alt="" /> Desserts <span className="text-[#BCBCBB]">({dessert.length})</span></button>
                <button onClick={() => setShow(drink)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/6Fg2hBs.png" alt="" /> Drinks <span className="text-[#BCBCBB]">({drink.length})</span></button>
                <button onClick={() => setShow(lunch)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> Lunch <span className="text-[#BCBCBB]">({lunch.length})</span></button>
                <button onClick={() => setShow(salad)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/PWkjEAe.png" alt="" /> Salads <span className="text-[#BCBCBB]">({salad.length})</span></button>
            </div>
            <div className="grid grid-cols-3 gap-x-10 gap-y-5">
                {
                    show.slice(0, 12).map(item =>
                        <div key={item.id} className="flex items-center gap-x-7 border-b border-[#E9E9E8] pb-5">
                            <img className="border rounded-full p-3" src={item.image} alt="" />
                            <div className="space-y-1">
                                <div className="rate flex items-center gap-x-2">
                                    <Rating name="read-only" value={item.rating} readOnly />
                                    <span className="text-[15px] text-[#63625F]">({item.rating})</span>
                                </div>
                                <h5 className="font-medium text-[19px] text-[#201F1B]">{item.name}</h5>
                                <p className="text-[15px] text-[#63625F]">{item.ingredients.join(', ')}</p>
                                <h4 className="text-[#FE6A3A] text-[19px] font-medium">${item.price}</h4>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mx-auto w-fit mt-14">
                <button className="btn relative w-[190px] hover:border-[#FE6A3A] h-[56px] rounded-[8px] uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">book a table</button>
            </div>
        </div>
    );
};

export default Menu2;