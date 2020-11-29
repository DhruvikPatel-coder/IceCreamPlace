import React from "react";
import StoryTitle from "../Containers/StoryTitle";
import StoryContent from "../Containers/StoryContent";

export default function StoryComponent({title, title2, subtitle1, subtitle2, para1, para2}) {
    return (
        <div className="container-fluid" style={{backgroundColor: "#FEFEFE", height: "400px"}}>
            <div className="row h-100">
                <div className="col-md-6 container-defaults my-auto d-flex justify-content-center">
                    <StoryTitle
                        title={title}
                        title2={title2}
                    />
                </div>
                <div className="col-md-1 divider my-auto"/>
                <div className="col-md-5 container-defaults my-auto d-flex justify-content-center">
                    <StoryContent
                        subtitle1={subtitle1}
                        subtitle2={subtitle2}
                        para1={para1}
                        para2={para2}
                    />
                </div>
            </div>
        </div>
    );
}