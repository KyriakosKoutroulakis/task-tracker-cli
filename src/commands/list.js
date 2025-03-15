import { loadData } from '../utils/fsHelpers.js';
import { MESSAGES, constructEmptyArrayError } from '../utils/messages.js';
import { checkStatusOptions, listTasksBasedOnFilter } from '../utils/taskHelpers.js';

export const listTasks = async (status) => {
  const validStatus = checkStatusOptions(status);
  if (!validStatus && status !== 'all') {
    console.log(MESSAGES.INVALID_LIST_ARGS);
    return;
  }

  try {
    const tasksjson = await loadData();

    if (status === 'all') {
      tasksjson.length > 0 ? console.table(tasksjson) : console.log(MESSAGES.EMPTY_ARRAY_ERROR);
    } else {
      const filteredTasks = listTasksBasedOnFilter(status, tasksjson);
      filteredTasks.length > 0 ? console.table(filteredTasks) : console.log(constructEmptyArrayError(status));
    }
  } catch (error) {}
};
