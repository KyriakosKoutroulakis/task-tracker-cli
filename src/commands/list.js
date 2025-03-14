import { MESSAGES } from '../utils/messages.js';
import { checkStatusOptions } from '../utils/taskHelpers.js';

export const listTasks = (status) => {
  const validStatus = checkStatusOptions(status);
  if (!validStatus && status !== 'all') {
    console.log(MESSAGES.INVALID_LIST_ARGS);
    return;
  }

  console.log('🚀 ~ status:', status);
};
