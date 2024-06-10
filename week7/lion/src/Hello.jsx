import React from "react";

const Hello = (props) => {

    return (
        <h1>
            안녕, {props.user}
        </h1>
    );
};

export default Hello;