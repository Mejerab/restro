import { Link, useLocation } from "react-router-dom";
import BannerHook from "../hooks/BannerHook";
import Nav2 from "./Home2/Nav2";
import Deal from "./Home2/Deal";
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { LuYoutube } from "react-icons/lu";
import Blog2 from "./Home2/Blog2";
import Footer2 from "./Home2/Footer2";

const BlogDetails = () => {
    const location = useLocation();
    
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={['Blog Details']} link={[`blog${location.search}`]} linkText={['blog details']} />
            </div>
            <div className="max-w-[1094px] mx-auto px-5 2xl:px-0 space-y-7">
                <div className="flex items-center gap-x-10">
                    <p className="text-[#63625F] font-medium text-[16px]">By: <span className="text-[#0E7258]">Roland Toski</span></p>
                    <p className="text-[#63625F] font-medium text-[16px]">Date: <span className="text-[#FE6A3A]">02 November 2024</span></p>
                </div>
                <h3 className="text-[#201F1B] font-medium text-[48px] leading-[58px]">Highlight the Unique and Delicious Flavors of Every Season&apos;s Best Produce and Local Offerings.</h3>
                <img className="w-full !my-8 h-[560px]" src='https://i.imgur.com/38f4Hgx.png' alt="" />
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <h3 className="font-medium text-[35px] text-[#201F1B]">Lorem ipsum odor amet consectetuer</h3>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <ol style={{ listStyleType: 'decimal' }} className="text-[#494949] pl-6 text-[19px] leading-[48px]">
                    <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                    <li>Porttitor a consequat hendrerit est, tortor finibus ridiculus cras.</li>
                    <li>Phasellus aliquet litora commodo aptent; potenti suspendisse</li>
                    <li>Taciti condimentum. Maximus per donec lectus erat vel accumsan.</li>
                    <li>Sem sagittis hac risus nisi magna imperdiet nullam.</li>
                </ol>
                <Deal />
                <h3 className="font-medium text-[35px] text-[#201F1B]">Lorem ipsum odor amet consectetuer</h3>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <h3 className="font-medium text-[35px] text-[#201F1B]">Lorem ipsum odor amet consectetuer</h3>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <ul style={{ listStyleType: 'disc' }} className="text-[#494949] pl-6 text-[19px] leading-[48px]">
                    <li>Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                    <li>Porttitor a consequat hendrerit est, tortor finibus ridiculus cras.</li>
                    <li>Phasellus aliquet litora commodo aptent; potenti suspendisse</li>
                    <li>Taciti condimentum. Maximus per donec lectus erat vel accumsan.</li>
                    <li>Sem sagittis hac risus nisi magna imperdiet nullam.</li>
                </ul>
                <h3 className="font-medium text-[35px] text-[#201F1B]">Lorem ipsum odor amet consectetuer</h3>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <p className="text-[#63625F] text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est, tortor finibus ridiculus cras. Phasellus aliquet litora commodo aptent; potenti suspendisse eu taciti condimentum. Maximus per donec lectus erat vel accumsan mi. Sem sagittis hac risus nisi magna imperdiet nullam velit tincidunt. Lacinia iaculis cras; potenti quisque fames iaculis dolor nascetur.</p>
                <div className="h-[88px] w-full bg-[#FFF7F4] rounded-lg flex justify-between px-12 items-center">
                    <h4 className="text-[#201F1B] font-medium text-[25px]">Share Post:</h4>
                    <div className="flex gap-x-3">
                        <button className="w-[48px] h-[48px] rounded-full border border-[#F2DDDA] flex items-center justify-center bg-white hover:text-white hover:bg-[#F2DEEE] tra"><FaFacebookF className="text-lg" /></button>
                        <button className="w-[48px] h-[48px] rounded-full border border-[#F2DDDA] flex items-center justify-center bg-white hover:text-white hover:bg-[#F2DEEE] tra"><RiTwitterXFill className="text-xl" /></button>
                        <button className="w-[48px] h-[48px] rounded-full border border-[#F2DDDA] flex items-center justify-center bg-white hover:text-white hover:bg-[#F2DEEE] tra"><FaInstagram className="text-xl" /></button>
                        <button className="w-[48px] h-[48px] rounded-full border border-[#F2DDDA] flex items-center justify-center bg-white hover:text-white hover:bg-[#F2DEEE] tra"><LuYoutube className="text-xl" /></button>
                    </div>
                </div>
                <div className="flex justify-between !mt-12">
                    <Link to='/blogs?1' className="btn text-[#63625F] bg-transparent border-2 border-[#E9E9E8] uppercase font-semibold text-[14px] h-[56px] w-[180px] rounded-lg"><FaArrowLeft className='text-sm' />Prev. Post</Link>
                    <Link to={`/blog?${parseInt(location.search.slice(1,2))+1}`} className="btn relative w-[180px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:border hover:bg-white tra">next post<FaArrowRight className='text-sm' /></Link>
                </div>
            </div>
            <Blog2 />
            <Footer2 two/>
        </div>
    );
};

export default BlogDetails;