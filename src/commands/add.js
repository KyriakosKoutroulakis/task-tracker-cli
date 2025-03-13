import chalk from 'chalk';

import { loadData, saveNewTask } from '../utils/fsHelpers.js';
import { createTask } from '../utils/taskHelpers.js';

const checkStatusOptions = (status) => {
  return ['todo', 'in-progress', 'done'].includes(status) ? status : null;
};

export const addTask = async (task, { status }) => {
  const validStatus = checkStatusOptions(status);

  if(!validStatus) {
    console.log('Only *todo *in-progress *done are valid task statuses.');
    return;
  }

  try {
    const tasksjson = await loadData();
    const newTask = createTask(tasksjson.length + 1, task, status);
    tasksjson.push(newTask);

    const result = await saveNewTask(JSON.stringify(tasksjson));

    console.log(chalk.green(result));
  } catch (error) {
    console.error(chalk.red(error));
  }
};
