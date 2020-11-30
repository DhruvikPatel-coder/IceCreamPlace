import React from "react";
import HeaderComponent from "./HeaderComponent";
import StoryComponent from "./StoryComponent";
import ThemeComponent from "./ThemeComponent";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";

// This component renders the input page which is basically the home page of our website
export default function InputComponent({
                                           setSelectedIndex,
                                           selectedIndex,
                                           date,
                                           content,
                                           setParentDate,
                                           setContent,
                                           all_themes,
                                           availableThemes
                                       }) {
    return (
        <div>
            {/*Calls header*/}
            <HeaderComponent/>
            {/*The image div to create parallax effect*/}
            <div className="parallax"/>
            {/*Calls Story component*/}
            <StoryComponent
                title={"New forms of Pure Happiness"}
                subtitle1={"We are proud of all our products..."}
                subtitle2={"We think you’ll love them!"}
                para1={"... and super excited to add new ones to the family! Only here for a limited period of time, " +
                "capture them in your memories!"}
                para2={"Our ice cream experts can’t wait to hear about your experience!"}
                story_title={"specials"}
            />
            {/*calls calendar component*/}
            <CalendarComponent
                date={date}
                content={content}
                setDate={(val) => setParentDate(val)}
                setParentContent={(val) => setContent(val)}
                availableThemes={availableThemes}
            />
            {/*Calls theme component*/}
            <ThemeComponent
                date={date}
                content={content}
                selectedIndex={selectedIndex}
                setSelectedIndex={(index) => setSelectedIndex(index)}
                all_themes={all_themes}
            />
            <FooterComponent/>
        </div>
    );
}