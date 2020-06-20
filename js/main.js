function send(){
    var emission=0;
    var km = document.getElementById("km").value;
    //assert(typeof km === "number");
    var veiculo = document.getElementById("veiculo").value;
    var gas = document.getElementById("gas").value;
    if (veiculo=="Carro" && gas=="Gasolina"){
        emission = (km/12.3)*2.2;
        document.getElementById("emission").innerHTML = ("Suas emissões foram de " + emission.toFixed(2) + " gramas de carbono equivalentes")
    }
    console.log(emission)
}