function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods 
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
// function draw(todo){
// 	var formElem = document.getElementById("todo")
// 	template =''
// 	template +=`
// 	<div >counter:${i +1}</div>
// 	`
// 	formElem.innerHTML = template
// }
	function draw(todos) {
		var formElem = document.getElementById("todo")
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			template += `
			<div class="col-xs-12">
			<div class="panel panel-info">
				<div class="panel-heading">
								<h3>${i+1}. ${todo.todo}<button type="submit" onclick="app.controllers.todoController.removeTodo(${i})" class="btn btn-default">Delete</button></h3>
				</div>
			</div>
		</div>			
			`
			// <ul class="container" id="formID">
			// <i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removetodo(${i})"></i>
			// <li>${todo.todo}</li>
		}
		// debugger
		formElem.innerHTML = template
		//DONT FORGET TO LOOP
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target.newItem.value
		var todo = {
			todo: form,
			completed: false
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function removeTodo(index) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(index, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	getTodos()
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
