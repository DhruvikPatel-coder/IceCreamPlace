import React from "react";
import HeaderComponent from "./HeaderComponent";
import StoryComponent from "./StoryComponent";
import ThemeComponent from "./ThemeComponent";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";

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
            <HeaderComponent/>
            <div className="parallax d-flex"/>
            <StoryComponent
                title={"New forms of"}
                title2={"Pure Happiness"}
                subtitle1={"We are proud of all our products..."}
                subtitle2={"We think you’ll love them!"}
                para1={"... and super excited to add new ones to the family! Only here for a limited period of time, " +
                "capture them in your memories!"}
                para2={"Our ice cream experts can’t wait to hear about your experience!"}
                story_title={"specials"}
            />
            <CalendarComponent
                date={date}
                content={content}
                setDate={(val) => setParentDate(val)}
                setParentContent={(val) => setContent(val)}
                availableThemes={availableThemes}
            />
            <ThemeComponent
                date={date}
                content={content}
                selectedIndex={selectedIndex}
                setSelectedIndex={(index) => setSelectedIndex(index)}
                all_themes={all_themes}
            />
            {/*<StoryComponent*/}
            {/*    title={"What's for you"}*/}
            {/*    title2={"in this visit?"}*/}
            {/*    subtitle1={"We dont want to confuse you..."}*/}
            {/*    subtitle2={"Choose your days of visit wisely..."}*/}
            {/*    para1={"... in choosing from thousands of products we can offer. Select from " +*/}
            {/*    "our dynamic list of new flavors."}*/}
            {/*    para2={"... or just visit everyday! New flavors await you. Select your dates of " +*/}
            {/*    "visit to know what’s in the store for you that day!"}*/}
            {/*    story_title="plan"*/}
            {/*/>*/}
            <FooterComponent/>
        </div>
    );
}