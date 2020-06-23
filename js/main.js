function send(){
    var emission=0;
    var food=0;
    var km = document.getElementById("km").value;
    //assert(typeof km === "number");
    var veiculo = document.getElementById("veiculo").value;
    var gas = document.getElementById("gas").value;
    if (veiculo=="Carro" && gas=="Gasolina"){
        emission = (km/12.3)*2.2;
        
        document.getElementById("emission").innerHTML = ("Suas emissões foram de " + emission.toFixed(2) + " gramas de carbono equivalentes");
        
        food = (km/30).toFixed(0);
        
       document.getElementById("food").innerHTML = (food)
       document.getElementById("shop").innerHTML = ("Sempre que possível")
        
    }else if (veiculo=="Moto" && gas=="Gasolina"){
         emission = (km/50)*2.2;
        document.getElementById("emission").innerHTML = ("Suas emissões foram de " + emission.toFixed(2) + " gramas de carbono equivalentes");
            
        food = (km/120).toFixed(0);
       document.getElementById("food").innerHTML = (food)
       document.getElementById("shop").innerHTML = ("Sempre que possível")

   // document.getElementById("food").innerHTML = ("Se você deixar de comer " + food + " Hamburgueres de carne, terá neutralizado essas emissões")
    }

    
    
    return emission;
}

function evalue(){
   
    var result = send().toFixed(2);
    console.log(result);
    var mes = result*22;
    var ano = mes*12;
    console.log(mes);
    console.log(ano);    
}

function change(){
    pass
}

$(document).ready(function(){
    $("#tabelaa").hide()
});