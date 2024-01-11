const input = document.getElementById("inputnumber");
const displayValue = document.querySelector(".numberoddoreven");
numValue = "null";

input.addEventListener("input", (e) => {
if (input.value % 2 == 1) {
    numValue = "0dd"
}
else if (input.value % 2 == 0) {
    numValue = "even";
}
    displayValue.innerHTML = `<h2>${input.value} is ${numValue}</h2>`
})
