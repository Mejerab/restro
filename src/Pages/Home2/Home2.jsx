import About2 from "./About2";
import Blog2 from "./Blog2";
import Book from "./Book";
import Card from "./Card";
import Catagories from "./Catagories";
import Cupon2 from "./Cupon2";
import Deal from "./Deal";
import Footer2 from "./Footer2";
import Hero2 from "./Hero2";
import Menu2 from "./Menu2";
import Nav2 from "./Nav2";
import Testimonials2 from "./Testimonials2";
import TopSelling from "./TopSelling";

const Home2 = () => {
    return (
        <div>
            <Nav2 />
            <Hero2 />
            <div className="space-y-28 pt-28">
                <Card />
                <TopSelling />
                <Catagories />
                <About2 />
                <Cupon2 />
                <Menu2 />
                <Deal />
                <Testimonials2 />
                <Book />
                <Blog2 />
                <Footer2 two />
            </div>
        </div>
    );
};

export default Home2;