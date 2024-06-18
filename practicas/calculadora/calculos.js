function calcular(operacion)
{   /*el getElementByID toma el valor especificamente de lo que quiero, en este caso lo que coloque en las cajas*/
    var val1 = parseFloat(document.getElementById("v1").value)/* como era cadena STRING con parse FLOAT lo convierto a numerico*/
    var val2 = parseFloat(document.getElementById("v2").value)
    
    var x=0
    var res = document.getElementById("res")

    if (isNaN (val1) || isNaN (val2)) /*Verifica si los valores son numericos*/
        {
            res.innerHTML = "Datos nulos o incorrectos"
            if (isNaN (val1))
                {
                    document.getElementById("v1").focus()
                }
            else
            {
                    document.getElementById("v2").focus()
            }
            return
        } 
        
        if (operacion === "Suma")
        {
            x = val1 + val2
        } 
        else if (operacion === "Resta")
        {
            x = val1 - val2
        }
        else if (operacion === "Multiplicacion")
        {
            x = val1 * val2
        }
        else if (operacion  ==="Division")
        {
        if (val2 !== 0)
        {
            x = val1 / val2;
        }
        else 
        {
            x = "Error - División por cero";
        }
    }
    
        res.innerHTML = x  /*Con esto inserto informacion en una etiqueta, asigno valor*/
}