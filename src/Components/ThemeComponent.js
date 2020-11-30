import React from "react";
import ThemeIcon from "../Containers/ThemeIcon";
import TitleButtonContainer from "../Containers/TitleButtonContainer";
import {Link} from "react-router-dom";

export default function ThemeComponent({
                                           selectedIndex,
                                           setSelectedIndex,
                                           all_themes,
                                           date,
                                           content
                                       }) {
    function getCurrentTheme(){
        return all_themes[selectedIndex];
    }

    function handleClick(e) {
        if (date === undefined) {
            e.preventDefault();
            showMessage("Please select a date");
        } else if (content === undefined) {
            e.preventDefault();
            showMessage("You are required to put in content");
        }
    }

    function showMessage(text) {
        let message = document.getElementById("snackbar");
        message.innerHTML = text;
        message.className = "show";
        setTimeout(function () {
            message.className = message.className.replace("show", "");
        }, 3000);
    }

    return (
        <div className="container-fluid theme-div p-0">
            <TitleButtonContainer
                text={"pick a theme"}
                style={{zIndex: 9999}}
                id={"pickATheme"}
            />
            <div
                className="row p-5"
                style={{
                    backgroundColor: getCurrentTheme().color,
                    color: getCurrentTheme().colorSecondary,
                    transition: "0.3s ease-in-out",
                    marginTop: "-75px",
                    marginRight: "0"
                }}
            >
                {all_themes.map(
                    x => (
                        <ThemeIcon
                            key={x.index}
                            theme={x}
                            setSelectedIndex={(index) => setSelectedIndex(index)}
                            selectedIndex={selectedIndex}
                        />
                    )
                )}
                <div className=" d-flex flex-row justify-content-center align-items-center mx-auto mt-5">
                    <Link to="/IceCreamPlace/output">
                        <button
                            className="black-button rounded-pill font-alegreya"
                            style={{maxHeight: "60px"}} onClick={(e) => handleClick(e)}>
                            Show Preview
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}