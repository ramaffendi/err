import React from "react";
import ClassComponent from "./pembahasan/ClassComponent.jsx";
import FComponent from "./pembahasan/FComponent.jsx";

export default class Komponen extends React.Component {

    render () {
        return (
            <div>
                <ClassComponent nama={22} />
                <FComponent nama="Effendi"/>
            </div>
        )
    }
}