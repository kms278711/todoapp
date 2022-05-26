//start...
import { log } from './utils';
import './todos.css';

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log();
})