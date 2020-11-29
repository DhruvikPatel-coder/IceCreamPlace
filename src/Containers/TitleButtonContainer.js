import React from "react";

export default function TitleButtonContainer({text}) {
    return (
        <div className="center-button rounded-pill mt-auto mx-auto d-flex justify-content-center">
            <p className="font-amatic">{text}</p>
        </div>
    );
}