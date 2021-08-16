document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', (s) => {
    s.preventDefault()
    buildToDoItem(s.target.querySelector('input').value)
  })
  
});

function buildToDoItem(todo){
  let p = document.createElement('p')
  let xbtn = document.createElement('button')
  xbtn.addEventListener("click", (x) => {
    x.target.parentNode.remove()},
  //Anonymous function that removes the parent node of the X button variable inserted into 'x' when the Xbtn is clicked
  
  xbtn.textContent = " x ",
  
  
  
  p.textContent = `${todo} `,
  p.appendChild(xbtn),
  //Appends Xbtn to the Added to-do list element provided as a submit, will do this for each submit


  
  document.getElementById('tasks').appendChild(p)
  // Adds the text of the submit to a new item line on To Do list
  )}