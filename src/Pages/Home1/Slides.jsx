import Marquee from "react-fast-marquee";

const Slides = () => {
    return (
        <div className="max-w-[1780px] mx-auto">
            <Marquee speed={45}>
                <div className="font-semibold text-[54px] flex gap-x-12 items-center">
                    <img className="ml-12" src="https://i.imgur.com/fMf4Ux0.png" alt="" />
                    <span className=" text-[#0E7258]">Luscious</span>
                    <img src="https://i.imgur.com/7J2cbu5.png" alt="" />
                    <span className="text-transparent" style={{ '-webkit-text-stroke': '1px #E9E9E8' }}>Flavorful</span>
                    <img src="https://i.imgur.com/jyTynzP.png" alt="" />
                    <span className="text-[#FE6A3A]">Succulent</span>
                    <img src="https://i.imgur.com/3CA8rTs.png" alt="" />
                    <span className="text-transparent" style={{ '-webkit-text-stroke': '1px #E9E9E8' }}>Aromatic</span>
                    <img src="https://i.imgur.com/ihNf2se.png" alt="" />
                    <span className="text-[#FFE149]">Delicious</span>
                </div>
            </Marquee>
            <Marquee direction="right" speed={45}>
                <div className="font-semibold text-[54px] flex gap-x-12 items-center">
                    <img className="ml-12" src="https://i.imgur.com/fMf4Ux0.png" alt="" />
                    <span className=" text-[#FE6A3A]">Heavenly</span>
                    <img src="https://i.imgur.com/ihNf2se.png" alt="" />
                    <span className="text-transparent" style={{ '-webkit-text-stroke': '1px #E9E9E8' }}>Satisfying</span>
                    <img src="https://i.imgur.com/jyTynzP.png" alt="" />
                    <span className="text-[#FFE149]">Enticing</span>
                    <img src="https://i.imgur.com/3CA8rTs.png" alt="" />
                    <span className="text-transparent" style={{ '-webkit-text-stroke': '1px #E9E9E8' }}>Palatable</span>
                    <img src="https://i.imgur.com/7J2cbu5.png" alt="" />
                    <span className="text-[#0E7258]">Delectable</span>
                </div>
            </Marquee>
        </div>
    );
};

export default Slides;