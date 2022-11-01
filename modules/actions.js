// eslint-disable-next-line  no-unused-vars
const data = JSON.parse(localStorage.getItem('todo-list'));
const list = document.querySelector('.list');
const tasks = [
  {
    description: 'Example task 1',
    completed: false,
    index: 0,
  }, {
    description: 'Example task 2',
    completed: false,
    index: 1,
  }, {
    description: 'Example task 3',
    completed: false,
    index: 2,
  },
];

export default class Actions {
  static showTask(data) {
    let li = '';
    if (data) {
      data.forEach((toDo, id) => {
        li += `<li class='task'>
      <input type='checkbox' id='${id}'>
      <p>${toDo.description}</p>
      <img class="dots" src="f25ebe1310c239ad22f2.svg" alt="3 dots button" style="cursor:pointer"/>
      </li>
      `;
      });
    }
    list.innerHTML = li;
  }

  static addElem() {
    tasks.forEach(() => {
      let li = '';
      if (tasks) {
        tasks.forEach((toDo, id) => {
          li += `<li class='task'>
        <input type='checkbox' id='${id}'>
        <p>${toDo.description}</p>
        <img class="dots" src="f25ebe1310c239ad22f2.svg" alt="3 dots button" style="cursor:pointer"/>
        </li>
        `;
        });
      }
      list.innerHTML = li;
    });
  }
}