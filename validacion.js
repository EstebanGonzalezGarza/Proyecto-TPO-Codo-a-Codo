function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var dni = document.getElementById("dni").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var nacionalidad = document.getElementById("nacionalidad").value;
    var paisResidencia = document.getElementById("pais_residencia").value;
    var comentarios = document.getElementById("comentarios").value;
  
    if (nombre.length < 2) {
      alert("El nombre debe tener al menos 2 caracteres.");
      return false;
    }
  
    if (apellido.length < 2) {
      alert("El apellido debe tener al menos 2 caracteres.");
      return false;
    }
  
    if (!/^[0-9]+$/.test(dni)) {
      alert("El DNI debe contener solo números.");
      return false;
    }
  
    if (dni.length !== 8) {
      alert("El DNI debe tener 8 dígitos.");
      return false;
    }
  
    if (typeof nacionalidad !== "string") {
      alert("La nacionalidad debe ser un valor de texto.");
      return false;
    }
  
    if (typeof paisResidencia !== "string") {
      alert("El país de residencia debe ser un valor de texto.");
      return false;
    }
  
    // Validación de formato de fecha (YYYY-MM-DD)
    var fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fechaNacimiento)) {
      alert("El formato de fecha de nacimiento debe ser YYYY-MM-DD.");
      return false;
    }
  
    // Validación de dirección de correo electrónico
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (comentarios !== "" && !correoRegex.test(comentarios)) {
      alert("La dirección de correo electrónico en el campo de comentarios no es válida.");
      return false;
    }
  
    return true;
  }