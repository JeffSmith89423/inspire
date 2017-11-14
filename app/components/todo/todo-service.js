function TodoService() {
	// A local copy of your todos
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/jeffreysmith'
var id = 0
	// var todoList = []

	// var todo = todo[i]
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)

		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	// function Todo(name) {
	// 	this.name = name
	// }

	this.getTodos = function getTodos(draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				todos = res
				draw(todos)
			})
			.fail(logError)
	}

	this.addTodo = function addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(getTodos)
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList // for loop here

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoThing)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function removetodo(index, getTodos) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + index,
			// data: JSON.stringify(todo)
		})
			.then(getTodos) 
				.fail(logError)
			//DO YOU WANT TO DO ANYTHING WITH THIS?
		
	}

}
