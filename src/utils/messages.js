import chalk from 'chalk';

const MESSAGES = {
  ADD_NEW_TASK: `> ${chalk.green('New task saved successfully!')}`,
  DELETE_TASK: `> ${chalk.green('Task deleted successfully!')}`,
  UPDATE_TASK: `> ${chalk.green('Task has been updated successfully!')}`,
  ON_ERROR: `> ${chalk.red('Something went wrong! Operation did not complete.')}`,
  NaN_ERROR: `> Task id is a ${chalk.bold('numeric')} only value`,
  INVALID_STATUS: `> Only ${chalk.bold('*todo *in-progress *done')} are valid task statuses.`,
  INVALID_LIST_ARGS: `> Only ${chalk.bold('*all *todo *in-progress *done')} are valid list statuses.`,
  NO_DATA_PROVIDED: `> Please provide ${chalk.bold('status')} or ${chalk.bold('description')} for the task to be updated.`,
  ID_NOT_EXISTS: `> ${chalk.red(`No task is associated with the ID provided.`)}`,
  INFO: `> Use the ${chalk.bold('task-tracker list')} command to see the available tasks and their IDs.`,
  EMPTY_ARRAY_ERROR: '> Currently you have no tasks.',
};

const constructEmptyArrayError = (status) => {
  return `> No tasks found with ${chalk.bold(status)} status.`;
};

export { MESSAGES, constructEmptyArrayError };
