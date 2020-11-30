import React from "react";

// Container responsible of rendering the content passed to it
export default function StoryContent({subtitle1, subtitle2, para1, para2}) {
    return (
        <div className="row">
            <div className="col-12">
                <strong><p className="font-helvetica">{subtitle1}</p></strong>
            </div>
            <div className="col-12">
                <p className="font-helvetica">{para1}</p>
            </div>
            <div className="col-12" style={{marginTop: "20px"}}>
                <strong><p className="font-helvetica">{subtitle2}</p></strong>
            </div>
            <div className="col-12">
                <p className="font-helvetica">{para2}</p>
            </div>
        </div>
    );
}