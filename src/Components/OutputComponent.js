import React from "react";
import StoryComponent from "./StoryComponent";
import FooterComponent from "./FooterComponent";
import PreviewComponent from "./PreviewComponent";
import OutputHeaderComponent from "./OutputHeaderComponent";
import {Redirect} from "react-router-dom";

// This component renders the output page which is responsible for presenting the output according to theme selected
export default function OutputComponent(props) {
    if (props.content === undefined) {
        return <Redirect to={"/MyReminder"} />
    }

    return (
        <div>
            {/*Calls header component*/}
            <OutputHeaderComponent/>
            {/*Calls story component*/}
            <StoryComponent
                title={"New forms of Pure Happiness"}
                subtitle1={"We are proud of all our products..."}
                subtitle2={"We think you’ll love them!"}
                para1={"... and super excited to add new ones to the family! Only here for a limited period of time, " +
                "capture them in your memories!"}
                para2={"Our ice cream experts can’t wait to hear about your experience!"}
                story_title={"specials"}
            />
            {/*Calls preview component*/}
            <PreviewComponent
                date={props.date}
                content={props.content}
                setParentDate={props.setParentDate}
                setParentContent={props.setParentContent}
                selectedTheme={props.selectedTheme}
            />
            {/*Calls footer component*/}
            <FooterComponent />
        </div>
    );
}