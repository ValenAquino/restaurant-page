// TO DO: usar una api de google maps para hacer lo mismo pero bien

const source_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8461712059666!2d-58.37246648514869!3d-34.60805116523374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352cbe276f75%3A0xe16921ef0545f86d!2sCasa%20Rosada!5e0!3m2!1ses!2sar!4v1672033761751!5m2!1ses!2sar";

const chef_name = "Auguste Gusteau";
const profession = "Chef";
const phone = "15-1234-5678";
const mail = "totallyRealEmail@notFake.com";

function crear_contact_img() {
    let contact_img = document.createElement("IMG");
    contact_img.setAttribute("src", "./assets/AugusteGusteau.png");
    contact_img.setAttribute("alt", "Auguste Gusteau");
    return contact_img;
}

function crear_contact_data() {
    let contact_data = document.createElement("DIV");
    let data_name = document.createElement("H2");
    let data_profession = document.createElement("H3");
    let data_phone = document.createElement("P");
    let data_mail = document.createElement("P");

    data_name.innerText = chef_name;
    data_profession.innerText = profession;
    data_phone.innerText = phone;
    data_mail.innerText = mail;

    contact_data.classList.add("datos");
    contact_data.appendChild(data_name);
    contact_data.appendChild(data_profession);
    contact_data.appendChild(data_phone);
    contact_data.appendChild(data_mail);

    return contact_data;
}

function crear_contact_card() {
    let contact_card = document.createElement("DIV");
    let contact_img = crear_contact_img();
    let contact_data = crear_contact_data();

    contact_card.classList.add("contact-card");
    contact_card.appendChild(contact_img);
    contact_card.appendChild(contact_data);

    return contact_card;
}

function crear_iframe_map() {
    let iframe_map = document.createElement("IFRAME");
    iframe_map.setAttribute("src", source_map);
    iframe_map.setAttribute("loading", "lazy");
    iframe_map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    return iframe_map;
}

function crear_contact_fragment() {
    let contact_fragment = document.createDocumentFragment();
    let contact_content = document.createElement("DIV");
    let contact_card = crear_contact_card();    
    let iframe_map = crear_iframe_map();
 
    contact_content.classList.add("contact");
    contact_content.appendChild(contact_card);
    contact_content.appendChild(iframe_map);
    
    contact_fragment.appendChild(contact_content);
    return contact_fragment;
}

export {
    crear_contact_fragment
};