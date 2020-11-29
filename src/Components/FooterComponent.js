import React from "react";
import LogoContainer from "../Containers/LogoContainer";
import HeartContainer from "../Containers/HeartContainer";
import GitContainer from "../Containers/GitContainer";

export default function FooterComponent() {
    return (
        <div className="d-flex align-items-center footer-div justify-content-center">
            <div className="footer-content">
                <h2>Developed with </h2>
            </div>
            <HeartContainer/>
            <div className="footer-content" style={{paddingRight: "0px"}}>
                <h2>Developed for</h2>
            </div>
            <LogoContainer/>
            <div className="footer-content">
                <h2>By</h2>
            </div>
            <GitContainer/>
        </div>
    );
}