import React from "react";
import LogoContainer from "../Containers/LogoContainer";

export default function HeaderComponent() {
    return (
        <div className="d-flex align-items-center header-div">
            <LogoContainer />
            <button className="ml-auto simple-button rounded-pill font-alegreya" style={{height: "50px", width: "150px"}}>
                Show Flavours
            </button>
            <button className="inverted-button rounded-pill font-alegreya" style={{height: "50px", marginLeft: "20px", width: "150px"}}>
                Plan Visit
            </button>
        </div>
    );
}