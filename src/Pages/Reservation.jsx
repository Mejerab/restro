
import BannerHook from "../hooks/BannerHook";
import PointHook2 from "../hooks/PointHook2";
import Nav2 from "./Home2/Nav2";
import Testimonials2 from "./Home2/Testimonials2";
import Footer2 from "./Home2/Footer2";
import Card from "./Home2/Card";

const Reservation = () => {
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Reservation']} link={['reservation']} linkText={['reservation']} />
            </div>
            <div className="max-w-[1320px] mx-auto 2xl:px-0 px-5 flex justify-between">
                <img className="h-[689px]" src="https://i.imgur.com/mVnNHsQ.png" alt="" />
                <div className="bg-[url(https://i.imgur.com/zj8G0G8.png)] bg-no-repeat bg-cover w-[778px] h-fit rounded-xl p-20">
                    <PointHook2 head={['book a table']} text={['Make Online Reservation']} />
                    <p className="text-[#201F1B] text-[19px] mt-5">Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                    <form className="mt-9 space-y-7">
                        <div className="flex justify-between gap-x-7">
                            <input type="text" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Full Name:" />
                            <input type="email" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Email Address:" />
                        </div>
                        <div className="flex justify-between gap-x-6">
                            <input type="tel" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" placeholder="Phone:" />
                            <select className="px-4 select focus:outline-[#201F1B] w-full h-[56px] rounded-[8px] text-[#201F1B] placeholder:text-[#201F1B] text-[19px] border border-[#201F1B] bg-white" defaultValue={'Person'}>
                                <option disabled>Person</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="flex justify-between gap-x-6">
                            <input type="date" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" />
                            <input type="time" className="input w-full h-[56px] text-[19px] text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] rounded-[8px]" />
                        </div>
                        <button className="btn relative mt-6 w-[304px] col-span-3 mx-auto h-[56px] rounded-[8px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">Book A table</button>
                    </form>
                </div>
            </div>
            <Card padding/>
            <Testimonials2 />
            <Footer2 two/>
        </div>
    );
};

export default Reservation;