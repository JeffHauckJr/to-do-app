  let allTodos;
  let pendingTodos, completedTodos, expiredTodos; 
  
  function createElementFromTodo(todo) {
  return $(`<div class="todo">
  <h3><span class="title">${todo.title}</span><span class="due-date">${todo.dueDate}</span></h3>
    <pre>${todo.description}</pre>
    <footer class="actions">
      <button class="action ${todo.isComplete} complete">Complete</button>
      <button class="action delete">Delete</button>
    </footer>
  </div>`).data('todo', todo);
 
}
  
function renderTodos() {
  $('main .content').empty();
    pendingTodos.forEach(function(todos) {
      $('.pending-todos').append(createElementFromTodo(todos).data('todo', todos))
    })
    completedTodos.forEach(function(todos) {
      $('.completed-todos').append(createElementFromTodo(todos).data('todo', todos))
    })
    expiredTodos.forEach(function(todos) {
      $('.expired-todos').append(createElementFromTodo(todos).data('todo', todos))
    })
    
  }


$('.add-todo').click(function() {
    $('.modal').addClass('open')
  })

$('.create-todo').click(function(event) {
  event.preventDefault()
  $('.modal').removeClass('open')
  let newForm = createTodoFromForm()
  allTodos.unshift(newForm)
  $('.todo-form').trigger('reset')
  storeData()
  splitTodos()
  renderTodos()
  
})

$('.cancel-create-todo').click(function(event) {
  event.preventDefault()
  $('.modal').removeClass('open')
})

function createTodoFromForm() {
  let falseObject = {
    title: $('#todo-title').val(),
    dueDate: $('#todo-due-date').val(), 
    description: $('#todo-description').val(), 
    isComplete: false
  }
 
  return falseObject
}

$('main').on('click', '.action.complete', function () {
  let closestTodo = $(this).closest('.todo')
  let data = closestTodo.data()
  data.todo.isComplete = true
  storeData()
  splitTodos()
  renderTodos()
  
});

function isCurrent(todo) {
  const todoDueDate = new Date(todo.dueDate);
  const now = new Date();

  return now < todoDueDate;
}

function splitTodos() {
pendingTodos = allTodos.filter(function(todos) {
    return !todos.isComplete && isCurrent(todos)
}),
completedTodos = allTodos.filter(function(todos) {
    return todos.isComplete
}),
expiredTodos = allTodos.filter(function(todos) {
    return !todos.isComplete && !isCurrent(todos)
})
}

function storeData() {
  localStorage.setItem("allTodos", JSON.stringify(allTodos))
}

function retrieveData() {
  allTodos = JSON.parse(localStorage.getItem("allTodos")) || fetchDefaultTodos()
}

function fetchDefaultTodos() {
  return [
    {title: 'Welcome to the Todo Page', dueDate: '03/20/2021', description: 'On this page you will be able to create some todos!', isComplete: false},
    {title: 'Completed Tasks', dueDate: '03/20/2021', description: 'Click complete to finish this task and move it to the Completed Section', isComplete: false},
    {title: 'Expired :(', dueDate: '03/20/2002', description: 'This is where tasks that have gone past their due date go', isComplete: false},
    {title: 'We did It!', dueDate: '03/20/2021', description: 'This task was completed on time!', isComplete: true},
  ]
}

$("main").on("click", ".action.delete", function() {
  const deleteTodo = $(this).closest(".todo")
    , data = deleteTodo.data("todo");
  allTodos.splice(allTodos.indexOf(data), 1),
  storeData(),
  splitTodos(),
  renderTodos()
})

$('.remove-completed').click(function() {
  allTodos = allTodos.filter(function(complete){
    return isCurrent(complete)
  })

})

$('.remove-expired').click(function() {
  allTodos = allTodos.filter(function(expired){
    return isCurrent(expired)
  })
})


retrieveData()
splitTodos()
renderTodos()