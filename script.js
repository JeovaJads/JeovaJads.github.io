function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let multi = document.getElementById("multi").value;
    let tol = document.getElementById("tole").value;
    let result = ((valueF01+valueF02)*multi);
    let tolf = (result*tol);
    let resultp = (result+tolf);
    let resultn = (result-tolf);
    alert("Fazendo cálculo ...");
    document.getElementById("resist").value = (result)
    document.getElementById("tolera").value = (+resultn+"-"+resultp);
}