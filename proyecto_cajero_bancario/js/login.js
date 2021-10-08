var cuentas = [
    {
        id: 1,
        name: "Mauricio",
        saldo: 200,
        password: "1234",
    }, {

        id: 2,
        name: "Xime",
        saldo: 290,
        password: "5678",
    }, {
        id: 3,
        name: "Oscar",
        saldo: 67,
        password: "9101",
    }
];
function ingresar() {
    var nombre = document.getElementById("nombreUsuario").value;
    var contraseña = document.getElementById("contraseña").value;
    /*for (var i = 0; i < cuentas.length; i++) {
        if(nombre == cuentas[i].name){
            if(contraseña == cuentas[i].password){
                location = "usuario.html";
                indice = cuentas[i].id;
                break;
            } else {
                alert("Contraseña incorrecta");
            }
        } else {
        alert("Usuario incorrecto :)");
    }
}*/
    if (nombre == "Mauricio") {
        if (contraseña == "1234") {
            location = "usuario.html";
        } else {
            alert("Contraseña incorrecta")
        }
    } else if (nombre == "Xime") {
        if (contraseña == "5678") {
            location = "usuario.html";
        } else {
            alert("Contraseña incorrecta")
        }
    } else if (nombre == "Oscar") {
        if (contraseña == "9101") {
            location = "usuario.html";
        } else {
            alert("Contraseña incorrecta")
        }
    } else {
        alert("Intente nuevamente :)");
    }
}

function saldo() {
    //var usuario = usuario.saldo;
    // usuario.saldo = document.getElementById(saldo);

    //cuentas[index] = usuario;
    alert("jorge");
}
function depositar(){
    alert("romero");
}

function extraer(){
    alert("lopez");
}

// usuario.saldo = document.getElementById(saldo);


// cuentas[index] = usuario;

// //variable index, validación, igualar index al id
// // var index;

// function login(form){
//     if (form.InputName.value == "Mauricio"){
//         if (form.InputPassword.value == "1234"){
//             location = "/html/usuario.html"
//         usuario = cuentas[0];
//		} else {

// Ejemplo

// modulo de usuario
// contraseña_____________
// boton -> funcion acceso


// funcion acceso
// if(contraseña = password-dato que tenemos alojado en el arreglos, ){
//     mensaje:"La conraseña es correcta";
//     link = usuario.html
// }
// else{
//     mensaje:"valio el acceso"
// };

// var account [
//     datso, por, comas
// ];
// aconut.legth -> resultado 3

// var

// 