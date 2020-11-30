import React from "react";
import StoryTitle from "../Containers/StoryTitle";
import StoryContent from "../Containers/StoryContent";
import TitleButtonContainer from "../Containers/TitleButtonContainer";

export default function StoryComponent({story_title, title, title2, subtitle1, subtitle2, para1, para2}) {
    return (
        <div className="container-fluid" style={{backgroundColor: "#FEFEFE", minHeight: "400px"}}>
            <TitleButtonContainer text={story_title}/>
            <div className="row h-100" style={{paddingLeft: "50px", paddingRight: "50px", paddingBottom: "50px"}}>
                <div className="col-md-6 container-defaults my-auto d-flex justify-content-center align-item-center">
                    <StoryTitle
                        title={title}
                        title2={title2}
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