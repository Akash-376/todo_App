// Write all the JS Code related to Completed Page Here 
let compData = JSON.parse(localStorage.getItem("task-completed"));

Display(compData)

let favTask =JSON.parse(localStorage.getItem("task-favorites")) || [];

let filter = document.querySelector("#filter");

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
        td5.innerText = "Add";
        td5.addEventListener("click",function(){
            favTask.push(element);
            localStorage.setItem("task-favorites",JSON.stringify(favTask));
            deleteData(element,i);
        })

        row.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(row);
    });
}
function deleteData(element,i){
    compData.splice(i,1);
    localStorage.setItem("task-completed",JSON.stringify(compData));
    Display(compData);
}
filter.addEventListener("change",function(){
    if(filter.value == ""){
        Display (compData);
    }else{
        let filteredData = compData.filter(function(element){
            return element.priority === filter.value;
        })
        Display(filteredData);
    }
})