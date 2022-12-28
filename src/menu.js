const platos = [
    "Albondigas",
    "Creppe de Pollo",
    "Ñoquis",
    "Ravioles de Ricota",
    "Ravioles de Verdura",
    "Raviolon de Calabaza",
    "Ravioles de salmon con crema de langostino",
    "Ravioles de Hongos",
    "Risotto",
    "Rissoto con vegetales",
    "Tallarin a la Parisien"
];

function crear_numero_random() {
    let min = 295;
    let max = 9824;
    return Math.floor(Math.random() * (max - min) + min);
}

function crear_menu_item(plato) {
    let menu_item = document.createElement("DIV");
    let plato_img = document.createElement("IMG");
    let nombre_plato = document.createElement("H4");
    let precio_plato = document.createElement("H3");
    let indice_plato = platos.findIndex((unPlato) => unPlato == plato) + 1;
    
    plato_img.setAttribute("src", `./assets/platos/${indice_plato}.jpg`);
    plato_img.setAttribute("alt", plato);

    nombre_plato.innerText = plato;
    precio_plato.innerText = "$" + crear_numero_random();

    menu_item.appendChild(plato_img);
    menu_item.appendChild(nombre_plato);
    menu_item.appendChild(precio_plato);
    menu_item.classList.add("menu-item");

    return menu_item;
}

function crear_menu_fragment() {
    let menu_fragment = document.createDocumentFragment();
    let menu_content = document.createElement("DIV");

    platos.forEach((plato) => {
        let plato_item = crear_menu_item(plato);
        menu_content.appendChild(plato_item);
    });

    menu_content.classList.add("menu");
    menu_fragment.appendChild(menu_content);

    return menu_fragment;
}

export {
    crear_menu_fragment
};