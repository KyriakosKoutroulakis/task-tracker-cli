import { randomInt } from 'crypto';

const createUniqueId = () => {
  return randomInt(1000, 9999);
};

const createFormattedDate = () => {
  const d = new Date();

  return `${d.toLocaleDateString()} - ${d.toLocaleTimeString()}`;
};

const checkStatusOptions = (status) => {
  return ['todo', 'in-progress', 'done'].includes(status) ? status : null;
};

const createTask = (task, status) => {
  return {
    id: createUniqueId(),
    description: task,
    status: status,
    createdAt: createFormattedDate(),
    updatedAt: createFormattedDate(),
  };
};

const updateTaskInArray = (id, status, desc, tasksArr) => {
  let taskIdExists = false;

  const updatedTasksList = tasksArr.map((t) => {
    if (t.id === id) {
      t.status = status ? status : t.status;
      t.description = desc ? desc : t.description;
      t.updatedAt = createFormattedDate();
      taskIdExists = true;
    }
    return t;
  });

  return [taskIdExists, updatedTasksList];
};

const removeTaskIfExists = (id, tasksArr) => {
  let taskIdExists = false;

  const updatedTasksList = tasksArr.filter((t) => {
    if (t.id === id) {
      taskIdExists = true;
    }
    return t.id !== id;
  });

  return [taskIdExists, updatedTasksList];
};

const listTasksBasedOnFilter = (filter, tasksArr) => {
  return tasksArr.filter((t) => t.status === filter);
};

export { checkStatusOptions, createTask, updateTaskInArray, removeTaskIfExists, listTasksBasedOnFilter };
