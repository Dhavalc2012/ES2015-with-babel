const test = "test";

import {getAll, add} from './widgets';
//Used to import defaults 
//import Widgets from './widgets';
add({name: 'widget 1',color:'red',size:'larger'});
console.log(getAll().length);


