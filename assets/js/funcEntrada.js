
//Calcular
function calcularTotalPagar() {
    let cantidad = document.getElementById('cantidad').value;
    let distancia = document.getElementById('distancia').value;
  
    let totalPagar = 0;
    if (distancia === '200km o mas') {
      totalPagar = cantidad * (200 * 0.2);
    } else if (distancia === '150km') {
      totalPagar = cantidad * (200 * 0.5);
    } else if (distancia === '80km') {
      totalPagar = cantidad * (200 * 0.75);
    } else {
      totalPagar = 200*cantidad;
    }
    document.getElementById('resumen').innerText = 'Total a Pagar: $' + totalPagar;

}

//Borrar
  function borrarCampos() {
    const formulario = document.getElementById('formulario');
    formulario.reset();
    const parrafo = document.getElementById('resumen');
        parrafo.textContent = 'Total a Pagar: $';
  }
//Validar NOmbre
  function validarNombre() {
    const nombreInput = document.getElementById('inputNombre');
    const nombreValue = nombreInput.value.trim();
  
    if (nombreValue === '') {
      alert('El campo de nombre no puede estar vacío');
      nombreInput.style.borderColor = 'red';
      return false;
    }
  
    if (!nombreValue.match(/^[A-ZÁÉÍÓÚ][a-záéíóú]+$/)) {
      alert('El nombre debe comenzar con mayúscula');
      nombreInput.style.borderColor = 'red';
      return false;
    }
  
    nombreInput.style.borderColor = 'green';
    return true;
  }
  
//Validar Apellido
  function validarApellido() {
    const apellidoInput = document.getElementById('inputApellido');
    const apellidoValue = apellidoInput.value.trim();
  
    if (apellidoValue === '') {
      alert('El campo de apellido no puede estar vacío');
      apellidoInput.style.borderColor = 'red';
      return false;
    }
  
    if (!apellidoValue.match(/^[A-ZÁÉÍÓÚ][a-záéíóú]+$/)) {
      alert('El apellido debe comenzar con mayúscula');
      apellidoInput.style.borderColor = 'red';
      return false;
    }
  
    apellidoInput.style.borderColor = 'green';
    return true;
  }
  
//Validar Email
  function validarEmail() {
    const emailInput = document.getElementById('inputEmail');
    const emailValue = emailInput.value.trim();
  
    if (emailValue === '') {
      alert('El campo de email no puede estar vacío');
      emailInput.style.borderColor = 'red';
      return false;
    }
  
    if (!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert('El email debe tener un formato válido');
      emailInput.style.borderColor = 'red';
      return false;
    }
  
    emailInput.style.borderColor = 'green';
    return true;
  }
  
//validar todo el fomulario
  function validarFormulario() {
    const validarNom = validarNombre();
    const validarApe = validarApellido();
    const validarEm = validarEmail();
  
    if (validarNom && validarApe && validarEm) {
    return true;
    } else {
      return false;
    }
  }

var validarForm = document.getElementById("btnResumen");
validarForm.addEventListener('click',validarFormulario)

  var botonResumen = document.getElementById("btnResumen");
  botonResumen.addEventListener('click',calcularTotalPagar )

  var botonBorrar= document.getElementById("btnBorrar");
  botonBorrar.addEventListener('click', borrarCampos)


