document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      buildNewTask(e.target.description.value)
      
      form.reset();
  })
});

function buildNewTask(newTask) {
    let li = document.createElement('li');
    let btn = document.createElement('button');

    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x';
    li.textContent = `${newTask} `;

    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li)
};

function handleDelete(e) {
    e.target.parentNode.remove();
};

const newColor = document.querySelector('body');
newColor.style.background = '#4361ee';