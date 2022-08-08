const app = document.getElementById("app");
const btn_img = document.getElementById("btn_img");
const input = document.getElementById("input");
const img = document.getElementById("img");

const generatePicture = () => {
    const gas = input.value.toUpperCase();
    if (gas == "HARIMAU") {
        img.src = "./praktikum_web/img/harimau_siliwangi.jpg";
    } else if (gas == "KUCING") {
        img.src = "./praktikum_web/img/kucing.jpg";
    } else if (gas == "BURUNG" || gas == "MANUK") {
        img.src = "./praktikum_web/img/manuk.jpg";
    } else {
        img.src = "./praktikum_web/img/Manusia.jpg";
    }
};

btn_img.addEventListener("click", generatePicture);