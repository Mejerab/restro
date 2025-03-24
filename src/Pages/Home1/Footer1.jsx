import { FaCalendarDays, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { PiYoutubeLogo } from "react-icons/pi";

const Footer1 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/Ynt5iHi.png)] bg-cover w-full">
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
                <div className="py-28">
                    <div>
                        <h4 className={`w-[56rem] text-center mx-auto text-[#201F1B] font font-medium text-[54px] leading-[60px]`}>Make Online Reservation</h4>
                        <svg className="mx-auto -mt-2" width="70" height="40" viewBox="5 0 80 40">
                            <path className={`green-wave`} fill="none" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
                        </svg>
                    </div>
                    <div>
                        <form className="max-w-[969px] mx-auto mt-20">
                            <div className=" grid grid-cols-3 gap-x-8 gap-y-7">
                                <input type="text" className="input text-[19px] focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] bg-white" placeholder="Full Name:" />
                                <input type="text" className="input text-[19px] focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] bg-white" placeholder="Email Address:" />
                                <input type="text" className="input text-[19px] focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] bg-white" placeholder="Phone:" />
                                <select className="px-4 select focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] text-[19px] border border-[#201F1B] bg-white" defaultValue='Person'>
                                    <option disabled>Person</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <input type="date" className="input text-[19px] appearance-none focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] bg-white" />
                                <input type="time" className="input text-[19px] appearance-none focus:outline-[#201F1B] w-[303px] h-[56px] rounded-full text-[#201F1B] placeholder:text-[#201F1B] border border-[#201F1B] bg-white" />
                            </div>
                            <div className="mt-12 text-center">
                                <button className="btn relative but tra w-[303px] h-[50px] rounded-full hover:bg-[#201F1B] bg-[#FE6A3A] border-0 font font-semibold text-[15px] text-white">
                                    <div className="first tra w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#201F1B]">
                                        <FaCalendarDays className="text-sm" />
                                    </div>
                                    <span className="tra ml-3 ttt">Book A Table</span>
                                    <FaCalendarDays className="text-lg sec absolute right-16" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border border-[#D4BC41] border-l-0 border-r-0 grid grid-cols-5">
                    <div className="col-span-2 py-20 border-r border-[#D4BC41]">
                        <img className="mb-16" src="https://i.imgur.com/NqNmVdE.png" alt="" />
                        <div className="flex items-center text-[#201F1B] text-[19px] gap-x-3">
                            <IoMailOutline className="text-[#FE6A3A] text-lg" />
                            <a href="mailto:hello@restrorestaurant.com">hello@restrorestaurant.com</a>
                        </div>
                        <div className="flex mt-2 items-center text-[#201F1B] text-[19px] gap-x-3">
                            <FiPhoneCall className="text-[#FE6A3A] text-lg" />
                            <a href="tel:269785625397">+2 697-8562-5397</a>
                        </div>
                        <div className="mt-9 flex gap-x-3 items-center">
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-[#201F1B] hover:text-[#FFE149] text-[#201F1B]">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-[#201F1B] hover:text-[#FFE149] text-[#201F1B]">
                                <FaXTwitter className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-[#201F1B] hover:text-[#FFE149] text-[#201F1B]">
                                <FaInstagram className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-[#201F1B] hover:text-[#FFE149] text-[#201F1B]">
                                <PiYoutubeLogo className="text-[22px]" />
                            </div>
                        </div>
                    </div>
                    <div className="border-r border-[#D4BC41]">
                        <ul className="w-fit mx-auto py-20 space-y-3 text-[#201F1B] text-[19px]">
                            <h4 className="font-medium mb-5">Menus</h4>
                            <li className="hover:text-[#FE6A3A] tra"><button>Pizza</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Desserts</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Drinks</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Salads</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Lunch</button></li>
                        </ul>
                    </div>
                    <div className="border-r border-[#D4BC41]">
                        <ul className="w-fit mx-auto py-20 space-y-3 text-[#201F1B] text-[19px]">
                            <h4 className="font-medium mb-5">Company</h4>
                            <li className="hover:text-[#FE6A3A] tra"><button>About Us</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Blog Post</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Careers</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Overview</button></li>
                            <li className="hover:text-[#FE6A3A] tra"><button>Recipe</button></li>
                        </ul>
                    </div>
                    <div className=" mx-auto py-20 space-y-3 text-[#201F1B] font-medium text-[19px]">
                            <h4 className="mb-5">Opening Hour</h4>
                            <p className="pt-3">Monday - Friday <br />
                            07:00 aM to 10:30 PM</p>
                            <p className="pt-5">Saturday - Sunday <br />
                            08:00 aM to 09:30 PM</p>
                    </div>
                </div>
                <p className="py-6 text-[19px] text-[#201F1B] flex justify-between items-center">
                    <span>Rstro Restaurant © 2024 / All Right Reserved</span>
                    <span>Terms & Conditions / Privacy policy</span>
                </p>
            </div>
        </div>
    );
};

export default Footer1;