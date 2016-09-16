//var task = Object.create(Object.prototype);
//var task = new Object();
//task.title = 'My Title';
//task.description = 'My Description';

/*task.toString = function(){
    return this.title + ' ' + this.description;
};*/

var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(Object.keys(task));
//console.log(task);

//inheritance
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(urgentTask.toString());