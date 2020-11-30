import React from "react";

// Displays the title "div" of the respective parent container
export default function TitleDivContainer({text, id}) {
    return (
        <div
            id={id}
            className="center-button rounded-pill mt-auto mx-auto d-flex justify-content-center m-0"
        >
            <p className="font-amatic">{text}</p>
        </div>
    );
}