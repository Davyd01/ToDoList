

const taskForm = document.getElementsByClassName('js--form')[0]
const todoList = document.querySelector('.js--todos-wrapper');
const tasks = JSON.parse(localStorage.getItem('tasks')) || []
// const tasks = []


tasks.forEach((task) => {
  const newTask = createToDo(task.text)
  if (task.completed) {
    newTask.querySelector('input[type="checkbox"]').checked = true
    newTask.classList.add('todo-item--checked')
  }
  todoList.appendChild(newTask)
})



taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const TaskFormFormData = new FormData(taskForm)
  const formObj = Object.fromEntries(TaskFormFormData.entries())


  const newTaskData = {text: formObj.value, completed: false}
  tasks.push(newTaskData)


  localStorage.setItem('tasks', JSON.stringify(tasks))


  const newTask = createToDo(formObj.value)
  todoList.appendChild(newTask)

  taskForm.reset()

})






function createToDo(taskText) {
  const listItem = document.createElement('li')
  listItem.classList.add('todo-item')

  const toDoCheckBox = document.createElement('input')
  toDoCheckBox.setAttribute('type', 'checkbox')
  listItem.appendChild(toDoCheckBox)

  const taskDescription = document.createElement('span')
  taskDescription.classList.add('todo-item__description')
  taskDescription.textContent = taskText
  listItem.appendChild(taskDescription)


  const btnDelete = document.createElement('button')
  btnDelete.classList.add('todo-item__delete')
  btnDelete.textContent = 'Видалити'
  listItem.appendChild(btnDelete)


  btnDelete.addEventListener('click',() => {
    const index = tasks.findIndex((task) => task.text === taskText)
    if (index !== -1) {
      tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    listItem.remove()
  })


  toDoCheckBox.addEventListener('change', () => {
    const index = tasks.findIndex((task) => task.text === taskText)
    if (index !== -1) {
      tasks[index].completed = toDoCheckBox.checked
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    
    if (toDoCheckBox.checked) {
      listItem.classList.add('todo-item--checked')
    } else {
      listItem.classList.remove('todo-item--checked')
    }
  })

  return listItem
}





