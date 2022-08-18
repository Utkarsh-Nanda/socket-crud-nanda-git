import {loadNotes, onNewNote, onSelected} from './socket.js';
import {onHandleSubmit, renderNotes, appendNote, fillform} from './ui.js'

onNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillform)

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit); 
