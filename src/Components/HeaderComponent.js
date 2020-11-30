import React from "react";
import LogoContainer from "../Containers/LogoContainer";

// Component responsible for rendering header component
export default function HeaderComponent() {
    return (
        <div className="align-items-center header-div logo-padding">
            <LogoContainer/>
            <a href="/IceCreamPlace/#planAhead" className="d-none d-md-block ml-auto">
                <button  className=" simple-button rounded-pill font-alegreya" style={{height: "50px", width: "150px"}}>
                    Plan ahead
                </button>
            </a>
            <a href="/IceCreamPlace/#pickATheme" className="d-none d-md-block">
                <button className="inverted-button rounded-pill font-alegreya" style={{height: "50px", marginLeft: "20px", width: "150px"}}>
                    Themes
                </button>
            </a>
        </div>
    );
}