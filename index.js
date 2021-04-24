const addButton = document.querySelector("#addButton");
const todoList = document.querySelector(".toDoList");
const input = document.querySelector("#input");
let notes = [];

function addNotice() {
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes))
  input.value = "";
  location.reload();
  return false;
}

function getNotes() {

  if (JSON.parse(localStorage.getItem("notes")) !== null) {
    notes = JSON.parse(localStorage.getItem("notes"))
    for (let i = 0; i < notes.length; i++) {

      noteCreator(notes[i], i);

    }

  }
}


function noteCreator(e, i) {

  const note = document.createElement("div");

  const contentNote = document.createElement("div");

  const del = document.createElement("div");

  note.classList.add("note");

  contentNote.classList.add("contentNote");

  del.classList.add("del");

  del.addEventListener("click", () => {

    deleteNote(i);

  })

  const newContentNote = document.createTextNode(e);

  const delContentNote = document.createTextNode("X");

  contentNote.appendChild(newContentNote);

  del.appendChild(delContentNote);

  note.appendChild(contentNote);

  note.appendChild(del);

  todoList.appendChild(note);

}

const deleteNote = (i) => {

  notes.splice(i, 1);

  localStorage.setItem("notes", JSON.stringify(notes))

  location.reload();

  return false;

}

getNotes();

addButton.addEventListener("click", addNotice);
