import chalk from 'chalk';

import { loadData, saveTasks } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';
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

    await saveTasks(JSON.stringify(tasksjson));
    console.log(chalk.green(MESSAGES.ADD_NEW_TASK));
  } catch (error) {
    console.error(chalk.red(MESSAGES.ON_ERROR));
  }
};
