
const Hero2 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/NR2imRa.jpeg)] bg-cover bg-bottom">
            <div className="bg-gradient-to-r from-[#201F1BB8] via-[#201F1BB8] to-[#201F1B00]">
                <div data-aos='fade-right' className="max-w-[1320px] mx-auto px-5 2xl:px-0 relative text-white space-y-6 py-20">
                    <img className="absolute bottom-[21.5rem] left-[27.3rem] 2xl:left-[26rem]" src="https://i.imgur.com/rETFsCT.png" alt="" />
                    <h3 className="font-semibold text-[90px] leading-[90px] w-[45rem]">Where Culinary Traditions Meet Innovation.</h3>
                    <p className="text-[23px] w-[45rem] leading-[40px]">Embark on a culinary journey at Restro Restaurant, where the world’s finest flavors converge.</p>
                    <button className="btn relative w-[180px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra">explore menu</button>
                </div>
                <div className="text-white font-medium flex items-center gap-x-12 max-w-[1320px] px-5 2xl:px-0 mx-auto pb-6">
                    <div>
                        <h6 className="text-[19px] mb-3">Call Anytime:</h6>
                        <a href="tel:00568894359" className="text-[32px]">(00) 568 - 894 - 359</a>
                    </div>
                    <div>
                        <h6 className="text-[19px] mb-3">Email For Booking:</h6>
                        <a href="tel:00568894359" className="text-[32px]">booking@restro.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;