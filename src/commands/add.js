import chalk from 'chalk';

import { saveNewTask } from '../utils/fsHelpers.js';

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
    const result = await saveNewTask(task, validStatus);
    console.log(chalk.green(result));
  } catch (error) {
    console.error(chalk.red(error));
  }
};
