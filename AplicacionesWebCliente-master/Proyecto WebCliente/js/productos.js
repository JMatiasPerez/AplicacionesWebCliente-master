const productos = [

    {
        name: "Modelo Alaska Dorado Lente Marron",
        precio: "210.000",
        img: "img/Productos/Alaska_brn.webp",
        descripcion:"Anteojos Alaska Dorado Lente Marron"
    },
    {
         name: "Modelo Alaska dorado lente verde",
        precio: "180.000",
        img: "img/Productos/Alaska_g15.webp",
        descripcion:"Anteojos Alaska Dorado Lentes Verde"
    },
{
         name: "Modelo Alaska dorado lente Amarilla",
        precio: "180.000",
        img: "img/Productos/alaska_gold_org.webp",
        descripcion:"Anteojos Alaska Dorado Lentes Amarillas"
    },
    {
         name: "Modelo Alaska dorado lente Negra",
        precio: "210.000",
        img: "img/Productos/Alaska_s10.webp",
        descripcion:"Anteojos Alaska Dorado Lente Negra"
    },
    {
         name: "Modelo Alaska dorado lente Tostado",
        precio: "210.000",
        img: "img/Productos/alaska_tostado.webp",
        descripcion:"Anteojo Alaska dorado Lente Tostado"
    },
    {
         name: "Anteojos Alaska Fotocromatico Dorado Lente Azul Espejada",
        precio: "250.000",
        img: "img/Productos/Alaska_blueM.webp",
        descripcion:"Anteojos Alaska Fotocromatico Dorado Lente Azul Espejada"
    },
    {
         name: "Modelo Alaska dorado lente Amarilla Espejada",
        precio: "190.000",
        img: "img/Productos/Alaska_goldM.webp",
        descripcion:"Anteojos Alaska Dorado lente Amarilla Espejada"
    },
    {
         name: "Modelo Belice Dorado Lente Marron",
        precio: "210.000",
        img: "img/Productos/Belice_brn.webp",
        descripcion:"Anteojos Belice Dorado lente Marron"
    },
    {
         name: "Modelo Belice Dorado Lente Verde",
        precio: "210.000",
        img: "img/Productos/Belice_grn.webp",
        descripcion:"Anteojos Belice Dorado lente verde"
    },
    {
         name: "Modelo Mallorca Dorado ente Negra",
        precio: "210.000",
        img: "img/Productos/Menorca_s10.webp",
        descripcion:"Anteojos Menorca Dorado lente negra"
    },
    {
         name: "Estuche Forma Lingote Dorado",
        precio: "210.000",
        img: "img/Productos/Estuche_lingote.webp",
        descripcion:"Estuche Para Anteojos Forma De Lingote Dorado"
    },
    {
         name: "Liquido Limpia Cristales",
        precio: "20.000",
        img: "img/Productos/Liquido.webp",
        descripcion:"Liquido Limpia Cristales"
    }
];

const grid = document.querySelector('section');

function ProductCard(productos) {
    const card = document.createElement('article');
    card.classList.add('main-catalogo-productos');
    
    const img = document.createElement('img');
    img.src = productos.img;
    img.alt = productos.descripcion;

    const name = document.createElement('h3');
    name.textContent = productos.name;

    const precio = document.createElement('p');
    precio.textContent = `$${productos.precio}`;

const button = document.createElement('button');
button.textContent = 'Agregar al carrito';

    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(name);
    card.appendChild(button);

    return card;

};

productos.forEach(producto => {
    const card = ProductCard(producto);
    grid.appendChild(card);
}  );
