import { readFile, writeFile } from 'fs';
import path from 'path';

const tasksFolder = path.join(process.cwd(), 'data/tasks.json');

const loadFile = () => {
  return new Promise((resolve, reject) => {
    readFile(tasksFolder, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const loadData = async () => {
  try {
    const bufData = await loadFile();

    return JSON.parse(bufData.toString());
  } catch (error) {
    // If no file exists, reject will be triggered
    return [];
  }
};

const saveTasks = async (tasks) => {
  return new Promise((resolve, reject) => {
    writeFile(tasksFolder, tasks, (err) => {
      err ? reject(true) : resolve(true);
    });
  });
};

export { loadData, saveTasks };
