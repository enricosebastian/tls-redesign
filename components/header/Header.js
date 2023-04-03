import React, { useEffect, useState } from "react";

import HeaderFull from "./HeaderFull";
import HeaderMobile from "./HeaderMobile";

export default function Header() {

    const [windowWidth, setWindowWidth] = useState(0);

    const handlingWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //Single-responsibility useEffects
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handlingWindowResize);
    },[]);

    if(windowWidth < 800) {
        return <HeaderMobile/>;
    } else {
        return <HeaderFull/>;
    }
}