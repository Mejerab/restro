import About2 from "../Home2/About2";
import Book from "../Home2/Book";
import Card from "../Home2/Card";
import Cupon2 from "../Home2/Cupon2";
import Deal from "../Home2/Deal";
import Footer2 from "../Home2/Footer2";
import TopSelling from "../Home2/TopSelling";
import Blog3 from "./Blog3";
import Category3 from "./Category3";
import Chefs3 from "./Chefs3";
import Hero3 from "./Hero3";
import Menu3 from "./Menu3";
import Nav3 from "./Nav3";
import Testimonials3 from "./Testimonials3";

const Home3 = () => {
    return (
        <div className="space-y-28">
            <div className="bg-[#F3F4EC] pt-3 space-y-28 pb-20">
                <div className="space-y-3">
                    <Nav3 />
                    <Hero3 />
                </div>
                <TopSelling />
            </div>
                <About2 />
                <Book />
                <Category3 />
                <Menu3 />
                <Chefs3 />
                <Testimonials3 />
                <Deal />
                <Blog3 />
                <Cupon2 />
                <Card />
                <Footer2 dif/>
        </div>
    );
};

export default Home3;