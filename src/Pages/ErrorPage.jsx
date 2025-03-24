import { Link, useRouteError } from "react-router-dom";
import Nav2 from "./Home2/Nav2";
import BannerHook from "../hooks/BannerHook";
import Footer2 from "./Home2/Footer2";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <div>
                <Nav2 />
                <BannerHook head={['Error']} />
            </div>
            <div className="flex relative flex-col justify-center items-center max-w-[1320px] mx-auto py-24 px-5 2xl:px-0">
                <img className="absolute top-10 right-0" src="https://i.imgur.com/CdIXXnS.png" alt="" />
                {error.status===404&&<img src="https://i.imgur.com/G3ZwDtf.png" alt="" />}
                <div className="border-[#E9E9E8] mx-auto border-t my-7 mt-14 w-3/5 h-[1px]"></div>
                <h4 className="text-[#201F1B] text-[48px] font-medium"><span className="text-[#0E7258]">OPPS!</span> {error.status===404?'This Page is not Found':error.statusText}</h4>
                <p className="text-[#63625F] text-center mt-4 mb-9 text-[19px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor a consequat hendrerit est <br /> tortor finibus ridiculus cras.</p>
                <Link to='/' className="btn relative w-[200px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:border hover:bg-white tra">Back To Home</Link>
                <img className="absolute bottom-36 left-0" src="https://i.imgur.com/4EKCPnP.png" alt="" />
            </div>
            <Footer2 two/>
        </div>
    );
};

export default ErrorPage;