import React, {useState} from "react";
import './App.css';
import './snackbar.css';
import Redirect, {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import InputComponent from "./Components/InputComponent";
import OutputComponent from "./Components/OutputComponent";
import 'react-nice-dates/build/style.css';

class Theme {
    name;
    availability;
    color;
    colorSecondary;
    index;

    constructor(_obj) {
        this.name = _obj.name || "";
        this.availability = _obj.availability || {start: (new Date()).toString(), end: "01-01-9999"};
        this.color = _obj.color || "#FFFFFF";
        this.index = _obj.index || 0;
        this.colorSecondary = _obj.colorSecondary || "#484848";
    }
}

function filterValidDates(themes, date) {
    return themes.filter(x => {
        let startDate = new Date(x.availability.start);
        let endDate = new Date(x.availability.end);
        let dateDate = new Date(date);
        return dateDate && (startDate <= dateDate && dateDate <= endDate);
    })
}

function App() {
    let [date, setDate] = useState(new Date());
    let [content, setContent] = useState();
    let [currentIndex, setCurrentIndex] = useState(0);

    let all_themes = [
        new Theme(
            {
                name: "Vanilla",
                availability: {
                    start: "01-01-2020",
                    end: "12-31-2020"
                },
                color: "#FFFFFF",
                colorSecondary: "#484848",
                index: 0
            }),
        new Theme(
            {
                name: "Romantic Rose",
                availability: {
                    start: "01-01-2020",
                    end: "06-02-2020"
                },
                color: "#FB3F26",
                colorSecondary: "#fefefe",
                index: 1
            }),
        new Theme(
            {
                name: "Cherry Chocolate",
                availability: {
                    start: "02-14-2020",
                    end: "12-16-2020"
                },
                color: "#DE3163",
                colorSecondary: "#fefefe",
                index: 2
            }),
        new Theme(
            {
                name: "Red Velvet",
                availability: {
                    start: "12-15-2020",
                    end: "02-02-2020"
                },
                color: "#9C0000",
                colorSecondary: "#fefefe",
                index: 3
            }),
        new Theme(
            {
                name: "Berry Vanilla",
                availability: {
                    start: "02-24-2020",
                    end: "07-09-2020"
                },
                color: "#C2F2D0",
                index: 4
            }),
        new Theme(
            {
                name: "Moe Matcha",
                availability: {
                    start: "06-10-2020",
                    end: "01-10-2020"
                },
                color: "#FFCB85",
                index: 5
            }),
        new Theme(
            {
                name: "Mint Oreo",
                availability: {
                    start: "12-15-2020",
                    end: "01-10-2021"
                },
                color: "#27F2D9",
                colorSecondary: "#fefefe",
                index: 6
            }),
        new Theme(
            {
                name: "Tiger Orange",
                availability: {
                    start: "12-15-2020",
                    end: "02-02-2020"
                },
                color: "#FD6A02",
                colorSecondary: "#fefefe",
                index: 7
            }),
        new Theme(
            {
                name: "Cookie Dough",
                availability: {
                    start: "03-18-2020",
                    end: "05-20-2020"
                },
                color: "#BD8C61",
                colorSecondary: "#fefefe",
                index: 8
            })
    ]

    function getSelectedTheme() {
        return all_themes[currentIndex];
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/IceCreamPlace">
                    <InputComponent
                        selectedIndex={currentIndex}
                        setSelectedIndex={(index) => setCurrentIndex(index)}
                        date={date}
                        content={content}
                        setParentDate={(val) => setDate(val)}
                        setContent={(val)=> setContent(val)}
                        all_themes={all_themes}
                        availableThemes={filterValidDates(all_themes, date)}
                    />
                </Route>
                <Route exact path="/IceCreamPlace/output">
                    <OutputComponent
                        selectedTheme={getSelectedTheme()}
                        date={date}
                        content={content}
                        setParentDate={(val) =>setDate(val)}
                        setParentContent={(val) =>setContent(val)}
                        setSelectedIndex={(val) =>setCurrentIndex(val)}
                    />
                </Route>
                <Route path="*">
                    <Redirect to="/IceCreamPlace" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
