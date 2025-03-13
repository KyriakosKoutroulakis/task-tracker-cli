import { Command } from 'commander';

import { addTask } from './commands/add.js';
import { deleteTask } from './commands/delete.js';

const program = new Command();

program
  .name('task-tracker')
  .description('A cli tool build in node.js to track your tasks and manage your to-do list.')
  .version('0.0.1');

program
  .command('add')
  .description('Add a new task')
  .argument('<string>', 'New task')
  .option('--status <string>', 'Status of the task [todo, in-progress, done]', 'todo')
  .action(addTask);

  program
  .command('delete')
  .description('Delete a task based on its id')
  .argument('<num>', 'Id of the task to be deleted')
  .action(deleteTask);

export function run() {
  program.parse(process.argv);
}
