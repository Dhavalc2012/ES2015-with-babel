const test = "test";

import {getAll as getAllFn, add as addWidget} from './widgets';
//Used to import defaults 
//import Widgets from './widgets';
addWidget({name: 'widget 1',color:'red',size:'larger'});
console.log(getAllFn().length);


