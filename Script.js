function saveData(){
localStorage.setItem("name","Khushi")
alert("Data Saved in LocalStorage")
}

function getData(){
let data = localStorage.getItem("name")
document.getElementById("output").innerText = data
}
function removeData(){
localStorage.removeItem("name")
alert("Data Removed")
}
