const reserva = 2000;
let bart, homero, lisa;

bart = 0.60;
homero = 0.40;
lisa = 0.10;

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');

function calcularPago() {
    let total = cantidad.value * reserva;
    switch (categoria.value) {
        case "bart":
            total = total - (total * bart)
            break;
        case "homero":
            total = total - (total * homero)
            break;
        case "lisa":
            total = total - (total * lisa)
            break;
    }
    total_p.innerHTML = `Total a Pagar: $ ${total}`;
}
btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})
btnBorrar.addEventListener('click', () => formulario.reset());

function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('ingresar datos');
        return
    }
    else if (nombre == '') {
        alert('Ingresa Nombre')
        return
    }
    else if (apellido == '') {
        alert('Ingresa Apellido')
        return
    }
    else if (correo == '') {
        alert('Ingresa Correo')
        return
    }
    else if (cantidad.value == '' || cantidad.value == 0) {
        alert('Ingresa Cantidad')
        return
    }
}

