const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("taskName").value.trim();
  const date = document.getElementById("taskDate").value;

  if (!name || !date) return;

  const task = document.createElement("li");
  const timeLeft = new Date(date) - new Date();

  if (timeLeft < 86400000 && timeLeft > 0) { // moins de 24h
    task.classList.add("urgent");
  }

  task.innerHTML = `
    <div class="task-info">
      <strong>${name}</strong><br />
      À faire avant : ${new Date(date).toLocaleString()}
    </div>
    <div class="task-actions">
      <button class="done-btn">✅ Terminé</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  task.querySelector(".done-btn").addEventListener("click", () => {
    task.style.textDecoration = "line-through";
    task.style.opacity = 0.5;
  });

  task.querySelector(".delete-btn").addEventListener("click", () => {
    task.remove();
  });

  taskList.appendChild(task);
  form.reset();
});
