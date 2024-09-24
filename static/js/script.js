document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskText = document.getElementById('new-task').value;
  if (taskText === '') return;

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function() {
      newTask.remove();
  });

  newTask.appendChild(removeBtn);

  newTask.addEventListener('click', function() {
      newTask.classList.toggle('completed');
  });

  document.getElementById('todo-list').appendChild(newTask);
  document.getElementById('new-task').value = '';
});

// Abrir e fechar o modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Ao clicar no botão de abrir
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Ao clicar no botão de fechar (x)
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// // Fechar o modal ao clicar fora da área de conteúdo
// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });
