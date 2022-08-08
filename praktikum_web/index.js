const app = document.getElementById("app");
const output = document.getElementById("output");
const btnGambar = document.getElementById("btn");
const input = document.getElementById("input");

const generatePicture = () => {
    if (input.value == "merah") {
        output.style.color = "red";
        output.innerText = "Warna merah";
    } else if (input.value == "black") {
        output.innerText = "warna hitam";
        output.style.color = "black";
    }
};

btnGambar.addEventListener("click", generatePicture);