const inputBarBox = document.getElementById("Input_Bar_Box");
const TasksContainer = document.getElementById("Tasks_Container");
function addTask() 
{
    if (inputBarBox.value === '')
        alert("You need to write Something to Add Task.");
    else 
    {
        let TaskData = document.createElement("li");
        TaskData.innerHTML = inputBarBox.value;
        TasksContainer.appendChild(TaskData);
        let Span = document.createElement("SPAN");
        Span.innerHTML = "\u00D7"; 
        Span.onclick = function () 
        {
            TaskData.remove();
            saveData();
            updateProgress();
        };
        TaskData.appendChild(Span);
        saveData();
        updateProgress();
    }
    inputBarBox.value = "";
}
TasksContainer.addEventListener("click", function(e) 
{
    if(e.target.tagName === "LI") 
    {
        e.target.classList.toggle("checked");
        saveData();
        updateProgress();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
        updateProgress();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", TasksContainer.innerHTML);
}
function showTask() 
{
    TasksContainer.innerHTML = localStorage.getItem("data") || "";
    updateProgress();
}

function updateProgress() 
{
    const work_to_be_Done = TasksContainer.querySelectorAll("li");
    const work_Completed = TasksContainer.querySelectorAll(".checked");
    const current_Situation = document.getElementById("Progress_Data");
    const Number_of_Tasks = document.getElementById("Number_of_Tasks");
    const work_Done_Percentage = (work_Completed.length / work_to_be_Done.length) * 100 || 0;
    current_Situation.style.width = `${work_Done_Percentage}%`;
    Number_of_Tasks.textContent = `${work_Completed.length} / ${work_to_be_Done.length}`;
}
showTask();