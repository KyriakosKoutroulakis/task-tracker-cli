import { loadData, saveTasks } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';
import { removeTaskIfExists } from '../utils/taskHelpers.js';

export const deleteTask = async (id) => {
  const taskId = Number(id);
  if (isNaN(taskId)) {
    console.log(MESSAGES.NaN_ERROR);
    return;
  }

  try {
    const tasksjson = await loadData();
    const [taskExists, newTasksList] = removeTaskIfExists(taskId, tasksjson);

    if (!taskExists) {
      console.log(chalk.red(`No task with the id of ${chalk.bold(taskId)} exists!`));
      console.log(`Use the ${chalk.bold('task-tracker list')} command to see available tasks.`);
      return;
    }

    await saveTasks(JSON.stringify(newTasksList));
    console.log(MESSAGES.DELETE_TASK);
  } catch (error) {
    console.error(MESSAGES.ON_ERROR);
  }
};
