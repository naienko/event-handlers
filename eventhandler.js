let fieldEl = document.querySelector("#entryfield");

let redBox = document.querySelector("#showme");
let goldBox = document.querySelector("#themoney");

fieldEl.addEventListener("keyup", function (event) {
    redBox.textContent = event.target.value;
    goldBox.textContent = event.target.value;
})