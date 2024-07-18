import { taskDom, projectDOM, showAndCloseModal, closeModal } from "./dom";
import { createProject, projectLibrary } from "./project";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  showAndCloseModal();
});

const addProjectButton = document.querySelector(".confirm-submission");

addProjectButton.addEventListener("click", (event) => {
  const form = document.querySelector("#project-form");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  event.preventDefault();

  const projectName = document.querySelector("#title").value;
  const project = createProject(projectName);
  projectDOM(projectName, project.numTask);
  closeModal();
});
