import PointHook2 from "../hooks/PointHook2";

const Essay = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-5 2xl:px-0">
            <PointHook2 head={'our mission & vission'} />
            <div className="space-y-5">
                <h4 className="text-[48px] font-medium text-[#201F1B] leading-[58px]">Our vision Is To Go Beyond Serving Food By Building Connections And <span className="text-[#FE6A3A]">Enriching Lives.</span></h4>
                <p className="text-[#63625F] text-[19px] leading-[32px]">We aim to be a cornerstone in our community, supporting local farmers, reducing waste, and promoting sustainability. By delivering delicious meals with care and purpose, we hope to bring people together and create lasting bonds over shared culinary experiences. At the heart of our restaurant is the mission to create unforgettable dining experiences that blend exceptional flavors. We are committed to sourcing the finest ingredients, embracing culinary creativity, and ensuring every dish tells a story. Whether it’s a family dinner or a special celebration, we strive to make every moment with us truly memorable.</p>

                <p className="text-[#63625F] text-[19px] leading-[32px]">Our vision is to go beyond serving food by building connections and enriching lives. We aim to be a cornerstone in our community, supporting local farmers, reducing waste, and promoting sustainability. By delivering delicious meals with care and purpose, we hope to bring people together and create lasting bonds over shared culinary experiences.</p>

                <p className="text-[#63625F] text-[19px] leading-[32px]">We believe food is more than sustenance—it’s a way to connect, celebrate, and create joy. Our mission is to inspire a love for food that transcends the plate, creating a space where guests feel valued and at home. With every dish we prepare, we aim to foster togetherness, delight the senses, and leave a lasting impression of warmth and hospitality.</p>
            </div>
        </div>
    );
};

export default Essay;