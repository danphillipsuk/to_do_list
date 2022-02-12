import _ from 'lodash';
import './style.css';
import { taskList } from "./defineTasklist.js";
import domCreate from './domCreate';
import { eventSelect } from './eventListeners.js';
import { tasklistDisplay } from './domCreate.js';

eventSelect();
tasklistDisplay();


