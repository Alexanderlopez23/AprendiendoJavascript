var comida = "Pollo";

//alert(comida);
//` comillas para concatenar ` 

let UserAge;

UserAge=prompt("Hola, ingresa tu edad por favor !!");

alert('usted tiene ' + UserAge + ' años' );
document.write('Usted tiene ' +  UserAge + ' años' );
document.write( "<hr>" );
document.write( ` Usted tiene  ${UserAge}   años ` );

//Juego para restar :
document.write( "<hr>" );

let BirthYear;
BirthYear = 2021 - UserAge;

document.write( ` Tu tienes ${UserAge} años de edad y naciste en el año ${BirthYear}` );