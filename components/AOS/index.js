import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = ({ children }) => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return <>{children}</>;
};

export default Container;