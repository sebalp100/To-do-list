let tasks = [];

export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export class Actions {
  static sincronizationStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask() {
    if (localStorage.getItem('tasks') !== null) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      const input = document.querySelector('.list-create input').value;
      const completed = false;
      const index = tasks.length;
      const task = new Todo(input, completed, index);
      tasks.push(task);
      document.querySelector('.list-create input').value = '';
      Actions.sincronizationStorage();
    } else {
      tasks = [];
      const input = document.querySelector('.list-create input').value;
      const completed = false;
      const index = 0;
      const task = new Todo(input, completed, index);
      tasks.push(task);
      Actions.sincronizationStorage();
    }
  }

  static showTask() {
    const list = document.querySelector('.list');
    tasks = JSON.parse(localStorage.getItem('tasks'));
    list.innerHTML = ''; // empty list and create a new one
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
      tasks.forEach((task) => {
        list.innerHTML += `
    <div class="task">
    <input id="${task.index}" type="checkbox" class="checkbox">
    <span id="${task.index}" contentEditable="true" class="newTask">${task.description}</span>
    <img id="${task.index}" class="dots" src="5fca2d25a81fb1fc8a79.svg"/>
  </div>`;
      });
    }
  }

  static removeTask(event) {
    if (event.target.classList.contains('dots')) {
      event.target.parentElement.remove();
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      // eslint-disable-next-line  radix
      const newTasks = tasks.filter((task) => task.index !== parseInt(event.target.id));
      tasks = newTasks; // using filter property to remove same index as the target
      tasks.forEach((task, index) => {
        task.index = index; // set new index
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      Actions.showTask(); // re-render the list
    }
  }

  static editTask(event) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const ids = event.target.id;
    if (event.target.innerText) {
      tasks[ids].description = event.target.innerText; // change old description for the new value
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}