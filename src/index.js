import './style.css';

/* eslint-disable  no-unused-vars */
import restart from './icons/restart.svg';

import enter from './icons/enter.svg';

import dots from './icons/dots.svg';

import trash from './icons/delete.svg';

import { Actions } from '../modules/object.js';

const input = document.querySelector('.list-create input');

document.addEventListener('DOMContentLoaded', Actions.showTask());

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    Actions.addTask();
    Actions.showTask();
  }
});

const list = document.querySelector('.list');

list.addEventListener('click', (e) => {
  Actions.removeTask(e);
});

list.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('newTask') && e.key === 'Enter') {
    e.preventDefault();
    Actions.editTask(e);
  }
});