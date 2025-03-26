import { useEffect, useState } from "react";
import BannerHook from "../hooks/BannerHook";
import PointHook2 from "../hooks/PointHook2";
import Nav2 from "./Home2/Nav2";
import { Rating } from "@mui/material";
import Book from "./Home2/Book";
import TopSelling from "./Home2/TopSelling";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";

const MenuPage = () => {
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
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Food Menu']} link={['menu']} linkText={['Menu']} />
            </div>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
                <PointHook2 head={'our menu'} text={'Most Popular Food Menus'} center />
                <div data-aos='fade-up' className="my-12 w-[90%] mx-auto flex justify-between">
                    <button onClick={() => setShow(data)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> All <span className="text-[#BCBCBB]">({data.length})</span></button>
                    <button onClick={() => setShow(pizza)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/8IaSbmd.png" alt="" /> Pizza <span className="text-[#BCBCBB]">({pizza.length})</span></button>
                    <button onClick={() => setShow(dessert)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/b2ubA19.png" alt="" /> Desserts <span className="text-[#BCBCBB]">({dessert.length})</span></button>
                    <button onClick={() => setShow(drink)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/6Fg2hBs.png" alt="" /> Drinks <span className="text-[#BCBCBB]">({drink.length})</span></button>
                    <button onClick={() => setShow(lunch)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/9cXSVLE.png" alt="" /> Lunch <span className="text-[#BCBCBB]">({lunch.length})</span></button>
                    <button onClick={() => setShow(salad)} className="btn font-normal focus:border-[#FE6A3A] h-[56px] pr-6 rounded-full bg-transparent border border-[#E9E9E8] text-[19px] text-[#201F1B]"><img className="-ml-2" src="https://i.imgur.com/PWkjEAe.png" alt="" /> Salads <span className="text-[#BCBCBB]">({salad.length})</span></button>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {
                        show.slice(0, 24).map(item =>
                            <div key={item.id} data-aos={item.id%2===0?'fade-left':'fade-right'} className="border border-[#E9E9E8] hover:bg-[#FFF7F4] hover:border-[#FE6A3A] cursor-pointer tra h-[100px] rounded-[14px] flex justify-between items-center px-6">
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
            </div>
            <Book />
            <TopSelling />
            <Deal />
            <Footer2 two/>
        </div>
    );
};

export default MenuPage;