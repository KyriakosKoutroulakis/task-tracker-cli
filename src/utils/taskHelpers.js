export const createTask = (id, task, status) => {
  return { 
    id: id,
    description: task,
    status: status,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};
