'use strict';

angular.module('todoApp')
	.controller('mainCtrl', function($scope, dataService) {
	
		// Get Todos
		dataService.getTodos(function(response) {
			$scope.todos = response.data;
		});

		// Delete Todo
		$scope.deleteTodo = (todo, index) => {
			dataService.deleteTodo(todo);
			$scope.todos.splice(index, 1);
		};

		// Save Todo
		$scope.saveTodo = (todo) => {
			dataService.saveTodo(todo);
		};

		// Add Todo
		$scope.addTodo = () => {
			$scope.todos.push({name : "New Todo"});
		};

});
	