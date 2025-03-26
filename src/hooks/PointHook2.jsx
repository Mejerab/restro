import PropTypes from 'prop-types';

const PointHook2 = ({head, text, center, yellow}) => {
    return (
        <div data-aos={center?'fade-up':'fade-right'}>
            <div className={`flex items-center gap-x-2 ${center&&'justify-center'}`}>
                <div className={`${yellow?'bg-[#FFE149]':'bg-[#0E7258]'} w-[50px] h-[1px]`}></div>
                <h5 className={`${yellow?'text-[#FFE149]':'text-[#0E7258]'} font-semibold text-[14px] uppercase`}>{head}</h5>
            </div>
            <h4 className={`font-medium text-[48px] max-w-[565px] ${center&&'mx-auto'} leading-[58px] ${yellow?'text-white':'text-[#201F1B]'}`}>{text}</h4>
        </div>
    );
};

PointHook2.propTypes = {
    head: PropTypes.string,
    text: PropTypes.string,
    center: PropTypes.bool,
    yellow: PropTypes.bool,
}
export default PointHook2;