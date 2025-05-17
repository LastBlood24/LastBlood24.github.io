function funcionControles() {
    let varCadena = "Detalle de los controles:";
    // Acceso al Formulario
    let formulario = document.forms["frmControles"];
    // Acceso a los controles
    let varRadio = formulario.elements["groupRadio"];
    varCadena += "\n - Radio: " + varRadio.value;
    let varCheck = formulario.elements["groupCheck"];
    varCadena += "\n - Check: ";
    for (let i = 0; i < varCheck.length; i++) {
        if (varCheck[i].checked) {
            varCadena += varCheck[i].value + " ";
        }
    }
    let varBasic = formulario.elements["selectBasic"];
    varCadena += "\n - Basic: " + varBasic.value;
    let varMultiple = formulario.elements["selectmultiple"];
    varCadena += "\n - Multiple: ";
    for (let i = 0; i < varMultiple.length; i++) {
        if (varMultiple[i].selected) {
            varCadena += varMultiple[i].value + " ";
        }
    }
    // Otros controles
    let varFile = formulario.elements["varFile"];
    varCadena += "\n - Archivo: " + varFile.value;
    let varColor = formulario.elements["varColor"];
    varCadena += "\n - Color: " + varColor.value;
    let varDate = formulario.elements["varDate"];
    varCadena += "\n - Fecha: " + varDate.value;
    let varTime = formulario.elements["varTime"];
    varCadena += "\n - Tiempo: " + varTime.value;
    let varWeek = formulario.elements["varWeek"];
    varCadena += "\n - Semana: " + varWeek.value;
    let varMonth = formulario.elements["varMonth"];
    varCadena += "\n - Mes: " + varMonth.value;
    let varNumber = formulario.elements["varNumber"];
    varCadena += "\n - Número: " + varNumber.value;
    let varRange = formulario.elements["varRange"];
    varCadena += "\n - Rango: " + varRange.value;
    alert(varCadena);
}
