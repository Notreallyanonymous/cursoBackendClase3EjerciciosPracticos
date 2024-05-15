// Ejercicios unido
const readline =  require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciar(){
rl.question("Digite la funcion entre 1-8 ", (funciones)=>{
    switch(parseFloat(funciones)){
        case 1:
            numeros()
            break;
        case 2:
            comparisionNumerico()
            break;
        case 3:
            factorial();
            break;
        case 4: 
            parOImpar()
        break;
        case 5:
            color()
        break;
        case 6:
            switchMeses()
        break;
        case 7:
            switchVehiculos()
        break;
        default:
            console.log("No seleciono una function valida")
    }
})

}

iniciar()
function color() {
    rl.question("Ingrese el primer color: ", (color1) => {
        rl.question("Ingrese el segundo color: ", (color2) => {
            if ((color1.toLowerCase() === "azul" && color2.toLowerCase() === "amarillo") ||
                (color1.toLowerCase() === "azul" && color2.toLowerCase() === "rojo") ||
                (color1.toLowerCase() === "rojo" && color2.toLowerCase() === "amarillo")) {
                console.log("La mezcla genera el color verde");
            } else {
                console.log("La combinación no se encuentra disponible");
            }
            rl.question("Desea ver otra función? y/n: ", (respuesta) => {
                if (respuesta.toLowerCase() === "y") {
                    iniciar();
                } else {
                    console.log("Se terminó la funciónes");
                    rl.close();
                }
            });
        });
    });
}

function switchMeses(){


rl.question("Digite el numero de mes a conocer ", (nMes)=>{
    let nombreMes
    switch(parseInt(nMes)){
    case 1:
    nombreMes = "Enero"
    break;
    case 2:
    nombreMes = "Febrero"
    break;
    case 3:
    nombreMes = "Marzo"
    break;
    }
    console.log(nombreMes)
    rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
        if(respuesta == "y"){
            iniciar()
        }
        else{
            console.log("Se termino la funciónes")
            rl.close()
        }
    })
})

}

function switchVehiculos(){

rl.question("Digite la categoria del vehiculo ", (categoria)=>{
    let tipoDeVehiculo
    switch(categoria){
    case "Moto":
        tipoDeVehiculo = "Moticileta"
    break;
    case "Auto":
        tipoDeVehiculo = "Automovil"
    break;
    case "Camion":
    nombreMes = "Super Camion"
    break;
    default:
        tipoDeVehiculo ="La Categoria no existe"
    break;
    }
    console.log(tipoDeVehiculo)
    rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
        if(respuesta == "y"){
            iniciar()
        }
        else{
            console.log("Se termino la funciónes")
            rl.close()
        }
    })
})

}

function numeros() {
    rl.question('Ingrese un número: ', (numero) => {
      if (isNaN(numero)) {
        console.log('¡Error! Por favor, ingrese un número válido.');
      } else if (numero > 0) {
        console.log('El número ingresado es positivo.');
      } else if (numero < 0) {
        console.log('El número ingresado es negativo.');
      } else {
        console.log('El número ingresado es cero.');
      }
      rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
        if(respuesta == "y"){
            iniciar()
        }
        else{
            console.log("Se termino la funciónes")
            rl.close()
        }
    })
    });
  }

  function comparisionNumerico() {
    rl.question('Ingrese el primer número: ', (numero1) => {
      rl.question('Ingrese el segundo número: ', (numero2) => {
        rl.question('Ingrese el tercer número: ', (numero3) => {
          numero1 = parseFloat(numero1);
          numero2 = parseFloat(numero2);
          numero3 = parseFloat(numero3);
  
          if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            console.log('¡Error! Por favor, ingrese números válidos.');
          } else {
            if (numero1 === numero2 && numero2 === numero3) {
              console.log('Los tres números son iguales.');
            } else {
              let mayor, medio, menor;
  
              // Comparaciones para encontrar el mayor, el medio y el menor
              if (numero1 >= numero2 && numero1 >= numero3) {
                mayor = numero1;
                medio = numero2 >= numero3 ? numero2 : numero3;
                menor = numero2 <= numero3 ? numero2 : numero3;
              } else if (numero2 >= numero1 && numero2 >= numero3) {
                mayor = numero2;
                medio = numero1 >= numero3 ? numero1 : numero3;
                menor = numero1 <= numero3 ? numero1 : numero3;
              } else {
                mayor = numero3;
                medio = numero1 >= numero2 ? numero1 : numero2;
                menor = numero1 <= numero2 ? numero1 : numero2;
              }
  
              console.log(`El número mayor es: ${mayor}`);
              console.log(`El número del medio es: ${medio}`);
              console.log(`El número menor es: ${menor}`);
            }
          }
          rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
            if(respuesta == "y"){
                iniciar()
            }
            else{
                console.log("Se termino la funciónes")
                rl.close()
            }
        })
        });
      });
    });
  }
  
  function parOImpar() {
    rl.question('Ingresa un número para determinar si es par o impar: ', (num) => {
      num = parseInt(num);
  
      if (isNaN(num)) {
        console.log('Por favor, ingresa un número válido.');
      } else {
        if (num % 2 === 0) {
          console.log(`${num} es un número par.`);
        } else {
          console.log(`${num} es un número impar.`);
        }
      }
  
      rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
        if(respuesta == "y"){
            iniciar()
        }
        else{
            console.log("Se termino la funciónes")
            rl.close()
        }
    })
    });
  }

  //EJERCICIO 3
function factorial() {
    rl.question('Ingresa un número para calcular su factorial: ', (num) => {
      num = parseInt(num);
  
      if (isNaN(num) || num < 0) {
        console.log('Por favor, ingresa un número entero positivo.');
        mostrarMenu();
        return;
      }
  
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
  
      console.log(`El factorial de ${num} es: ${factorial}`);
      rl.question("Desea ver otra function? y/n: " , (respuesta)=>{
        if(respuesta == "y"){
            iniciar()
        }
        else{
            console.log("Se termino la funciónes")
            rl.close()
        }
    })
    });
  }