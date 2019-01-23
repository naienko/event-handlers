// let fieldEl = document.querySelector("#entryfield");

// let redBox = document.querySelector("#showme");
// let goldBox = document.querySelector("#themoney");

// fieldEl.addEventListener("keyup", function (event) {
//     redBox.textContent = event.target.value;
//     goldBox.textContent = event.target.value;
// })

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

audrey.style.width = `${window.scrollY/3}px`;
audrey.style.height = `${window.scrollY/4}px`;

// NOTE TO SELF: when passing a style attribute value via JS, make sure to interpolate such that it matches what would end up in a stylesheet
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})