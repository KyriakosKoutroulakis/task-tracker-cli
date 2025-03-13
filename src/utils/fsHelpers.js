import { readFile, writeFile } from 'fs';
import path from 'path';

import { createTask } from './taskHelpers.js';

const tasksFolder = path.join(process.cwd(), 'data/tasks.json');

const loadFile = () => {
  return new Promise((resolve, reject) => {
    readFile(tasksFolder, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const loadData = async () => {
  try {
    const bufData = await loadFile();

    return JSON.parse(bufData.toString());
  } catch (error) {
    // IF no file exists, reject will be triggered
    return [];
  }
};

export const saveNewTask = async (task, status) => {
  const tasksJson = await loadData();
  const newTask = createTask(tasksJson.length + 1, task, status);

  tasksJson.push(newTask);

  return new Promise((resolve, reject) => {
    writeFile(tasksFolder, JSON.stringify(tasksJson), (err) => {
      if (err) {
        reject(new Error('Something went wrong! Your new task was not saved.'));
      } else {
        resolve('New task saved successfully!');
      }
    });
  });
};

export const updateTask = () => {};

export const deleteTask = () => {};

