angular.module('todoApp')
	.controller('mainCtrl', function($scope) {
		$scope.helloWorld = function() {
			console.log('Hello');
		};

		$scope.todos = [
			{
				"name": "Buy Milk"
			},
			{
				"name": "Get Keys"
			},
			{
				"name": "Silikon Valley"
			}
		]

		$scope.addTask = () => {
			$scope.todos.push({"name" : "New Task"});
		};

		$scope.deleteTask = () => {
			$scope.todos.pop();
		};
	});