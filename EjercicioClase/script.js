let mensajeNota, mensaje

function CalcularNota() {
    /*Declaración de variables*/
    const p1 = Number(document.getElementById('p1').value) /*Trae el id del documento*/
    const p2 = Number(document.getElementById('p2').value)
    const p3 = Number(document.getElementById('p3').value)
    const exf = Number(document.getElementById('exf').value)
    const tgrupal = Number(document.getElementById('tgrupal').value)
    const mostrar = document.getElementById("resultado")
    const mostrarp1 = document.getElementById("mp1")

    /*Condicional if*/
    if (notaFinal > 5) {
        mensaje = "Aprobado"
    } else if (notaFinal == 5) {
        mensaje = "Casi"
    } else {
        mensaje = "Reprobado"
    }
    
    /*Condicional switch*/
    switch (p1) {
        case 1:
            mostrarp1.innerHTML += <hi></hi>
            
            break;
    
        default:
            break;
    }
    let notaP, notaFinal;
    /*Operaciones*/
    notaP = (p1 + p2 + p3)/3;
    console.log(notaP)

    notaFinal = notaP * 0.55 + exf * 0.30 + tgrupal * 0.15;
    console.log(notaFinal, mostrar);

    mostrar.textContent = `Su calificación final es: ${notaFinal.toFixed(2)} usted está: ${mensaje}`


} 