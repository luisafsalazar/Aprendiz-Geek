let cn = 0;
let cp = 0;
let cneg = 0;
let num;

for (let i = 1; i <= 10; i++) {
    num = Number((prompt('Ingrese número: ')));
    if (num == 0) {
        cn = cn + 1;
    } else if (num < 0) {
        cneg = cneg + 1;
    } else{
        cp = cp + 1;
    };
        
}

alert(`-Cantidad de números positivos: ${cp}
-Cantidad de números negativos: ${cneg}
-Cantidad de números neutros: ${cn}`);