import React from "react";
import {Link} from "react-router-dom";
import {format} from "date-fns";
import {enGB} from "date-fns/locale";

// This component is responsible of showing the preview of output based on the theme selected.
export default function PreviewComponent({
                                             date,
                                             content,
                                             selectedTheme,
                                             setParentDate,
                                             setParentContent
                                        }) {
    // Clears the input fields back button is pressed
    function clearChoice(){
        setParentContent("");
        setParentDate();
    }

    return (
        <div className="container-fluid calendar-div d-flex flex-column align-items-center justify-content-center"
             style={{
                height: "540px",
                 backgroundColor: selectedTheme.color,
                 color: selectedTheme.colorSecondary
        }}>
            <div className="row h-100 d-flex flex-row align-items-center justify-content-center w-100">
                <div className="col-md-6 container-defaults d-flex justify-content-center">
                    <form className="form-style">
                        <span
                            className="my-span"
                            style={{
                                color: selectedTheme.colorSecondary
                            }}>Your date</span>
                        <h1>{date && format(date, 'dd MMM yyyy', {locale: enGB})}</h1>
                        <span
                            className="my-span"
                            style={{
                                color: selectedTheme.colorSecondary
                            }}>Note before you visit</span>
                        <h1>{content}</h1>
                    </form>
                </div>
                <div className="col-md-1 calendar-divider h-100 d-none d-md-block">
                </div>
                <div className="col-md-5 container-defaults d-flex">
                    <div className="row">
                        <div className="col-12">
                            <h1 style={{
                                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                                fontWeight: "bolder"
                            }}>Selected Theme:</h1>
                            <h1>{selectedTheme.name}</h1>
                        </div>

                    </div>
                </div>
                <div className="mx-auto">
                    <Link to="/IceCreamPlace">
                        <button
                            className="black-button rounded-pill font-alegreya"
                            style={{
                                height: "50px",
                                minWidth: "150px"
                            }}
                            onClick={() => clearChoice()}
                        >
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}