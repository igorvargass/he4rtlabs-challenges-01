function calculate(){
    var vprojeto = document.getElementById("vprojeto").value
    var hrtrab = document.getElementById("hrtrab").value
    var diastrab = document.getElementById("diastrab").value
    var diasferias = document.getElementById("diasferias").value
    var x = document.getElementById("resultado");

    var valorHora = (vprojeto / (diastrab * 4 * hrtrab) ) + ( ( diasferias * diastrab * hrtrab ) )
   
    
    console.log("Resultado: " + valorHora);
    document.getElementById("result").innerHTML = valorHora;
    
}