const input = document.getElementById("inputnumber");
const displayValue = document.querySelector(".numberoddoreven");
numValue = "null";

input.addEventListener("input", (e) => {
if (input.value % 2 == 1) {
    displayValue.classList.remove("green");
    displayValue.classList.add("red");
    numValue = "0dd";
}
else if (input.value % 2 == 0) {
    displayValue.classList.add("green");
    numValue = "even";
}
    displayValue.innerHTML = `<h2>${input.value} is ${numValue}</h2>`
})
