import PointHook2 from "../../hooks/PointHook2";

const Category3 = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <div className="flex items-center justify-between">
                <PointHook2 head={'food category'} text={'Latest Categories'} />
                <button className="btn relative w-[190px] h-[56px] rounded-[10px] border-0 uppercase font-semibold text-[14px] text-white bg-[#FE6A3A] hover:text-[#FE6A3A] hover:bg-white tra hover:border">Book A Table</button>
            </div>
            <div className="mt-14">
                <div className="flex py-7 items-center justify-between border-y border-[#E9E9E8] px-7">
                    <div className="w-1/5 space-y-6">
                        <p className="text-[#63625F] text-[19px]">01.</p>
                        <h5 className="text-[#201F1B] text-[35px] font-medium">Italian foods</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/emBflUT.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Spicy Tuna Roll</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/AuUpC2u.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Margherita Pizza</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/jd6VYjR.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Risotto Milanese</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/IwPtm8v.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Calzone Pizza</h5>
                    </div>
                </div>
                <div className="flex py-7 items-center justify-between border-y border-[#E9E9E8] px-7">
                    <div className="w-1/5 space-y-6">
                        <p className="text-[#63625F] text-[19px]">02.</p>
                        <h5 className="text-[#201F1B] text-[35px] font-medium">Asian foods</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/qeMrrv4.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Sushi Rolls</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/HdgDDjW.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Chicken Pad</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/Dri3SvU.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Ramen Noodles</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/3cCEHaW.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Tso’s Chicken</h5>
                    </div>
                </div>
                <div className="flex py-7 items-center justify-between border-y border-[#E9E9E8] px-7">
                    <div className="w-1/5 space-y-6">
                        <p className="text-[#63625F] text-[19px]">03.</p>
                        <h5 className="text-[#201F1B] text-[35px] font-medium">Turkish foods</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/e3J3ASs.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Lahmacun Pizza</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/BBDN5K1.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Baklava Dessert</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/MPKTfpN.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Iskender Kebab</h5>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/VVBpExZ.png" alt="" />
                        <h5 className="text-[#201F1B] text-[19px] font-medium text-center mt-4">Turkish Pide</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category3;