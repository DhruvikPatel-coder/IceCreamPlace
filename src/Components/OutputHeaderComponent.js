import React from "react";
import LogoContainer from "../Containers/LogoContainer";

// Component responsible for rendering header component
export default function OutputHeaderComponent() {
    return (
        <div className="align-items-center header-div logo-padding">
            <LogoContainer/>
        </div>
    );
}