import React from "react";

const Photo = (props) => {
    return (
        <li>
            <img src={props.src}></img>
        </li>
    )
}

export default Photo