document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskDetail = document.querySelector('.task_detail');
    const dateInput = document.querySelector('.date');
    const prioritySelect = document.getElementById('priority');
    const mainBtn = document.getElementById('main_btn');
    const todayContainer = document.querySelector('.Today_box_container1');
    const futureContainer = document.querySelector('.Today_box_container2');
    const completeContainer = document.querySelector('.Today_box_container3');

    // Save tasks to local storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Render tasks
    const renderTasks = () => {
        todayContainer.innerHTML = '';
        futureContainer.innerHTML = '';
        completeContainer.innerHTML = '';

        const today = new Date().setHours(0, 0, 0, 0);

        tasks.forEach((task, index) => {
            const container = task.completed
                ? completeContainer
                : new Date(task.date).setHours(0, 0, 0, 0) === today
                ? todayContainer
                : futureContainer;

            const taskElement = document.createElement('div');
            taskElement.classList.add('box_body1');
            taskElement.innerHTML = `
                <div>${task.name}</div>
                <div>${new Date(task.date).toLocaleDateString()}</div>
                <div>${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</div>
                <div>
                    ${task.completed ? '' : `<button class="complete" data-index="${index}">✔</button>`}
                    <button class="delete" data-index="${index}">🗑</button>
                </div>
            `;

            container.appendChild(taskElement);
        });

        document.querySelectorAll('.complete').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                tasks[index].completed = true;
                saveTasks();
                renderTasks();
            });
        });

        document.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });
        });
    };

    // Add task
    mainBtn.addEventListener('click', () => {
        const taskName = taskDetail.value.trim();
        const taskDate = dateInput.value;
        const taskPriority = prioritySelect.value;

        if (!taskName || !taskDate || !taskPriority) {
            alert('Please fill in all fields.');
            return;
        }

        tasks.push({
            name: taskName,
            date: taskDate,
            priority: taskPriority,
            completed: false
        });

        saveTasks();
        renderTasks();
        taskDetail.value = '';
        dateInput.value = '';
        prioritySelect.value = '';
    });

    // Initial render
    renderTasks();
});
