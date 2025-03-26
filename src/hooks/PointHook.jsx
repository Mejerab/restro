import PropTypes from 'prop-types';
const PointHook = ({text, white, green}) => {
    return (
        <div data-aos='fade-up' className="text-center" >
            <h4 className={`${white?'text-white':green?'w-[56rem] mx-auto':'text-[#201F1B]'} font font-medium text-[54px] leading-[60px]`}>{text}</h4>
            <svg className="mx-auto -mt-2" width="70" height="40" viewBox="5 0 80 40">
                <path className={`${white?'wavee':green?'green-wave':'wave'}`} fill="none" strokeWidth="4" strokeLinecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
            </svg>
        </div>
    );
};

PointHook.propTypes = {
    text: PropTypes.string,
    white: PropTypes.bool,
    green: PropTypes.bool,
}
export default PointHook;