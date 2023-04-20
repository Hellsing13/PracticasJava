


const tiempo= 33;
let saludo;
if (tiempo<12) {
    saludo= "Buenos dias";
    
} else if  (tiempo >=12 && tiempo <=19){
    saludo= "buenas tardes";
} else if (tiempo> 19 && tiempo <24){
    saludo= "buenas noches";
} else if (tiempo>24){
    saludo="no existe este tiempo";
}
    
console.log (saludo);

//Switch

const dia=5;
let texto;
switch (dia){
    case 0:
        Text = "Domingo";
        break;

        case 1:
        Text = "Lunes";
        break;

        case 2:
        Text = "Martes";
        break;

        case 3:
        Text = "Miercoles";
        break;

        case 4:
        Text = "Jueves";
        break;

        case 5:
        Text = "Viernes";
        break;

        case 6:
        Text = "Sabado";
        break;

        default:
            texto = "Dia no valido";
}
console.log(texto);