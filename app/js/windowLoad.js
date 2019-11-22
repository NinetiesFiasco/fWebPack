
import $ from 'jQuery';
window.$ = $;
import {clickerOne,clickerTwo} from './buttonsClick.js';
import {} from './ES6Example.js';
import {} from '../react/main.js';

import "../css/bg.css";
import "../css/loginInp.scss";
import "../css/passwordInp.css";

$(document).ready(function(){
    alert('JQ ready');
    clickerOne();
    clickerTwo();
});