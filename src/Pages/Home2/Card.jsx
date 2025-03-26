import PropTypes from 'prop-types';
const Card = ({ padding }) => {
    return (
        <div className={`${padding?'py-[80px] border border-x-0 border-[#E9E9E8]':''}`}>
            <div className={`max-w-[1320px] mx-auto px-5 2xl:px-0 text-white grid grid-cols-3 gap-x-9`}>
                <div data-aos='fade-right' className="bg-[url(https://i.imgur.com/1gssEr8.jpeg)] bg-cover rounded-[10px] cardd bg-no-repeat bg-right w-full h-[290px]">
                    <div className="bg-gradient-to-r h-full from-[#0304037A] via-[#0304037A] rounded-[10px] to-[#03040300] flex flex-col justify-center pl-8 gap-y-6">
                        <h4 className="text-[32px] font-medium leading-[42px] w-72">Burger Lover&apos;s Paradise. Grab Your Deal Today!</h4>
                        <button className="btn w-[140px] h-[48px] border-white border-2 hover:bg-white hover:text-[#FE6A3A] tra rounded-[8px] uppercase text-[14px] font-semibold bg-transparent text-white">Shop Now</button>
                    </div>
                </div>
                <div data-aos='fade-up' className="bg-[url(https://i.imgur.com/48P4jL5.jpeg)] bg-cover rounded-[10px] cardd bg-no-repeat bg-right w-full h-[290px]">
                    <div className="bg-gradient-to-r h-full from-[#0304037A] via-[#0304037A] rounded-[10px] to-[#03040300] flex flex-col justify-center pl-8 gap-y-6">
                        <h4 className="text-[32px] font-medium leading-[42px] w-72">Grab a Bite, Grab a Deal. prawn Feast Starts Now!</h4>
                        <button className="btn w-[140px] h-[48px] border-white border-2 hover:bg-white hover:text-[#FE6A3A] tra rounded-[8px] uppercase text-[14px] font-semibold bg-transparent text-white">Shop Now</button>
                    </div>
                </div>
                <div data-aos='fade-left' className="bg-[url(https://i.imgur.com/rZGKLpF.jpeg)] bg-cover rounded-[10px] cardd bg-no-repeat bg-right w-full h-[290px]">
                    <div className="bg-gradient-to-r h-full from-[#0304037A] via-[#0304037A] rounded-[10px] to-[#03040300] flex flex-col justify-center pl-8 gap-y-6">
                        <h4 className="text-[32px] font-medium leading-[42px] w-72">Crunch Time! Special Deals on Chicken Fry!</h4>
                        <button className="btn w-[140px] h-[48px] border-white border-2 hover:bg-white hover:text-[#FE6A3A] tra rounded-[8px] uppercase text-[14px] font-semibold bg-transparent text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    padding: PropTypes.bool
}
export default Card;