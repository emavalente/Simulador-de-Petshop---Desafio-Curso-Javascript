// Array Canil. Es una coleccion de objetos literales: Canil
const canil = [{
        canil: "1",
        tipo: "Canino",
        nombre: "Jackson",
        raza: "Pitbull",
        color: "Marrón",
        adoptado: false
    },
    {
        canil: "2",
        tipo: "Canino",
        nombre: "Jina",
        raza: "Caniche",
        color: "Blanco",
        adoptado: false
    },
    {
        canil: "3",
        tipo: "Felino",
        nombre: "Neko",
        raza: "Persa",
        color: "Amarillo",
        adoptado: false
    },
    {
        canil: "4",
        tipo: "Canino",
        nombre: "Lolo",
        raza: "Delmon",
        color: "Negro",
        adoptado: false
    },
    {
        canil: "5",
        tipo: "Felino",
        nombre: "Rocco",
        raza: "Americano",
        color: "Marrón",
        adoptado: false
    }
];
console.log(canil);

// Clase constructora de objeto: Mascota.
class Mascota {
    constructor(tipo, nombre, raza, adoptado) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.raza = raza;
        this.adoptado = adoptado;
    }
};


// Clase constructora de objeto: Usuario.
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.mascotas = [];
    };
    // Agrega una mascota al array mascotas del usuario.
    adoptarMascota(mascota) {
        this.mascotas.push(mascota);
    };
};

let indice = 0;
let adoptado = false;

//Inicio del Programa.
alert('Bienvenido a la tienda de mascotas\n Aquí podrás elegir una mascota que te guste y llevarla a casa!');

iniciar = confirm('Deseas adoptar una mascota?');

if (iniciar) {

    const nuevoUsuario = new Usuario(prompt('Como te llamas?...Ingresa Tu nombre:'));
    console.log(nuevoUsuario);
    alert(nuevoUsuario.nombre + ', Observá con atención estas caritas...');

    for (const animal of canil) {

        canil[indice].adoptado = confirm('Canil Nº' + canil[indice].canil + ':\nNombre: ' + animal.nombre + '\nTipo: ' + animal.tipo + '\nRaza: ' + animal.raza + '\n\nQuieres adoptarlo?');

        if (canil[indice].adoptado) {
            const nuevaMascota = new Mascota(animal.tipo, animal.nombre, animal.raza, animal.adoptado);
            console.log(nuevaMascota);
            nuevoUsuario.adoptarMascota(nuevaMascota);
            console.log(nuevaMascota.adoptado);
            delete canil[indice];
        }
        indice += 1;
    };
    console.log(nuevoUsuario.mascotas);
    if (nuevoUsuario.mascotas.length !== 0) {
        let tusMascotas = [];
        for (const mascota of nuevoUsuario.mascotas) {
            tusMascotas.push(mascota.nombre);
        }
        alert('Tus Nuevas Mascotas estan felices! Gracias por Adoptar a:\n' + tusMascotas.join(', '));
        console.log(tusMascotas);
    } else {
        alert('...No es que ibas a adoptar??... vuelve pronto!');
    };
} else {
    alert('No seas Malo! Adoptá y cambiá sus vidas!\n Piensalo bien y vuelve pronto!')
};