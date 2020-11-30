import React from "react";
import {DatePicker} from "react-nice-dates";
import {enGB} from "date-fns/locale";
import {getDay} from "date-fns";
import TitleButtonContainer from "../Containers/TitleButtonContainer";

export default function CalendarComponent({
                                              date,
                                              content,
                                              setParentContent,
                                              setDate,
                                              availableThemes
                                          }) {
    const modifiers = {
        highlight: date => getDay(date) === 0 // Highlights Sundays
    }

    const modifiersClassNames = {
        highlight: '-highlight'
    }

    function getValue(e) {
        return e.nativeEvent.target.value;
    }

    return (
        <div className="container-fluid calendar-div"
             style={{
                 paddingBottom: "50px"
             }}
        >
            <TitleButtonContainer
                text={"plan ahead"}
                id={"planAhead"}
            />
            <div className="row h-100 container-defaults">
                <div className="col-md-6 d-flex small-screen-defaults">
                    <form className="form-style">
                        <span className="my-span">Pick a date</span>
                        <DatePicker
                            date={date}
                            onDateChange={(val) =>setDate(val)}
                            locale={enGB}
                            modifiers={modifiers}
                            modifiersClassNames={modifiersClassNames}
                        >
                            {({inputProps, focused}) => (
                                <div className="md-form md-outline form-lg">
                                    <input
                                        value={date}
                                        style={{width: "100%", border: "1px solid #c9bcb3", minHeight: "60px"}}
                                        className={'input' + (focused ? ' -focused' : '') + " form-control form-control-lg"}
                                        {...inputProps}
                                        placeholder=""
                                    />
                                    <label htmlFor="form-lg">DD/MM/YYYY</label>
                                </div>
                            )}
                        </DatePicker>
                        <span className="my-span">Make a note</span>
                        <div className="md-form md-outline">
                            <textarea
                                onChange={e => setParentContent(getValue(e))}
                                value={content}
                                name="myTextArea"
                                id="myTextArea"
                                spellCheck="true"
                                rows="4"
                                className="md-textarea form-control"
                                style={{width: "100%", border: "1px solid #c9bcb3"}}
                            />
                            <label htmlFor="myTextArea">What's in your mind...</label>
                        </div>
                    </form>
                </div>
                <div className="col-md-1 calendar-divider my-auto d-none d-md-block">
                </div>
                <div className="col-md-5 container-defaults d-flex flex-column justify-content-start align-items-between">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="col-10 text-center">
                            <span className="my-span text-center">Ice-creams available</span>
                        </div>
                        <div className="col-10 mt-3">
                            <div className="list-group">
                                {availableThemes.map(x => {
                                    return (
                                        <a className="list-group-item list-group-item-action font-helvetica text-center mb-1" key={x.name} href={`#${x.name}`}>
                                           <h3>
                                               {x.name}
                                           </h3>
                                        </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="snackbar"/>
        </div>
    );
}