import './style.css';

/* eslint-disable  no-unused-vars */
import restart from './icons/restart.svg';

import enter from './icons/enter.svg';

import dots from './icons/dots.svg';

import trash from './icons/delete.svg';

import { Actions } from '../modules/object.js';

const input = document.querySelector('.list-create input');
const list = document.querySelector('.list');
const clearButton = document.querySelector('.clear-button');

document.addEventListener('DOMContentLoaded', Actions.showTask());

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    Actions.addTask();
    Actions.showTask();
  }
});

list.addEventListener('click', (e) => {
  Actions.removeTask(e);
});

list.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('newTask') && e.key === 'Enter') {
    e.preventDefault();
    Actions.editTask(e);
  }
});

clearButton.addEventListener('click', () => {
  Actions.isChecked();  // filter() method gets called from the isChecked funtion in object.js
});

list.addEventListener('change', () => { // listen for changes in chekboxes
  const checkbox = document.querySelectorAll('.checkbox');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  checkbox.forEach((checkbox) => {
    if (checkbox.checked) {
      tasks[checkbox.id].completed = true;
    } else {
      tasks[checkbox.id].completed = false;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
