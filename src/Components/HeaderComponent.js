import React from "react";
import LogoContainer from "../Containers/LogoContainer";


export default function HeaderComponent() {
    return (
        <div className="d-flex align-items-center header-div">
            <LogoContainer className="logo-container"/>

            <a href="/#planAhead" className="d-none d-md-block ml-auto">
                <button  className=" simple-button rounded-pill font-alegreya" style={{height: "50px", width: "150px"}}>
                    Plan ahead
                </button>
            </a>
            <a href="/#pickATheme" className="d-none d-md-block">
                <button className="inverted-button rounded-pill font-alegreya" style={{height: "50px", marginLeft: "20px", width: "150px"}}>
                    Themes
                </button>
            </a>

        </div>
    );
}