import BestSeller from "./BestSeller";
import Chefs from "./Chefs";
import Cuisine from "./Cuisine";
import Cupon from "./Cupon";
import Footer1 from "./Footer1";
import Hero1 from "./Hero1";
import Nav1 from "./Nav1";
import PopularFoods from "./PopularFoods";
import Slides from "./Slides";
import Testimonial1 from "./Testimonial1";

const Home1 = () => {
    return (
        <div className="pt-4">
            <Nav1 />
            <Hero1 />
            <div className="space-y-28 pt-28 2xl:pt-40">
                <BestSeller />
                <Slides />
                <Cuisine />
                <Cupon />
                <PopularFoods />
                <Chefs />
                <Testimonial1 />
                <Footer1 />
            </div>
        </div>
    );
};

export default Home1;