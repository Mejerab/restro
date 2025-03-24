import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BannerHook = ({ head, link, linkText }) => {
    return (
        <>
            <div className="bg-[url(https://i.imgur.com/3DF0tfI.jpeg)] bg-no-repeat bg-center bg-cover">
                <div className="bg-gradient-to-r from-[#201F1BB8] via-[#201F1BB8] to-[#201F1B00] h-[550px]">
                    <div className="max-w-[1320px] mx-auto px-5 2xl:px-0 text-white flex flex-col justify-center h-full">
                        <h4 className="font-medium text-[70px] leading-[90px]">{head}</h4>
                        <p className="text-[23px] leading-[38px] max-w-[645px]">Embark on a culinary journey at Restro Restaurant, where the world’s finest flavors converge.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1320px] mx-auto h-[160px] flex justify-between items-center">
                <div className="flex w-[78%] justify-between h-full">
                    <div className="border-[#E9E9E8] border-r font-medium pr-16 flex flex-col justify-center">
                        <p className="text-[19px] text-[#0E7258]">Call Anytime:</p>
                        <h5 className="text-[25px] text-[#201F1B]"><a href="tel:00568894359">(00) 568 - 894 - 359</a></h5>
                    </div>
                    <div className="w-[68%] font-medium pr-16 flex flex-col justify-center">
                        <p className="text-[19px] text-[#FE6A3A]">Email For Booking:</p>
                        <h5 className="text-[25px] text-[#201F1B]"><a href="mailto:booking@restro.com">booking@restro.com</a></h5>
                    </div>
                </div>
                <div className="border-[#E9E9E8] border-l pl-8 py-4">
                    <p className="uppercase text-[#201F1B] font-semibold text-[14px]">Home / <Link className='text-[#FE6A3A]' to={`/${link}`}>{linkText}</Link></p>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#E9E9E8]"></div>
        </>
    );
};

BannerHook.propTypes = {
    head: PropTypes.array,
    link: PropTypes.array,
    linkText: PropTypes.array,
}
export default BannerHook;