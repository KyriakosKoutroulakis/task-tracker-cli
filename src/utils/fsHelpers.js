import { readFile, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get __dirname & __filename equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksFolder = path.join(__dirname, '../jsons/tasks.json');

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
