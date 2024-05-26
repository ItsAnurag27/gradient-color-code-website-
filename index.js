let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("MyButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#000;";
let rgb2 = "#fff";

const hexaValues = () => {
    let myhexaValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myhexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handleButton1 = () => {
    rgb1 = hexaValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;  // Set background-image using style
    copyDiv.textContent = `Color Code: ${rgb1},${rgb2}`;  // Display color code as well
};

const handleButton2 = () => {
    rgb2 = hexaValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.textContent = `Color Code: ${rgb1},${rgb2}`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
})