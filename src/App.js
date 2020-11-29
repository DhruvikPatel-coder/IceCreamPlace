import React, {useState} from "react";
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import TitleButtonContainer from "./Containers/TitleButtonContainer";
import StoryComponent from "./Components/StoryComponent";
import ThemeComponent from "./Components/ThemeComponent";
import CalendarComponent from "./Components/CalendarComponent";
import FooterComponent from "./Components/FooterComponent";
import 'react-nice-dates/build/style.css';

function App() {
    let [date, setDate] = useState();
    let [content, setContent] = useState();
    let [theme, setTheme] = useState("choco brownie");

    return (
        <div>
            <HeaderComponent/>
            <div className="parallax d-flex">
                <TitleButtonContainer text={"SPECIALS"}/>
            </div>
            <StoryComponent
                title={"New forms of"}
                title2={"Pure Happiness"}
                subtitle1={"We are proud of all our products..."}
                subtitle2={"We think you’ll love them!"}
                para1={"... and super excited to add new ones to the family! Only here for a limited period of time, " +
                "capture them in your memories!"}
                para2={"Our ice cream experts can’t wait to hear about your experience!"}
            />
            <ThemeComponent
                theme={theme}
                setParentTheme={setTheme}
                button_text={"PLAN"}
            />
            <StoryComponent
                title={"What's for you"}
                title2={"in this visit?"}
                subtitle1={"We dont want to confuse you..."}
                subtitle2={"Choose your days of visit wisely..."}
                para1={"... in choosing from thousands of products we can offer. Select from " +
                "our dynamic list of new flavors."}
                para2={"... or just visit everyday! New flavors await you. Select your dates of " +
                "visit to know what’s in the store for you that day!"}
            />
            <CalendarComponent
                date={date}
                content={content}
                setParentDate={setDate}
                setParentContent={setContent}
            />
            <FooterComponent />
        </div>
    );
}

export default App;
