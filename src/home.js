const significado = `
    il Mattone es el código de Honor de la mafia italiana, la obstinación al silencio, 
    esto es la decisión de no hablar de cualquier cosa que se haya visto u oído, 
    incluso en su propia contra y aún cuando el acusado es inocente. 
    La il Mattone es el modo extremo de Lealtad y solidaridad frente a la autoridad. 
    Uno de sus principios absolutos reza que es profundamente degradante y vergonzoso traicionar, 
    incluso a su enemigo más mortal a las autoridades. En la cultura de la Mafia, romper el juramento de 
    il Mattone es castigable con la muerte”.`;

const quienes_somos = `
    Basada en una cocina de alta calidad, donde se respiran Buenos Aires de Trattoria Italiana, 
    Cucina D'onore transmite un producto de excelente nivel, acompañado de la cálida y personalizada 
    atención a sus clientes. Cuenta con una distinguida carta, donde las pastas artesanales y frutos
    de mar son protagonistas.`;

function crear_item(titulo, descripcion) {
    let item = document.createElement("DIV");
    let element_titulo = document.createElement("H2");
    let element_descripcion = document.createElement("P");

    element_titulo.innerText = titulo;
    element_descripcion.innerText = descripcion;
    
    item.classList.add("home-item");
    item.appendChild(element_titulo);
    item.appendChild(element_descripcion);

    return item;
}

function crear_home_fragment() {
    let home_fragment = document.createDocumentFragment();
    let home_content = document.createElement("DIV");
    let significado_item = crear_item("Qué significa il Mattone", significado);
    let quienes_somos_item = crear_item("Quienes Somos", quienes_somos);
    
    home_content.classList.add("home");
    home_content.appendChild(significado_item);
    home_content.appendChild(quienes_somos_item);
    
    home_fragment.appendChild(home_content);
    return home_fragment;
}

export {
    crear_home_fragment
};