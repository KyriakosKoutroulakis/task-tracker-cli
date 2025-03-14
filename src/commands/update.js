import { loadData, saveTasks } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';
import { checkStatusOptions, updateTaskInArray } from '../utils/taskHelpers.js';

export const updateTask = async (id, { status, desc }) => {
  if (!status && !desc) {
    console.log(MESSAGES.NO_DATA_PROVIDED);
    return;
  }

  const taskId = Number(id);
  if (isNaN(taskId)) {
    console.log(MESSAGES.NaN_ERROR);
    return;
  }

  if (status) {
    const validStatus = checkStatusOptions(status);
    if (!validStatus) {
      console.log(MESSAGES.INVALID_STATUS);
      return;
    }
  }

  try {
    const tasksjson = await loadData();
    const [taskIdExists, updatedTasksList] = updateTaskInArray(taskId, status, desc, tasksjson);

    if (!taskIdExists) {
      console.log(MESSAGES.ID_NOT_EXISTS);
      console.log(MESSAGES.INFO);
      return;
    }

    await saveTasks(JSON.stringify(updatedTasksList));
    console.log(MESSAGES.UPDATE_TASK);
  } catch (error) {
    console.log(MESSAGES.ON_ERROR);
  }
};
