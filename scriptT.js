document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideMenuIcon) {
            closeMenu();
        }
    });

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    function closeMenu() {
        menu.classList.remove('open');
    }
});

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`

}

function pay() {
    if (products.length === 0) {
        alert("No hay productos en la lista de la compra.");
        return;
    }    
// Mostrar los productos antes de solicitar la información de la tarjeta
    window.alert(products.join(", \n"));
    // Mostrar modal para la información de la tarjeta
    mostrarModal();
}

function mostrarModal() {
    // Pedir al usuario que introduzca los datos
    const titular = prompt("Introduce el Titular de la Tarjeta:");

    // Verificar si se canceló la solicitud de titular
    if (titular === null) {
        return; // Salir de la función si se cancela
    }

    const numero = prompt("Introduce el Número de la Tarjeta:");

    // Verificar si se canceló la solicitud de número
    if (numero === null) {
        return; // Salir de la función si se cancela
    }

    const caducidad = prompt("Introduce la Fecha de Caducidad:");

    // Verificar si se canceló la solicitud de fecha de caducidad
    if (caducidad === null) {
        return; // Salir de la función si se cancela
    }

    const codigo = prompt("Introduce el Código:");

    // Verificar si se canceló la solicitud de código
    if (codigo === null) {
        return; // Salir de la función si se cancela
    }

    // Una vez que se ingresa la información de la tarjeta, se puede hacer lo que necesites con ella
    // Por ejemplo, podrías enviarla a un servidor para procesar el pago
    // Aquí puedes agregar el código para procesar el pago con la información de la tarjeta
    // Después de procesar el pago, podrías mostrar un mensaje de confirmación al usuario
    window.alert("¡Pago procesado con éxito!");
}
