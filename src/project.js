const projectLibrary = (() => {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    };
    const getProjects = () => projects;
    return { addProject, getProjects };
    })();

const createProject = (projectName) => {
  const project = {
    projectName,
    tasks: [],
    numTask: 0,
    addTask(task) {
      this.tasks.push(task);
      this.numTask++;
    },
  };
  return project;
};

export { createProject, projectLibrary };
