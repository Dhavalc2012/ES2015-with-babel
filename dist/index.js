'use strict';

var _widgets = require('./widgets');

var test = "test";

(0, _widgets.add)({ name: 'widget 1', color: 'red', size: 'larger' });
console.log((0, _widgets.getAll)().length);