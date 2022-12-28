import "./style.css";
import { crear_home_fragment } from "./home.js";
import { crear_menu_fragment } from "./menu"
import { crear_contact_fragment } from "./contact.js"

const body = document.querySelector("#body");
const main_content = document.querySelector("#content");

const btn_home = document.querySelector("#btn-home");
const btn_menu = document.querySelector("#btn-menu");
const btn_contact = document.querySelector("#btn-contact");

const bakground_home = "image_c";
const bakground_menu = "image_b";
const bakground_contact = "image_a";

function runContentSlider() {
    main_content.classList.add("slideToLeft");
    setTimeout(()=> main_content.classList.remove("slideToLeft"), 500);
}

function replaceBG(newBG) {
    let actualBG = body.classList.value;
    body.classList.remove(actualBG);
    body.classList.add(newBG);
}

window.addEventListener("load", () => {
    main_content.appendChild(crear_home_fragment());
    runContentSlider();
});

btn_home.addEventListener("click", () => {
    replaceBG(bakground_home);
    main_content.innerHTML = "";
    main_content.appendChild(crear_home_fragment());
    runContentSlider();
});

btn_menu.addEventListener("click", () => {
    replaceBG(bakground_menu);
    main_content.innerHTML = "";
    main_content.appendChild(crear_menu_fragment());
    runContentSlider();
});

btn_contact.addEventListener("click", () => {
    replaceBG(bakground_contact);
    main_content.innerHTML = "";
    main_content.appendChild(crear_contact_fragment());
    runContentSlider();
});