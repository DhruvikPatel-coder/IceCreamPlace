import React from "react";

export default function TitleButtonContainer({text, id}) {
    return (
        <div
            id={id}
            className="center-button rounded-pill mt-auto mx-auto d-flex justify-content-center m-0"
        >
            <p className="font-amatic">{text}</p>
        </div>
    );
}