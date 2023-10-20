console.log("si")

function cicloFor() {
    console.log("Conectada")
    /*Donde inicio, condición e incremento*/
    for (let i = 1; i < 10; i++) {
        i = i + 1;
        console.log("el número es ",i)
    }
}

function cicloWhile() {
    /*Inicializo fuera de la estructura*/
    let contador = 0;
    while (contador <= 10) {
        console.log("El contador es: ", contador);
        contador = contador + 1
    }

    console.log("Conectada al While")
}

function cicloDoWhile() {
    let x = 1;
    do {
        console.log("El Do While es: ", x);
        x++;
    } while (x <= 10);
}

