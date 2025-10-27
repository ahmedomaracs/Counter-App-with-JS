const displayCount = document.getElementById("count");
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");

let count = 0;

function updatecount() {

    displayCount.textContent = count;
    displayCount.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
}

increasebtn.addEventListener("click", () => {
    count++;

    updatecount();
});

decreasebtn.addEventListener("click", () => {
    count--;
    updatecount();
});

resetbtn.addEventListener("click", () => {
    count = 0;
    updatecount();
});