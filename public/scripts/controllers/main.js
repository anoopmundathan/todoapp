angular.module('todoApp')
	.controller('mainCtrl', function($scope, dataService) {


		$scope.todos = [
			{"name": "Buy Milk"},
			{"name": "Get Keys"},
			{"name": "Silikon Valley"}
		];

		//Delete Todo
		$scope.deleteTodo = (todo, index) => {
			dataService.deleteTodo(todo);
			$scope.todos.splice(index, 1);
		}
	})
	.service('dataService', function() {
		this.deleteTodo = (todo, index) => {
			console.log(todo.name + ' deleted');
			// Other Logic
		};

		this.saveTodo = (todo) => {
			console.log(todo.name + 'saved');
		};
	});