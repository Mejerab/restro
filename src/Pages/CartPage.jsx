import { useEffect, useState } from "react";
import BannerHook from "../hooks/BannerHook";
import Nav2 from "./Home2/Nav2";
import { FaMinus, FaPlus } from "react-icons/fa";
import { getData } from "./storage";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate();
    const cart = getData();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(datas => {
                const list = [];
                for (const id of cart) {
                    const item = datas.filter(data => data.id === id.id);
                    list.push(...item)
                }
                setData(list);
            })
    }, [])
    const [money, setMoney] = useState([]);
    useEffect(() => {
        const subTotal = cart?.reduce((sum, item) => {
            return sum + (item.quant * item.price);
        }, 0)
        setMoney(subTotal)
    }, [])
    const handleRemove = (id) => {
        const remaining = cart.filter(data => data.id !== id);
        const items = data.filter(it => it.id !== id);
        setData(items);
        localStorage.setItem('foods', JSON.stringify(remaining));
    }
    const [enable, setEnable] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        const cuppon = e.target.cuppon;
        if (cuppon.value === '3646') {
            setMoney(money - 20);
            setEnable(false);
            cuppon.value = '';
        }
    }
    const total = money + 2.38;

    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Cart']} link={['cart']} linkText={['cart']} />
            </div>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 mt-20">
                <div className="grid grid-cols-6">
                    <h4 className="col-span-3 font-medium text-[#201F1B] text-[16px]">Products</h4>
                    <h4 className="ml-12 font-medium text-[#201F1B] text-[16px]">Quantity</h4>
                    <h4 className="mx-auto pr-4 font-medium text-[#201F1B] text-[16px]">Total Price</h4>
                    <h4 className="ml-auto font-medium text-[#201F1B] text-[16px] pr-4">Remove</h4>
                </div>
                {
                    data.length ?
                        data.map(item =>
                            <div key={item.id} className="border border-[#E9E9E8] p-4 rounded-lg my-4 grid grid-cols-6">
                                <div className="flex items-center gap-x-4 col-span-3">
                                    <img className="p-2 rounded-full border" src={item.image} alt="" />
                                    <div className="space-y-1">
                                        <h4 className="text-[#201F1B] font-medium text-[19px]">{item.name}</h4>
                                        <p className="text-[15px] text-[#FE6A3A]"> <span className="text-[#878787] mr-2 line-through">${item.price}</span> ${item.discount_price}</p>
                                    </div>
                                </div>
                                <div data-tip="Click to modilfy quantity" onClick={() => navigate(`/food-item?${item.id}`)} className="tooltip ml-12 my-auto rounded-lg border w-[119px] h-[50px] border-[#E9E9E8] flex items-center justify-around text-[#878787]">
                                    <FaMinus className="text-xs cursor-pointer" />
                                    <span className="text-[#201F1B]">{(cart.find(it => it.id === item.id))?.quant}</span>
                                    <FaPlus className="text-xs cursor-pointer" />
                                </div>
                                <div className="border rounded-lg w-[87px] h-[50px] flex items-center justify-center mx-auto my-auto border-[#E9E9E8]">
                                    <p className="text-[15px]">${parseInt((cart.find(it => it.id === item.id))?.quant) * (cart.find(it => it.id === item.id))?.price}</p>
                                </div>
                                <div className="flex items-center justify-end pr-4">
                                    <button onClick={() => handleRemove(item.id)}><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-7 flex"><path d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z" stroke="#FE6A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                                </div>
                            </div>
                        ) :
                        <div className="h-60 text-red-600 flex items-center justify-center">No Items Added</div>
                }

                <div className="flex justify-between mt-20">
                    <div>
                        <form className="space-x-4" onSubmit={handleSubmit}>
                            <input name="cuppon" type="text" className="input h-[56px] w-[350px] pl-7 border border-[#E9E9E8] rounded-lg text-[#63625F] placeholder:text-[#63625F] font-medium text-[15px]" placeholder="Coupon Code" />
                            {
                                enable ? <button className="btn h-full w-[110px] text-white bg-[#0E7258] rounded-lg font-semibold text-[14px] uppercase">Apply</button> :
                                    <div data-tip="You have already used a cuppon" className="tooltip"><button disabled className="btn h-full w-[110px] text-white bg-[#0E7258] rounded-lg font-semibold text-[14px] uppercase">Apply</button></div>
                            }
                        </form>
                        <p className="text-[#63625F] font-medium pl-1 pt-1"><span className="underline">Note</span>: Cuppon Code is 3646.</p>
                    </div>
                    <Link to='/shop?1' className="btn relative w-[180px] h-[56px] rounded-[10px] border-2 border-[#FE6A3A] uppercase font-semibold text-[14px] text-[#FE6A3A] bg-white hover:bg-[#FE6A3A] hover:text-white tra">update cart</Link>
                </div>
                <div className="w-[475px] h-[341px] border border-[#E9E9E8] py-10 px-14 rounded-lg mt-10">
                    <h4 className="text-[#201F1B] font-medium text-[19px]">Cart Totals:</h4>
                    <p className="text-[#63625F] text-[19px] py-2 flex justify-between mt-6 border-t border-b">Subtotal: <span className="text-[#201F1B] font-medium">${money}</span></p>
                    <p className="text-[#63625F] text-[19px] py-2 flex justify-between mb-4 border-t border-b">Total: <span className="text-[#201F1B] font-medium">${total?.toString().slice(0, 6)}</span></p>
                    <p className="text-[#63625F] text-[15px] pb-4">Taxes and shipping calculated at checkout.</p>
                    <button className="btn relative hover:border w-[180px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">explore menu</button>
                </div>
            </div>
            <Deal />
            <Footer2 two />
        </div>
    );
};

export default CartPage;