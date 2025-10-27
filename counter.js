const displayCount = document.getElementById("count");
const increasebtn = document.getElementById("increase");
const doubleincreament=document.getElementById("dblincrease")
const decreasebtn = document.getElementById("decrease");
const doubledecreament=document.getElementById("dbldecrease")
const resetbtn = document.getElementById("reset");

let count = 0;

function updatecount() {

    displayCount.textContent = count;
    displayCount.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
}

doubleincreament.addEventListener("click", () => {
    count+=2;
    updatecount();
});


increasebtn.addEventListener("click", () => {
    count++;

    updatecount();
});

decreasebtn.addEventListener("click", () => {
    count--;
    updatecount();
});

doubledecreament.addEventListener("click", () => {
    count-=2;
    updatecount();
});

resetbtn.addEventListener("click", () => {
    count = 0;
    updatecount();
});