import { loadData, saveTasks } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';
import { checkStatusOptions, createTask } from '../utils/taskHelpers.js';

export const addTask = async (task, { status }) => {
  const validStatus = checkStatusOptions(status);
  if (!validStatus) {
    console.log(MESSAGES.INVALID_STATUS);
    return;
  }

  try {
    const tasksjson = await loadData();
    const newTask = createTask(tasksjson.length + 1, task, status);
    tasksjson.push(newTask);

    await saveTasks(JSON.stringify(tasksjson));
    console.log(MESSAGES.ADD_NEW_TASK);
  } catch (error) {
    error.msg && error.msg.includes('no such file or directory')
      ? console.error(MESSAGES.TASKS_FOLDER_NOT_EXIST)
      : console.error(MESSAGES.ON_ERROR);
  }
};
