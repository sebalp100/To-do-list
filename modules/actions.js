let data = JSON.parse(localStorage.getItem('todo-list'));
const list = document.querySelector('.list');

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
};