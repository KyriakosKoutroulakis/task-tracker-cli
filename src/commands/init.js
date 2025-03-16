import { checkIfTasksDirExists } from '../utils/fsHelpers.js';
import { MESSAGES } from '../utils/messages.js';

export const initializeApp = async () => {
  try {
    const res = await checkIfTasksDirExists();
    console.log(MESSAGES.INIT_APP);
  } catch (error) {
    console.log(MESSAGES.ON_ERROR);
  }
};
