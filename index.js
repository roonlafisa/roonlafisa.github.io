
const invertBtn = document.getElementById("invert-btn");
const body = document.querySelector("body");
const html = document.querySelector("html");

console.log( invertBtn, body);



invertBtn.addEventListener("click", () => {
    html.classList = html.className === "inverted" ? "" : "inverted";
    invertBtn.innerText = invertBtn.innerText === "Inverted mode" ? "Normal mode" : "Inverted mode";
})