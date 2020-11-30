import React from "react";
import LogoContainer from "../Containers/LogoContainer";
import HeartContainer from "../Containers/HeartContainer";
import GitContainer from "../Containers/GitContainer";

export default function FooterComponent() {
    return (
        <div className="d-flex align-items-center footer-div justify-content-around"
            style={{fontSize: "4vmin"}}
        >
            <div className="footer-content">
                <div style={{
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                    fontWeight: "300"
                }}>Developed with </div>
            </div>
            <HeartContainer

                height={60}
                width={60}
            />
            <div className="footer-content">
                <div style={{
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",

                    // width: "100%",
                    fontWeight: "300"
                }}>for </div>
            </div>
            <div className="logo-container">
                <LogoContainer/>
            </div>
            <div className="footer-content">
                <div style={{
                    fontFamily: "'Helvetica Neue', Arial, sans-serif",

                    // width: "100%",
                    fontWeight: "300"
                }}>by </div>
            </div>
            <GitContainer
                url={"https://www.github.com/dhruvikpatel-coder/IceCreamPlace"}
                height={60}
                width={60}
            />
            <div className="footer-content">
                <a
                    href="https://www.github.com/dhruvikpatel-coder/IceCreamPlace"
                >
                    <div style={{
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        color: "black",
                        // width: "100%",
                        fontWeight: "300"
                    }}>@dhruvikpatel-coder </div>
                </a>
            </div>
        </div>
    );
}