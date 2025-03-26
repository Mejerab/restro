import { Map } from "pigeon-maps";
import BannerHook from "../hooks/BannerHook";
import Card from "./Home2/Card";
import Footer2 from "./Home2/Footer2";
import Nav2 from "./Home2/Nav2";
import { useState } from "react";

const ConfirmReservation = () => {
    const [center, setCenter] = useState([41.8781, -87.6298])
    const [zoom, setZoom] = useState(11)
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Confirm Reservation']} link={['confirm-reservation']} linkText={['Confirm Reservation']} />
            </div>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
                <div className="p-20 border border-[#E9E9E8] rounded-[10px] flex gap-x-14">
                    <div className="w-full">
                        <div>
                            <div className='flex items-center gap-x-2'>
                                <div className='bg-[#0E7258] w-[50px] h-[1px]'></div>
                                <h5 className='text-[#0E7258] font-semibold text-[14px] uppercase'>contact us today</h5>
                            </div>
                            <h4 className='font-medium text-[48px] max-w-[565px]} leading-[58px] text-[#201F1B]'>Get in Touch with Us or <span className="text-[#FE6A3A]">Any Inquiries.</span></h4>
                        </div>
                        <form data-aos='fade-right' className="mt-9 space-y-7">
                            <div className="flex justify-between gap-x-7">
                                <input type="text" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#E9E9E8] rounded-[8px]" placeholder="Full Name:" />
                                <input type="email" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#E9E9E8] rounded-[8px]" placeholder="Email Address:" />
                            </div>
                            <div className="flex justify-between gap-x-7">
                                <input type="tel" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#E9E9E8] rounded-[8px]" placeholder="Phone:" />
                                <select className="px-4 select focus:outline-[#201F1B] w-full h-[56px] rounded-[8px] text-[#201F1B] placeholder:text-[#201F1B] text-[19px] border border-[#E9E9E8] bg-white" defaultValue={'Person'}>
                                    <option disabled>Person</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <textarea rows={5} className="textarea textarea-bordered border-[#E9E9E8] rounded-lg w-full text-[19px] text-[#201F1B] placeholder:text-[#201F1B]" placeholder="Write a note..."></textarea>
                            <button className="btn relative mt-6 w-full col-span-3 mx-auto h-[56px] rounded-[8px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">Send your message</button>
                        </form>
                    </div>
                    <Map
                        height={638}
                        center={center}
                        zoom={zoom}
                        onBoundsChanged={({ center, zoom }) => {
                            setCenter(center)
                            setZoom(zoom)
                        }}
                    />
                </div>
            </div>
            <Card padding />
            <Footer2 two />
        </div>
    );
};

export default ConfirmReservation;