import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from './notesReducer';
import { addNote } from "./action";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={ onAddNote }/>
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
