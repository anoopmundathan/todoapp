'use strict';

angular.module('todoApp')

	.service('dataService', function($http) {

		// Get Todos
		this.getTodos = function(callback) {
			$http.get('/mock/todos.json')
			.then(callback);
		};

		// Delete Todo
		this.deleteTodo = (todo, index) => {
			console.log(todo.name + ' deleted');
			// Other Logic
		};

		// Save Todo
		this.saveTodo = (todo) => {
			console.log(todo.name + ' saved');
			// Other Logic
		};
});