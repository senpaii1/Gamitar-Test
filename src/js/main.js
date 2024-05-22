document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var saveApplication = function () {
    localStorage.setItem(
      "app",
      document.querySelector(".main-content").innerHTML
    );
  };

  var getApplication = function () {
    return localStorage.getItem("app");
  };

  (function () {
    if (getApplication()) {
      document.querySelector(".main-content").innerHTML = getApplication();
    }
  })();

  var boxs = document.querySelectorAll(".box"),
    trash = document.querySelector(".trash"),
    newNote = document.querySelector(".create-new");

  boxs.forEach(function (box) {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.classList.add("drop-here");
    });

    box.addEventListener("dragleave", function () {
      this.classList.remove("drop-here");
    });

    box.addEventListener("drop", function (e) {
      var cardId = e.dataTransfer.getData("text/plain");
      var card = document.getElementById(cardId);
      this.appendChild(card);
      e.preventDefault();
      saveApplication();
    });
  });

  trash.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.classList.add("active");
  });

  trash.addEventListener("dragleave", function () {
    this.classList.remove("active");
  });

  trash.addEventListener("drop", function (e) {
    var cardId = e.dataTransfer.getData("text/plain");
    if (confirm("Want to delete this note?")) {
      document.getElementById(cardId).remove();
      saveApplication();
    }
    e.preventDefault();
  });

  trash.addEventListener("click", function () {
    if (confirm("Want to clear?")) {
      localStorage.clear();
      document.querySelectorAll(".post-it").forEach(function (note) {
        note.remove();
      });
    }
  });

  newNote.addEventListener("click", function () {
    showModal();
  });

  function showModal(noteId) {
    var noteTitle = "";
    var noteDescription = "";
    var noteEndDate = "";
    var notePriority = "";

    if (noteId) {
      var note = document.getElementById(noteId);
      noteTitle = note.querySelector(".note-title").innerText;
      noteDescription = note.querySelector(".note-description").innerText;
      noteEndDate = note
        .querySelector(".note-enddate")
        .innerText.replace("End Date: ", "");
      notePriority = note
        .querySelector(".note-priority")
        .innerText.replace("Priority: ", "");
    }

    var modalHTML = `
              <div class="modal" tabindex="-1" style="display: block;">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">${
                                noteId ? "Edit Note" : "New Note"
                              }</h5>
                              <button type="button" class="close" aria-label="Close" onclick="closeModal()">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              <input type="text" id="noteTitle" class="form-control" placeholder="Title" value="${noteTitle}">
                              <textarea id="noteDescription" class="form-control" placeholder="Description">${noteDescription}</textarea>
                              <label for="noteEndDate">End Date:</label>
    <input type="date" id="noteEndDate" class="form-control" value="${
      noteEndDate || ""
    }">
    <label for="notePriority">Priority:</label>
                              <select id="notePriority" class="form-control">
                                  <option value="low" ${
                                    notePriority === "low" ? "selected" : ""
                                  }>Low</option>
                                  <option value="medium" ${
                                    notePriority === "medium" ? "selected" : ""
                                  }>Medium</option>
                                  <option value="high" ${
                                    notePriority === "high" ? "selected" : ""
                                  }>High</option>
                              </select>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
                              <button type="button" class="btn btn-primary" id="saveNoteButton">${
                                noteId ? "Update" : "Save"
                              }</button>
                          </div>
                      </div>
                  </div>
              </div>
          `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    document
      .getElementById("saveNoteButton")
      .addEventListener("click", function () {
        saveNewNote(noteId);
      });
  }

  window.closeModal = function () {
    var modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
    }
  };

  function saveNewNote(noteId) {
    var noteTitle = document.getElementById("noteTitle").value;
    var noteDescription = document.getElementById("noteDescription").value;
    var noteEndDate = document.getElementById("noteEndDate").value;
    var notePriority = document.getElementById("notePriority").value;

    if (noteTitle && noteDescription && noteEndDate && notePriority) {
      var thisNote;

      if (noteId) {
        thisNote = document.getElementById(noteId);
        thisNote.innerHTML = `
                      <p class="note-title" title="Click to edit" contenteditable="false">${noteTitle}</p>
                      <p class="note-description">${noteDescription}</p>
                      <p class="note-enddate">End Date: ${noteEndDate}</p>
                      <p class="note-priority">Priority: ${notePriority}</p>
                      <button onclick="editNote('${noteId}')" class="btn btn-info">Edit</button>
                  `;
      } else {
        var noteId =
          "card-" + (document.querySelectorAll(".post-it").length + 1);
        thisNote = document.createElement("div");
        thisNote.id = noteId;
        thisNote.className = "post-it";
        thisNote.draggable = true;
        thisNote.innerHTML = `
                      <p class="note-title" title="Click to edit" contenteditable="true">${noteTitle}</p>
                      <p class="note-description">${noteDescription}</p>
                      <p class="note-enddate">End Date: ${noteEndDate}</p>
                      <p class="note-priority">Priority: ${notePriority}</p>
                      <button onclick="editNote('${noteId}')" class="btn btn-info">Edit</button>
                  `;

        thisNote.addEventListener("dragstart", noteDragStart);
        thisNote.addEventListener("dragend", noteDragEnd);
        thisNote.addEventListener("keyup", noteChange);

        boxs[0].prepend(thisNote);
      }

      saveApplication();
      closeModal();
    }
  }

  window.editNote = function (noteId) {
    showModal(noteId);
  };

  function noteDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    trash.style.opacity = 0.5;
  }

  function noteDragEnd() {
    boxs.forEach(function (box) {
      box.classList.remove("drop-here");
    });
    trash.style.opacity = 0.2;
    trash.classList.remove("active");
    saveApplication();
  }

  function noteChange() {
    saveApplication();
  }

  document.querySelectorAll(".post-it").forEach(function (note) {
    note.addEventListener("dragstart", noteDragStart);
    note.addEventListener("dragend", noteDragEnd);
    note.addEventListener("keyup", noteChange);
  });

  // Function to show filter modal
  window.showFilterModal = function () {
    var filterModalHTML = `
        <div class="modal" tabindex="-1" style="display: block;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Filter Notes</h5>
                        <button type="button" class="close" aria-label="Close" onclick="closeModal()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <select id="filterPriority" class="form-control">
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <input type="date" id="filterEndDate" class="form-control" placeholder="End Date">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
                        <button type="button" class="btn btn-primary" onclick="applyFilter()">Apply Filter</button>
                    </div>
                </div>
            </div>
        </div>
      `;
    document.body.insertAdjacentHTML("beforeend", filterModalHTML);
  };

  // Function to apply filter
  window.applyFilter = function () {
    var filterPriority = document.getElementById("filterPriority").value;
    var filterEndDate = document.getElementById("filterEndDate").value;
    var notes = document.querySelectorAll(".post-it");

    notes.forEach(function (note) {
      var notePriority = note
        .querySelector(".note-priority")
        .innerText.replace("Priority: ", "");
      var noteEndDate = note
        .querySelector(".note-enddate")
        .innerText.replace("End Date: ", "");

      var priorityMatch = filterPriority
        ? notePriority === filterPriority
        : true;
      var endDateMatch = filterEndDate ? noteEndDate === filterEndDate : true;

      if (priorityMatch && endDateMatch) {
        note.style.display = "";
      } else {
        note.style.display = "none";
      }
    });

    closeModal();
  };
});
