/* eslint-disable */
import _ from "lodash";
/* eslint-enable */
import './style.css';
import loadData from './modules/load_data.js';
import addFormData from './modules/add_data.js';

const refresh = document.getElementById('refresh');
const myForm = document.getElementById('form');

window.onload = loadData();

refresh.addEventListener('click', loadData);

myForm.addEventListener('submit', () => {
  addFormData();
  myForm.reset();
  loadData();
});
