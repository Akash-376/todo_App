// Write all the JS Code related to Favourites Page Here 
let favData = JSON.parse(localStorage.getItem("task-favorites"));

Display(favData);

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

        row.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(row);
    });
}