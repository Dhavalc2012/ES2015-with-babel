const widgets = [];
export const getAll = () => widgets;

export const add = newWidget => widgets.push(newWidget);

/*
export default {
     getAll : () => widgets,
     add: newWidget => widgets.push(newWidget)

}
*/
/* If we use export default then we can not export individual modules and we
can take advantage of tree shaking */