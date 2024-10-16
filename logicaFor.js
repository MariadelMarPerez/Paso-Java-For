var Edad=0,EstadoCivil=0,Estatura=0,Sexo=0,PromedioEstatura=0,PorcentajePersonas=0,ContadorPersonas=0, PromedioEdad = 0,
AcomuladorEdad=0,AcomuladorEstatura=0,CantidadPersonas=2; 

for (let numeroPersona = 1; numeroPersona <= CantidadPersonas; numeroPersona++) {
    
    Edad=parseFloat(prompt("Ingrese la edad de la persona "+ numeroPersona));

    Estatura=parseFloat(prompt("Ingrese la estura de la persona"+ numeroPersona+" en cms "));

    EstadoCivil=parseFloat(prompt("Ingrese el Estado Civil de la persona"+ numeroPersona+ " 1.Soltero 2.Casado "));

    Sexo=parseFloat(prompt("Ingrese el sexo de la persona"+ numeroPersona + " 1 Mujer 2.Hombre"));


if((Edad>=18)&&(EstadoCivil==1)&&(Estatura>170)&&(Sexo==1)) {

            ContadorPersonas = ContadorPersonas + 1;
            AcomuladorEdad = AcomuladorEdad + Edad;
            AcomuladorEstatura = AcomuladorEstatura + Estatura;
            }
        }``
        
        PromedioEdad = AcomuladorEdad / ContadorPersonas;
        PromedioEstatura = AcomuladorEstatura / ContadorPersonas;
        PorcentajePersonas = (ContadorPersonas/CantidadPersonas)*100;

        alert("El promedio de edad de las personas que cumplen es: " + PromedioEdad + " años ");
        alert("El promedio de estatura de las personas que cumplen es: " + PromedioEstatura + "centimetros");
        alert("El porcentaje de personas que cumplen con la condición es del: " + PorcentajePersonas + "%");
