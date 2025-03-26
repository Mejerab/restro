import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
    useEffect(()=>{
        AOS.init({
            // delay: 200,
            duration: 700,
            once: true,
            easing: 'ease-in-out-cubic'
        })
    }, [])
    return (
        <div className="font overflow-hidden">
            <Outlet />
        </div>
    );
};

export default Main;