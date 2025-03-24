import { useEffect, useState } from "react";
import BannerHook from "../hooks/BannerHook";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";
import Nav2 from "./Home2/Nav2";
import { getData } from "./storage";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdLockOutline } from "react-icons/md";
import Swal from "sweetalert2";

const Checkout = () => {
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
    const shipping = 2.38;
    useEffect(() => {
        const subTotal = cart?.reduce((sum, item) => {
            return sum + (item.quant * item.price);
        }, 0)
        setMoney(subTotal)
    }, [])
    const total = money + shipping;
    const handleSubmit = (e) => {
        e.preventDefault();
        const select = e.target.select.value;
        if (select !== 'Country / Region') {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                background: '#FE6A3A',
                confirmButtonColor: "#0E7258",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Do it",
                color: '#fff'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Success",
                        text: "Your order has placed",
                        icon: "success",
                        background: '#FE6A3A',
                        confirmButtonColor: "#0E7258",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Do it",
                        color: '#fff'
                    });
                    localStorage.removeItem('foods');
                    e.target.reset();
                    setData([]);
                    setMoney(0);
                }
            });
        }
        else {
            Swal.fire({
                title: "Error",
                text: "Select your country first",
                icon: "error",
                background: '#FE6A3A',
                confirmButtonColor: "#0E7258",
                color: '#fff',
                cancelButtonColor: "#d33",
                confirmButtonText: "Return"
            });
        }
    }
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Checkout']} link={['checkout']} linkText={['checkout']} />
            </div>
            <div className="grid grid-cols-5 items-start max-w-[1320px] mx-auto 2xl:px-0 px-5 gap-x-8">
                <div className="col-span-3 border border-[#E9E9E8] rounded-[10px] p-12">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between">
                            <h3 className="text-[#201F1B] font-medium text-[25px]">Contact</h3>
                            <button className="text-[#FE6A3A] text-[15px]">Log In</button>
                        </div>
                        <input required type="text" className="input h-[56px] my-4 input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Email or Phone Number" />
                        <div className="flex items-center">
                            <Checkbox
                                sx={{
                                    "&.Mui-checked": { color: "#FE6A3A" },
                                    left: '-12px'
                                }}
                            />
                            <p className="text-[#63625F] text-[15px] -ml-2">Email me with news and offer</p>
                        </div>
                        <div className="space-y-5 mt-5">
                            <h3 className="text-[#201F1B] font-medium text-[25px]">Delivery</h3>
                            <select name="select" required defaultValue="Country / Region" className="select h-[56px] select-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]">
                                <option value={'Country / Region'} disabled={true}>Country / Region</option>
                                <option value={'Crimson'}>Crimson</option>
                                <option value={'Amber'}>Amber</option>
                                <option value={'Velvet'}>Velvet</option>
                            </select>
                            <div className="flex gap-x-5">
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="First Name" />
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Last Name" />
                            </div>
                            <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Address" />
                            <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Resident (Optional)" />
                            <div className="flex gap-x-5">
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="City" />
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Postal Code (Optional)" />
                            </div>
                            <div className="flex items-center !mt-[12px]">
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": { color: "#FE6A3A" },
                                        left: '-12px'
                                    }}
                                />
                                <p className="text-[#63625F] text-[15px] -ml-2">Save this information for next time</p>
                            </div>
                        </div>
                        <div className="space-y-5 mt-12">
                            <h3 className="text-[#201F1B] font-medium text-[25px]">Shipping Method</h3>
                            <RadioGroup>
                                <div className="flex gap-x-5">
                                    <div className="flex justify-between px-4 w-full focus:border-[#FE6A3A] items-center border rounded-lg border-[#E9E9E8] pl-4 h-[56px]">
                                        <div className="flex gap-x-3 items-center">
                                            <FormControlLabel checked value="standard" control={<Radio
                                                sx={{
                                                    "&.Mui-checked": { color: "#FE6A3A" },
                                                }}
                                                icon={<MdCheckBoxOutlineBlank className="text-xl" />}
                                                checkedIcon={<MdCheckBox className="text-xl" />} />} />
                                            <p className="text-[#63625F] -ml-5 text-[15px]">Standard</p>
                                        </div>
                                        <p className="text-[#63625F] text-[15px]">Free</p>
                                    </div>
                                    <div className="flex justify-between px-4 w-full focus:border-[#FE6A3A] items-center border rounded-lg border-[#E9E9E8] pl-4 h-[56px]">
                                        <div className="flex gap-x-3 items-center">
                                            <FormControlLabel value="fast" control={<Radio
                                                sx={{
                                                    "&.Mui-checked": { color: "#FE6A3A" },
                                                }}
                                                icon={<MdCheckBoxOutlineBlank className="text-xl" />}
                                                checkedIcon={<MdCheckBox className="text-xl" />} />} />
                                            <p className="text-[#63625F] -ml-5 text-[15px]">Fast Delivery</p>
                                        </div>
                                        <p className="text-[#63625F] text-[15px]">Extra $05</p>
                                    </div>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-5 mt-12">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#201F1B] font-medium text-[25px]">Payment</h3>
                                <p className="text-[#63625F]">All transactions are secure and encrypted.</p>
                            </div>
                            <RadioGroup>
                                <div className="flex gap-x-5">
                                    <div className="flex gap-x-3 w-full focus:border-[#FE6A3A] items-center border rounded-lg border-[#E9E9E8] pl-4 h-[56px]">
                                        <FormControlLabel checked value="card" control={<Radio
                                            sx={{
                                                "&.Mui-checked": { color: "#FE6A3A" },
                                            }}
                                            icon={<MdCheckBoxOutlineBlank className="text-xl" />}
                                            checkedIcon={<MdCheckBox className="text-xl" />} />} />
                                        <p className="text-[#63625F] -ml-5 text-[15px]">Credit Card</p>
                                    </div>
                                    <div className="flex gap-x-3 w-full focus:border-[#FE6A3A] items-center border rounded-lg border-[#E9E9E8] pl-4 h-[56px]">
                                        <FormControlLabel value="cash" control={<Radio
                                            sx={{
                                                "&.Mui-checked": { color: "#FE6A3A" },
                                            }}
                                            icon={<MdCheckBoxOutlineBlank className="text-xl" />}
                                            checkedIcon={<MdCheckBox className="text-xl" />} />} />
                                        <p className="text-[#63625F] -ml-5 text-[15px]">Cash On Delivery (COD)</p>
                                    </div>
                                </div>
                            </RadioGroup>
                            <div className="relative">
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Card Number" />
                                <MdLockOutline className="text-[#63625F] absolute right-4 top-4 text-xl" />
                            </div>
                            <div className="flex gap-x-5">
                                <div className="w-full">
                                    <input defaultValue={'2025-06'} type="month" name="date" className="input date h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Expiration Date (MM / YY)" />
                                </div>
                                <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Security Code" />
                            </div>
                            <input required type="text" className="input h-[56px] input-bordered border-[#E9E9E8] w-full text-[#63625F] placeholder:text-[#63625F]" placeholder="Name On Card" />
                            <div className="flex items-center !mt-[12px]">
                                <Checkbox
                                    sx={{
                                        "&.Mui-checked": { color: "#FE6A3A" },
                                        left: '-12px'
                                    }}
                                />
                                <p className="text-[#63625F] -ml-2 text-[15px]">Use shipping address as billing address</p>
                            </div>
                            <button className="btn relative w-full hover:border h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">make your payment</button>
                        </div>
                    </form>
                </div>
                <div className="col-span-2 space-y-7 border border-[#E9E9E8] rounded-[10px] p-12">
                    {
                        data.length ?
                            data.map(item =>
                                <div className="flex items-center gap-x-5" key={item.id}>
                                    <img src={item.image} className="p-3 rounded-full border" alt="" />
                                    <div className="space-y-1">
                                        <h4 className="text-[#201F1B] font-medium text-[19px]">{item.name}</h4>
                                        <p className="text-[#FE6A3A] text-[15px]"><span className="text-[#BCBCBB] line-through mr-2">${item.price}</span> ${item.discount_price}</p>
                                    </div>
                                </div>
                            ) : <p className="text-red-600 text-center mb-12">No Items added.</p>
                    }
                    <div className="border text-[#63625F] p-8 text-[19px] border-[#E9E9E8] rounded-lg">
                        <p className="flex justify-between py-3 border-b border-[#E9E9E8]"><span>Subtotal <span className="text-[15px]">({data.length} items)</span>:</span>   <span className="text-[#201F1B] font-medium">${money}</span></p>
                        <p className="flex justify-between py-3 border-b border-[#E9E9E8]"><span>Shipping Charge:</span>   <span className="text-[#201F1B] font-medium">$0{shipping}</span></p>
                        <p className="flex justify-between py-3"><span>Total:</span>   <span className="text-[#201F1B] font-medium">${total}</span></p>
                    </div>
                </div>
            </div>
            <Deal />
            <Footer2 two />
        </div>
    );
};

export default Checkout;