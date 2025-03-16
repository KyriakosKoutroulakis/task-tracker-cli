import { Command } from 'commander';
import * as tc from './commands/index.js';

const program = new Command();

program
  .name('task-tracker')
  .description('A cli tool build in node.js to track your tasks and manage your to-do list.')
  .version('0.0.1');

program.command('init').description('Initialize the cli app.').action(tc.initializeApp);

program
  .command('add')
  .description('Add a new task')
  .argument('<string>', 'New task')
  .option('--status <string>', 'Status of the task [todo, in-progress, done]', 'todo')
  .action(tc.addTask);

program
  .command('delete')
  .description('Delete a task based on its id')
  .argument('<num>', 'Id of the task to be deleted')
  .action(tc.deleteTask);

program
  .command('update')
  .description('Update a tasks description or status')
  .argument('<num>', 'Id of the task to be updated')
  .option('--status <string>', 'Status of the task [todo, in-progress, done]')
  .option('--desc <string>', 'New task description')
  .action(tc.updateTask);

program
  .command('list')
  .description('List all available tasks or based on their status [all, todo, in-progress, done]')
  .argument('<string>', 'Tasks status')
  .action(tc.listTasks);

export function run() {
  program.parse(process.argv);
}
