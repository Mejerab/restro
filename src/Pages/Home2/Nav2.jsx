import { IoBag, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav2 = () => {
    const lists = <>
        <li className="px-4 h-[30px] cursor-pointer rounded-full py-1 border border-[#FFFFFF4D] tra relative drop2"><span className="">Home</span>
            <ul className="absolute left-0 tra bg-white w-36 rounded-lg z-50 p-6">
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/'>Home1</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/home2'>Home2</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/home3'>Home3</Link></li>
            </ul>
        </li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:text-[#0E7258] tra"><Link to='/menu'>Menu</Link></li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:text-[#0E7258] tra"><Link to='/'>Offers</Link></li>
        <li className="px-4 h-[30px] cursor-pointer rounded-full py-1 border border-[#FFFFFF4D] tra relative drop2"><Link to='/'>Pages</Link>
            <ul className="absolute left-0 tra bg-white w-40 rounded-lg z-50 pl-3 p-6">
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/shop?1'>Shop</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/blogs?1'>Blogs</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/reservation'>Reservation</Link></li>
                <li className="p-2 px-4 tra my-0.5 w-fit rounded-full hover:text-[#0e7258]"><Link to='/confirm-reservation'>Confirm Reservation</Link></li>
            </ul>
        </li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:text-[#0E7258] tra"><Link to='/about-us'>About Us</Link></li>
        <li className="px-4 h-[30px] rounded-full py-1 border border-[#FFFFFF4D] hover:text-[#0E7258] tra"><Link to='/'>Contact Us</Link></li>
    </>
    return (
        <div id="nav2" className="navbar max-w-[1320px] mx-auto h-[90px] 2xl:px-0 px-5">
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
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost hover:bg-transparent text-xl"><img src="https://i.imgur.com/d19IJyN.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex -ml-6">
                <ul className="flex gap-x-3 uppercase font text-[15px] font-medium">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center border border-[#E9E9E8] rounded-[8px]">
                    <IoSearchSharp className="text-xl" />
                </div>
                <div className="w-[50px] cursor-pointer h-[50px] flex justify-center items-center border border-[#E9E9E8] rounded-[8px]">
                    <Link to='/checkout'><IoBag className="text-xl" /></Link>
                </div>
                <div className="">
                    <Link to='/cart' className="btn bg-[#0E7258] text-white hover:text-[#0E7258] hover:bg-white rounded-[8px] tra w-[170px] h-[50px] uppercase text-[14px] font-semibold">Book A Table</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav2;