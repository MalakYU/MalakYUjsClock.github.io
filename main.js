function myTimer() {
    var date = new Date();
    document.getElementById("date").innerHTML = months[date.getMonth()] + "/" + date.getDate() + "/" + date.getFullYear();
    document.getElementById("hours").innerHTML = hours[date.getHours()] + " :";
    document.getElementById("minutes").innerHTML = date.getMinutes() <10?"0"+date.getMinutes() + " :" :date.getMinutes() + " :";
    document.getElementById("seconds").innerHTML = date.getSeconds() <10?"0"+date.getSeconds() :date.getSeconds();
}
var myVar = setInterval(myTimer, 1000);
var hours = ["00",
"01","02","03","04","05","06","07","08","09","10","11","12",
"13","14","15","16","17","18","19","20","21","22","23"];
var months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8", 
    "9",
    "10",
    "11",
    "12"
];


