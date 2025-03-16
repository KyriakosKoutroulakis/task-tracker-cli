import { access, mkdirSync, readFile, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get __dirname & __filename equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tasksDir = path.join(__dirname, '../jsons');
const tasksFile = path.join(__dirname, '../jsons/tasks.json');

const createFolder = () => {
  try {
    mkdirSync(tasksDir);
    return true;
  } catch (error) {
    return false;
  }
};

const loadFile = () => {
  return new Promise((resolve, reject) => {
    readFile(tasksFile, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const checkIfTasksDirExists = () => {
  return new Promise((resolve, reject) => {
    access(tasksDir, (err) => {
      if (err) {
        const result = createFolder();

        result ? resolve(result) : reject(result);
      }
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
    writeFile(tasksFile, tasks, (err) => {
      err ? reject({ error: true, msg: err.message }) : resolve(true);
    });
  });
};

export { checkIfTasksDirExists, loadData, saveTasks };
