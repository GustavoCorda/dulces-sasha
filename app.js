function enviarJs() {
  let $nombre = document.getElementById("nombre").value;
  let $email = document.getElementById("email").value;
  let $texto = document.getElementById("texto").value;

  console.log($nombre);
  console.log($email);
  console.log($texto);
}

const $passwords = [
  { mail: "matias@mail.com", pass: "profematias" },
  { mail: "nico@gmail.com", pass: "nicolas123" },
  { mail: "sasha@hotmail.com", pass: "sashamail" },
];

function autenticacion() {
  let password = document.getElementById("pass").value;
  let maill = document.getElementById("mailLogin").value;

  const $passwords = [
    { mail: "matias@mail.com", pass: "profematias" },
    { mail: "nico@gmail.com", pass: "nicolas123" },
    { mail: "sasha@hotmail.com", pass: "sashamail" },
  ];

  for (lala of $passwords) {
    if (lala.mail == maill && lala.pass == password) {
      document.getElementById("loguearse").style.display = "none";
      console.log("Bienvenido");
      break;
    } else {
      console.log("Datos incorrectos");
    }
  }
}

// $passwords.forEach(element => {

//   console.log(element)

//   if (maill == mail  && password == pass) {
//     console.log('Ingreso Exitoso desde array')
//   } else {
//     console.log('Los datos de inicio ingresados son incorrectos desde array')
//   }

// });

// }

// function autenticacion(){

//   let password = document.getElementById('pass').value
// let maill  = document.getElementById('mailLogin').value
// const $passwordCreado = 'gustavo123'
// const $mailCreado = 'gustavocorda@mail.com'

//   if(password == $passwordCreado && maill == $mailCreado){

//     console.log('Ingreso Exitoso')

//   }else{
//     console.log('Los datos de inicio ingresados son incorrectos')
//   }
// }

// document.getElementById('btn-login').addEventListener( 'click', login )

document.getElementById("pass").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    autenticacion();
  }
});
