// Write all the JS Code related to Home Page Here 
let form = document.querySelector("form");
let taskData =JSON.parse(localStorage.getItem("tasks")) || [];
Display(taskData);
let compData =JSON.parse(localStorage.getItem("task-completed")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();

    let obj = {
        taskName : form.name.value,
        type : form.type.value,
        date : form.date.value,
        priority : form.priority.value

    }
    taskData.push(obj);
    localStorage.setItem("tasks",JSON.stringify(taskData));
    Display(taskData);
})

function Display(data){
    document.querySelector("tbody").innerText = "";
    data.forEach((element,i) => {
        let row = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = element.taskName;

        let td2 = document.createElement("td");
        td2.innerText = element.type;

        let td3 = document.createElement("td");
        td3.innerText = element.date;

        let td4 = document.createElement("td");
        td4.innerText = element.priority;

        let td5 = document.createElement("td");
        td5.innerText = "Completed";
        td5.addEventListener("click",function(){
            compData.push(element);
            localStorage.setItem("task-completed",JSON.stringify(compData));
            deleteData(element,i);
        })

        row.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(row);
    });
}
function deleteData(element,i){
    taskData.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(taskData));
    Display(taskData);
}