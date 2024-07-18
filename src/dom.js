import defaultProjectImage from "./img/pound.svg";

const taskDom = (title, task, date, priority) => {
  // Select the todo-list-body-container
  const todoListBodyContainer = document.querySelector(
    ".todo-list-body"
  );

  // Create a new task header
  const taskHeader = document.createElement("tr");
  taskHeader.classList.add("task-title");
  const headerName = document.createElement("th");
  headerName.textContent = title;
  headerName.colSpan = 4;
  taskHeader.appendChild(headerName);

  // Append the task header to the todo-list-body-container
  todoListBodyContainer.appendChild(taskHeader);

  // Create the task description
  const taskDescription = document.createElement("tr");
  const taskName = document.createElement("td");
  const taskDate = document.createElement("td");
  const taskPriority = document.createElement("td");
  const editAndDeleteButton = document.createElement("td");
  editAndDeleteButton.classList.add("edit-delete-button-container");
  // Add text content to the elements
  taskName.textContent = task;
  taskDate.textContent = date;
  taskPriority.textContent = priority;
  // Create the edit and delete buttons and append to editAndDeleteButton
  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
  editAndDeleteButton.appendChild(editButton);
  editAndDeleteButton.appendChild(deleteButton);
  // Append the elements to the taskDescription
  taskDescription.appendChild(taskName);
  taskDescription.appendChild(taskDate);
  taskDescription.appendChild(taskPriority);
  taskDescription.appendChild(editAndDeleteButton);

  // Append the taskDescription to the todo-list-body-container
  todoListBodyContainer.appendChild(taskDescription);
};

const projectDOM = (projectName, badgeNum) => {
  // Select the project-list container
  const projectListContainer = document.querySelector(".project-list");

  // Create the project list
  const projectList = document.createElement("li");

  // Contents of the list
  const projectNameAndImageContainer = document.createElement("div");
  projectNameAndImageContainer.classList.add("side-item-name-icon");
  // Append contents of the newly created div
  const projectDefaultImage = document.createElement("img");
  projectDefaultImage.src = defaultProjectImage;
  projectDefaultImage.alt = "Project Image";
  projectNameAndImageContainer.appendChild(projectDefaultImage);
  const projName = document.createElement("p");
  projName.textContent = projectName;
  projectNameAndImageContainer.appendChild(projName);
  // Make content adjacent to div
  const badgeNumber = document.createElement("span");
  badgeNumber.classList.add("badge");
  badgeNumber.textContent = badgeNum;

  // Append the contents to the project list
  projectList.appendChild(projectNameAndImageContainer);
  projectList.appendChild(badgeNumber);

  // Append the project list to the projectListContainer
  projectListContainer.appendChild(projectList);

};

const changeProjectTitle = (title) => {
  const projectTitle = document.querySelector(".project-title");
  projectTitle.textContent = title;
};

const showAndCloseModal = () => {
  const modal = document.querySelector(".modal");
  const addProjectButton = document.querySelector(".add-project");
  const closeButton = document.querySelector(".close-btn");

  addProjectButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}

const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.close();
}

export { taskDom, projectDOM, changeProjectTitle, showAndCloseModal, closeModal };