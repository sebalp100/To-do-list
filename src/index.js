import './style.css';

/* eslint-disable  no-unused-vars */
import restart from './icons/restart.svg';

import enter from './icons/enter.svg';

import dots from './icons/dots.svg';

import Actions from '../modules/actions.js';

const input = document.querySelector('.list-create input');

let data = JSON.parse(localStorage.getItem('todo-list'));

document.addEventListener('DOMContentLoaded', Actions.showTask(data));

input.addEventListener('keyup', (e) => {
  const task = input.value;
  if (e.key === 'Enter' && task) {
    if (!data) {
      data = [];
    }
    input.value = '';
    const taskInfo = { description: task, completed: false, index: data.length };
    data.push(taskInfo);
    localStorage.setItem('todo-list', JSON.stringify(data));
    Actions.showTask(data);
  }
});
