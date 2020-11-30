import React from "react";

// Displays the tile which is on the left side of story component
export default function StoryTitle({title}) {
    return (
        <div className="form-style my-auto">
            <p className="left-div-title">{title}</p>
        </div>
    );
}