import { FaCalendarDays } from "react-icons/fa6";
import { IoBag, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav1 = () => {
    const lists = <>
        <li className="px-4 h-[30px] cursor-pointer rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra relative drop"><span className="pb-6">Home</span>
            <ul className="absolute z-50 tra bg-white w-36 rounded-lg left-0 p-6">
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/'>Home1</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/home2'>Home2</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/home3'>Home3</Link></li>
            </ul>
        </li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra"><Link to='/menu'>Menu</Link></li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra"><Link to='/'>Offers</Link></li>
        <li className="px-4 h-[30px] cursor-pointer rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra relative drop"><Link to='/'>Pages</Link>
            <ul className="absolute z-50 tra bg-white w-40 rounded-lg left-0 pl-3 p-6">
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/shop?1'>Shop</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/blogs?1'>Blogs</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/reservation'>Reservation</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:bg-[#FFE149]"><Link to='/confirm-reservation'>Confirm Reservation</Link></li>
            </ul>
        </li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra"><Link to='/about-us'>About Us</Link></li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:bg-[#FFE149] hover:text-[#201F1B] tra"><Link to='/'>Contact Us</Link></li>
    </>
    return (
        <div className="px-3 max-w-[1780px] mx-auto">
            <div className="navbar bg-[url(https://i.imgur.com/Nmg0iFN.png)] bg-fit mb-4 rounded-xl px-5 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl px-0 hover:bg-transparent"><img src="https://i.imgur.com/3YLoPNE.png" alt="" /></a>
                </div>
                <div className="flex-shrink-0 hidden lg:flex">
                    <ul className="flex gap-x-3 uppercase font text-[14px] font-medium">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="w-[48px] cursor-pointer h-[48px] border-2 flex justify-center items-center border-dotted border-[#FFFFFF4D] rounded-full">
                        <IoSearchSharp className="text-xl" />
                    </div>
                    <div className="w-[48px] cursor-pointer h-[48px] border-2 flex justify-center items-center border-dotted border-[#FFFFFF4D] rounded-full">
                        <Link to='/checkout'><IoBag className="text-xl" /></Link>
                    </div>
                    <Link to='/cart' className="btn relative but tra w-[182px] h-[50px] rounded-full hover:bg-[#201F1B] bg-[#FE6A3A] border-0 font font-semibold text-[15px] text-white">
                        <div className="first absolute left-3 tra w-[28px] h-[28px] flex justify-center items-center rounded-full bg-[#201F1B]">
                            <FaCalendarDays className="text-sm" />
                        </div>
                        <span className="tra ml-4">Book A Table</span>
                        <FaCalendarDays className="text-lg sec absolute right-7" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav1;