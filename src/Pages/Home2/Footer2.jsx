import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { PiYoutubeLogo } from "react-icons/pi";
import PropTypes from 'prop-types';

const Footer2 = ({two}) => {
    return (
        <div className={`bg-[url(https://i.imgur.com/lOMGrFz.png)] bg-cover bg-no-repeat relative ${two&&'!mt-64'}`}>
            <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
                <div className={`${!two&&'pt-28'} grid grid-cols-5`}>
                    <div className={`pb-20 ${two&&'pt-64'}`}>
                        <img onClick={()=>document.getElementById('nav2').scrollIntoView({behavior: "smooth"})} className="cursor-pointer mb-16" src="https://i.imgur.com/4vSfj4B.png" alt="" />
                        <div className="flex items-center text-[#FFFFFFA6] text-[19px] gap-x-3">
                            <IoMailOutline className="text-[#FFE149] text-lg" />
                            <a href="mailto:hello@restrorestaurant.com">hello@restrorestaurant.com</a>
                        </div>
                        <div className="flex mt-2 items-center text-[#FFFFFFA6] text-[19px] gap-x-3">
                            <FiPhoneCall className="text-[#FFE149] text-lg" />
                            <a href="tel:269785625397">+2 697-8562-5397</a>
                        </div>
                        <div className="mt-9 flex gap-x-3 items-center">
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-white hover:text-[#FE6A3A] text-[#FFFFFFA6]">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-white hover:text-[#FE6A3A] text-[#FFFFFFA6]">
                                <FaXTwitter className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-white hover:text-[#FE6A3A] text-[#FFFFFFA6]">
                                <FaInstagram className="text-xl" />
                            </div>
                            <div className="w-[32px] rounded-full flex justify-center items-center h-[32px] bg-transparent tra hover:bg-white hover:text-[#FE6A3A] text-[#FFFFFFA6]">
                                <PiYoutubeLogo className="text-[22px]" />
                            </div>
                        </div>
                    </div>
                    <ul className={`w-fit mx-auto pb-16 ${two&&'pt-64'} space-y-3 text-[#FFFFFFA6] text-[19px]`}>
                        <h4 className="font-medium mb-5 text-white">Menus</h4>
                        <li className="hover:text-[#FE6A3A] tra"><button>Pizza</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Desserts</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Drinks</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Salads</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Lunch</button></li>
                    </ul>
                    <ul className={`w-fit mx-auto pb-16 ${two&&'pt-64'} space-y-3 text-[#FFFFFFA6] text-[19px]`}>
                        <h4 className="font-medium mb-5 text-white">Quick Link</h4>
                        <li className="hover:text-[#FE6A3A] tra"><button>Shipping</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Return & Refund</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Order FAQs</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Privacy & Policy</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>My Wishlist</button></li>
                    </ul>
                    <ul className={`w-fit mx-auto pb-16 ${two&&'pt-64'} space-y-3 text-[#FFFFFFA6] text-[19px]`}>
                        <h4 className="font-medium mb-5 text-white">Company</h4>
                        <li className="hover:text-[#FE6A3A] tra"><button>About Us</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Blog Post</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Careers</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Overview</button></li>
                        <li className="hover:text-[#FE6A3A] tra"><button>Recipe</button></li>
                    </ul>
                    <div className={`mx-auto pb-16 ${two&&'pt-64'} space-y-3 text-[#FFFFFFA6] font-medium text-[19px]`}>
                        <h4 className="mb-5 text-white">Opening Hour</h4>
                        <p className="pt-3">Monday - Friday <br />
                            07:00 aM to 10:30 PM</p>
                        <p className="pt-5">Saturday - Sunday <br />
                            08:00 aM to 09:30 PM</p>
                    </div>
                </div>
                <p className="py-6 text-[19px] text-[#FFFFFFA6] border-t border-[#FFFFFF1A] flex justify-between items-center">
                    <span>Rstro Restaurant © 2024 / All Right Reserved</span>
                    <span>Terms & Conditions / Privacy policy</span>
                </p>
            </div>
            <img className={`absolute -top-[9.3rem] left-1/2 -translate-x-1/2 ${two?'block':'hidden'}`} src="https://i.imgur.com/P0UhMGX.png" alt="" />
        </div>
    );
};

Footer2.propTypes = {
    two: PropTypes.bool
}
export default Footer2;