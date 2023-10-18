let num1, num2, num3;
let mayor = 0

num1 = Number(prompt('Ingresa el número 1: '));
num2 = Number(prompt('Ingresa el número 2: '));
num3 = Number(prompt('Ingresa el número 2: '));

if ((num1 > num2) && (num1 > num3)) {
    mayor = num1;
} else if ((num2 > num3) && (num2 > num1)) {
    mayor = num2; 
} else {
    mayor = num3;
}

alert('El número mayor es: ' + mayor)