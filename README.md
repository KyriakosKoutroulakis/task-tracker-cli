# task-tracker-cli

Task tracker is a simple command line interface (CLI) build in node.js to track your tasks and manage your to-do list.

### Prerequisities

- _[node.js](https://nodejs.org/en/download)_ must be installed in your pc. Download it and install it before moving on.

> To ensure that you installed it correctly, open a terminal and type **node -v**, and the version should appear in the next line.

### Features

- Add and Delete tasks
- Update task description or status
- List all available tasks
- List tasks based on their status (_todo_, _in-progress_, _done_)

### Installation

**Open a terminal and clone the project repository**

```
git clone https://github.com/KyriakosKoutroulakis/task-tracker-cli.git
```

**Navigate to the project folder**

```
cd task-tracker-cli
```

**Install the dependencies**

```
npm i
```

**Symlink the package locally**

```
npm run dev
```

### Examples using the app

##### Initialize the app

```
task-tracker init
```
##### Add a new task

```
task-tracker add "This is a new task"
```

_or if you want to set a status_

```
task-tracker add "This is a new task" --status=done
```
##### Delete task

_you delete a task by providing its unique id_

```
task-tracker delete 1212
```
##### Update a task

_to update a task status_

```
task-tracker update --status=in-progress
```

_or update a task description_

```
task-tracker update --desc="This is an updated description"
```  

_you can also combine both flags for ease of use_

##### List all tasks or based on status

```
task-tracker list all
task-tracker list todo
task-tracker list in-progress
task-tracker list done
```

### Sample JSON data

```
[
  {
    "id": 9348,
    "description": "Master node.js",
    "status": "in-progress",
    "createdAt": "18/03/2025 - 11:59:36",
    "updatedAt": "18/03/2025 - 12:03:16"
  },
]

```

This is a solution developed based on the [task-tracker](https://roadmap.sh/projects/task-tracker) exercise.