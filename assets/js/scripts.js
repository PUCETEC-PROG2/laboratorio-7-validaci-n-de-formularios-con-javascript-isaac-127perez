// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {

        event.preventDefault(); 

        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }

    });

});


// Función principal de validación
function validateForm() {

    let isValid = true;

    // Nombre
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();

    if (valorNombre === '' || valorNombre.length < 2) {
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        nombre.classList.remove('no-valid');
    }


    // Apellido Paterno
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    const valorApellidoPaterno = apellidoPaterno.value.trim();

    if (valorApellidoPaterno === '' || valorApellidoPaterno.length < 2) {
        apellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else {
        apellidoPaterno.classList.remove('no-valid');
    }


    // Apellido Materno
    const apellidoMaterno = document.getElementById('apellidoMaterno');
    const valorApellidoMaterno = apellidoMaterno.value.trim();

    if (valorApellidoMaterno === '' || valorApellidoMaterno.length < 2) {
        apellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else {
        apellidoMaterno.classList.remove('no-valid');
    }


    // Cédula (10 dígitos)
    const cedula = document.getElementById('cedula');
    const valorCedula = cedula.value.trim();

    if (!/^\d{10}$/.test(valorCedula)) {
        cedula.classList.add('no-valid');
        isValid = false;
    } else {
        cedula.classList.remove('no-valid');
    }


    // Motivo
    const motivo = document.getElementById('motivo');
    const valorMotivo = motivo.value.trim();

    if (valorMotivo === '' || valorMotivo.length < 10) {
        motivo.classList.add('no-valid');
        isValid = false;
    } else {
        motivo.classList.remove('no-valid');
    }


    // Tipo de cuenta
    const tipoCuenta = document.getElementById('tipoCuenta');

    if (tipoCuenta.value === '') {
        tipoCuenta.classList.add('no-valid');
        isValid = false;
    } else {
        tipoCuenta.classList.remove('no-valid');
    }


    // Calle
    const calle = document.getElementById('calle');
    const valorCalle = calle.value.trim();

    if (valorCalle === '' || valorCalle.length < 3) {
        calle.classList.add('no-valid');
        isValid = false;
    } else {
        calle.classList.remove('no-valid');
    }


    // Número
    const numero = document.getElementById('numero');
    const valorNumero = numero.value.trim();

    if (valorNumero === '') {
        numero.classList.add('no-valid');
        isValid = false;
    } else {
        numero.classList.remove('no-valid');
    }


    // Intersección
    const interseccion = document.getElementById('interseccion');
    const valorInterseccion = interseccion.value.trim();

    if (valorInterseccion === '' || valorInterseccion.length < 3) {
        interseccion.classList.add('no-valid');
        isValid = false;
    } else {
        interseccion.classList.remove('no-valid');
    }

    return isValid;

}