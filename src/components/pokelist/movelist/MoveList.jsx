import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./MoveList.css";

export default props => {
    const { prev, next } = props
    return (
        <div className="move">
            <div onClick={prev} className="move--left">
                <NavigateBeforeIcon style={{ fontSize: 30 }} />
            </div>
            <div onClick={next} className="move--right">
                <NavigateNextIcon style={{ fontSize: 30 }} />
            </div>
        </div>
    );
};
