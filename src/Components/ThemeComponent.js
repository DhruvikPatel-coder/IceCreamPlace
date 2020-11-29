import React from "react";
import TitleButtonContainer from "../Containers/TitleButtonContainer";
import ThemeSelectorContainer from "../Containers/ThemeSelectorContainer";

export default function ThemeComponent({
                                           button_text,
                                           theme,
                                           setParentTheme
}) {
    return (
        <div className="container-fluid theme-div">
            <div className="row d-flex justify-content-around">
                <ThemeSelectorContainer
                    theme="choco brownie"
                    availability="september-december"
                    theme_color="#6b3e26"
                    theme_color_2="#6b3e26"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
                <ThemeSelectorContainer
                    theme="cherry chocolate"
                    availability="january-may"
                    theme_color="#DE3163"
                    theme_color_2="#DE3163"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
                <ThemeSelectorContainer
                    theme="Red velvet"
                    availability="april-june"
                    theme_color="#9c0000"
                    theme_color_2="#9c0000"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
            </div>
            <div className="row d-flex justify-content-around" style={{marginTop: "80px"}}>
                <ThemeSelectorContainer
                    theme="berry vanilla"
                    availability="october-february"
                    theme_color="#ffc5d9"
                    theme_color_2="#ffc5d9"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
                <ThemeSelectorContainer
                    theme="moe matcha"
                    availability="december-august"
                    theme_color="#c2f2d0"
                    theme_color_2="#c2f2d0"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
                <ThemeSelectorContainer
                    theme="mango nello"
                    availability="february-july"
                    theme_color="#ffcb85"
                    theme_color_2="#ffcb85"
                    selected_theme={theme}
                    setParentTheme={setParentTheme}
                />
            </div>
            <div className="d-flex" style={{marginTop: "80px"}}>
                <TitleButtonContainer text={button_text}/>
            </div>
        </div>
    );
}