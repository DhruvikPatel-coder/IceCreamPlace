import React from "react";
import {DatePicker} from "react-nice-dates";
import {enGB} from "date-fns/locale";
import {getDay} from "date-fns";

export default function CalendarComponent({
                                              date,
                                              content,
                                              setParentContent,
                                              setParentDate
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
        <div className="container-fluid calendar-div" style={{height: "640px"}}>
            <div className="row h-100">
                <div className="col-md-6 container-defaults d-flex justify-content-center">
                    <form className="form-style">
                        <span className="my-span">Pick a date</span>
                        <DatePicker
                            date={date}
                            onDateChange={setParentDate}
                            locale={enGB}
                            modifiers={modifiers}
                            modifiersClassNames={modifiersClassNames}
                        >
                            {({inputProps, focused}) => (
                                <div className="md-form md-outline form-lg">
                                    <input
                                        value={date}
                                        style={{width: "100%"}}
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
                                    rows="5"
                                    className="md-textarea form-control"
                                />
                            <label htmlFor="myTextArea">What's in your mind...</label>
                        </div>
                    </form>
                </div>
                <div className="col-md-1 calendar-divider my-auto">
                </div>
                <div className="col-md-5 container-defaults d-flex">
                    <div className="row">
                        <div className="col-10">
                            <strong><p className="font-helvetica">Ice-creams available</p></strong>
                        </div>
                        <div className="col-10">
                            <p className="font-helvetica">Abx</p>
                            <p className="font-helvetica">Abx</p>
                            <p className="font-helvetica">Abx</p>
                            <p className="font-helvetica">Abx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}