import BannerHook from "../hooks/BannerHook";
import Essay from "./Essay";
import About2 from "./Home2/About2";
import Blog2 from "./Home2/Blog2";
import Deal from "./Home2/Deal";
import Footer2 from "./Home2/Footer2";
import Nav2 from "./Home2/Nav2";
import Testimonials2 from "./Home2/Testimonials2";
import Chefs3 from "./Home3/Chefs3";

const About = () => {
    return (
        <div className="space-y-28">
            <div>
                <Nav2 />
                <BannerHook head={'About Us'} link={'about-us'} linkText={'About us'} />
            </div>
            <About2 />
            <Essay />
            <Chefs3 />
            <Testimonials2 />
            <Deal />
            <Blog2 />
            <Footer2 two/>
        </div>
    );
};

export default About;