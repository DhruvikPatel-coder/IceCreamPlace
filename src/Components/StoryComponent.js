import React from "react";
import StoryTitle from "../Containers/StoryTitle";
import StoryContent from "../Containers/StoryContent";
import TitleDivContainer from "../Containers/TitleDivContainer";

// This component is responsible for rendering "divs" that tells a descriptive story of what purpose this website serves
export default function StoryComponent({
                                           story_title,
                                           title,
                                           subtitle1,
                                           subtitle2,
                                           para1,
                                           para2
}) {
    return (
        <div
            className="container-fluid"
            style={{
                backgroundColor: "#FEFEFE",
                minHeight: "400px"}}>
            <TitleDivContainer text={story_title}/>
            <div className="row h-100 story-title-container">
                <div className="col-md-6 d-flex" style={{paddingLeft: "5px"}}>
                    <StoryTitle
                        title={title}
                    />
                </div>
                <div className="col-md-1 divider my-auto d-none d-md-block"/>
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