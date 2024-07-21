function startTutorial() {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      classes: "shadow-md bg-purple-dark",
      scrollTo: { behavior: "smooth", block: "center" },
    },
  });

  tour.addStep({
    id: "add-project",
    text: "Click here to make new projects.",
    attachTo: {
      element: ".add-project",
      on: "right-end",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "delete-project",
    text: "Click here to delete a project you're currently on.",
    attachTo: {
      element: ".remove-project-btn",
      on: "left",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    id: "add-task",
    text: "Once a Project is created, click on the project and click here to add tasks to the selected project.",
    attachTo: {
      element: ".add-item-button",
      on: "bottom",
    },
    buttons: [
      {
        text: "Done",
        action: tour.complete,
      },
    ],
  });

  tour.on("complete", function () {
    localStorage.setItem("tutorialCompleted", "true");
  });

  tour.start();
}

export { startTutorial };
