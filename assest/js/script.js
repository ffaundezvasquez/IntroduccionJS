
function BackColor(){
    element = document.querySelector('#color');
    card = document.querySelector('.box1');
    card.style.backgroundColor = element.value;
    nombre = document.querySelector('.nombre');
    price = document.querySelector('.price');
    if(element.value == "blue"){
        nombre.style.color = "white";
        price.style.color = "white";
    }
    if(element.value == "grey"){
        nombre.style.color = "black";
        price.style.color = "white";
    }if(element.value == "red"){
        nombre.style.color = "white";
        price.style.color = "white";
    }if(element.value == "black"){
        nombre.style.color = "red";
        price.style.color = "red";
    }if(element.value == "---"){
        card.style.backgroundColor = "white"
        nombre.style.color = "black";
        price.style.color = "black";
    }
}


function FinalPrice() {

    cantidad = document.querySelector('.cantidad').value;
    totalCantidad = document.querySelector('.total-cantidad');
    totalPrecio = document.querySelector('.total');
    totalCantidad.innerText = cantidad;
    totalPrecio.innerText = "$" + cantidad * 251900;
    color = document.querySelector('#color');
    corazon = document.querySelector('.circle');


    if(color.value == "green"){
        corazon.style.color = "green";
    }if(color.value == "red"){
        corazon.style.color = "red";
    }if(color.value == "grey"){
        corazon.style.color = "grey";
    }if(color.value == "black"){
        corazon.style.color = "black";
    }

}