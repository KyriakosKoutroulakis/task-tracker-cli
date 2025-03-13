import chalk from 'chalk';

import { loadData, saveTasks } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';

const removeTaskIfExists = (id, tasksArr) => {
  let taskIdExists = false;

  const newTasksList = tasksArr.filter(e => {
    if (e.id === id){
      taskIdExists = true;
    }
    return e.id !== id;
  });

  return [newTasksList, taskIdExists];
};

export const deleteTask = async (id) => {
  const taskId = Number(id);

  if (isNaN(taskId)) {
    console.log('IDs are numeric only values..');
    return;
  }

  try {
    const tasksjson = await loadData();
    const [newTasksList, taskExists] = removeTaskIfExists(taskId, tasksjson);

    if (!taskExists) {
      console.log(chalk.red(`No task with the id of ${chalk.bold(taskId)} exists!`));
      console.log(`Use the ${chalk.bold('task-tracker list')} command to see available tasks.`);
      return;
    }

    await saveTasks(JSON.stringify(newTasksList));
    console.log(chalk.green(MESSAGES.DELETE_TASK));
  } catch (error) {
    console.error(chalk.red(MESSAGES.ON_ERROR));
  }
};
