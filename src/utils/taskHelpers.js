const checkStatusOptions = (status) => {
  return ['todo', 'in-progress', 'done'].includes(status) ? status : null;
};

const createTask = (id, task, status) => {
  return {
    id: id,
    description: task,
    status: status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const updateTaskInArray = (id, status, desc, tasksArr) => {
  let taskIdExists = false;

  const updatedTasksList = tasksArr.map((e) => {
    if (e.id === id) {
      e.status = status ? status : e.status;
      e.description = desc ? desc : e.description;
      e.updatedAt = new Date();
      taskIdExists = true;
    }
    return e;
  });

  return [taskIdExists, updatedTasksList];
};

const removeTaskIfExists = (id, tasksArr) => {
  let taskIdExists = false;

  const updatedTasksList = tasksArr.filter((e) => {
    if (e.id === id) {
      taskIdExists = true;
    }
    return e.id !== id;
  });

  return [taskIdExists, updatedTasksList];
};

export { checkStatusOptions, createTask, updateTaskInArray, removeTaskIfExists };
