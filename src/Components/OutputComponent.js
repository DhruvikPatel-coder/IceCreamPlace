import React from "react";
import HeaderComponent from "./HeaderComponent";
import StoryComponent from "./StoryComponent";
import FooterComponent from "./FooterComponent";
import PreviewComponent from "./PreviewComponent";

export default function OutputComponent(props) {
    return (
        <div>
            <HeaderComponent/>
            <StoryComponent
                title={"New forms of Pure Happiness"}
                subtitle1={"We are proud of all our products..."}
                subtitle2={"We think you’ll love them!"}
                para1={"... and super excited to add new ones to the family! Only here for a limited period of time, " +
                "capture them in your memories!"}
                para2={"Our ice cream experts can’t wait to hear about your experience!"}
                story_title={"specials"}
            />

            <PreviewComponent
                date={props.date}
                content={props.content}
                setParentDate={props.setParentDate}
                setParentContent={props.setParentContent}
                setSelectedIndex={props.setSelectedIndex}
                selectedTheme={props.selectedTheme}
            />
            <FooterComponent />
        </div>
    );
}