import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";

const Note = (props) => {
    const handleClick = () => {
        props.onDelete(props.id);
    };

    return (
        <Zoom in={true}>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={handleClick}>
                    <DeleteIcon />
                </button>
            </div>
        </Zoom>
    );
};

export default Note;
