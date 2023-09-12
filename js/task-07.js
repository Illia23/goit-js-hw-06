document.querySelector('body').style.backgroundColor = '#eaf1fad0';

const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", fontSize);

function fontSize(event) {
    spanText.style.fontSize = event.currentTarget.value + "px";
    

};
