import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";

const CreateArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    };

    const expand = () => {
        setExpanded(true);
    };

    return (
        <Fade in={true}>
            <div>
                <form className="create-note">
                    <input
                        name="title"
                        onClick={expand}
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                        required
                    />

                    {isExpanded && (
                        <Zoom in={true}>
                            <textarea
                                name="content"
                                onChange={handleChange}
                                value={note.content}
                                placeholder="Add a note..."
                                rows={isExpanded ? 3 : 1}
                            />
                        </Zoom>
                    )}
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </Fade>
    );
};

export default CreateArea;
