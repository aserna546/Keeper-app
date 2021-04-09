import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const defaultNote = {
  title: "",
  content: "",
};
function CreateArea({ onAdd }) {
  const [note, setNote] = useState(defaultNote);
  const [isExpanded, setIsExpanded] = useState(false);

  function addNote(event) {
    onAdd(note);
    setNote(defaultNote);
    event.preventDefault();
  }

  const changeNote = (event) => {
    //name can either be title or content and value is the string.
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };
  return (
    <div>
      <form className="create-note" onSubmit={addNote}>
        {isExpanded && (
          <input
            value={note.title}
            onChange={changeNote}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={() => setIsExpanded(true)}
          value={note.content}
          onChange={changeNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
