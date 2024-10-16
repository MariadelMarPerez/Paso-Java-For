public class LogicaFor{
    int edad = 0, estadoCivil = 0, estatura = 0, sexo = 0, contadorPersonas, acomuladorEdad = 0, acomuladorEstatura = 0,  numeroPersona = 1;
    int cantidadPersonas;
    double promedioEdad, promedioEstatura, porcentajePersonas;
    

public LogicaFor(int edad, int estadoCivil, int estatura, int sexo, int contadorPersonas, int acomuladorEdad,
                int acomuladorEstatura, int numeroPersona, int cantidadPersonas) {
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.estatura = estatura;
        this.sexo = sexo;
        this.contadorPersonas = contadorPersonas;
        this.acomuladorEdad = acomuladorEdad;
        this.acomuladorEstatura = acomuladorEstatura;
        this.numeroPersona = numeroPersona;
        this.cantidadPersonas = cantidadPersonas;
}



public void calcularPromedio(){
    
    promedioEdad = acomuladorEdad / contadorPersonas;
    promedioEstatura = acomuladorEstatura / contadorPersonas;
    porcentajePersonas = (contadorPersonas/cantidadPersonas)*100;
    
    System.out.println("El promedio de edad de las personas que cumplen es: " + promedioEdad + " años ");
    System.out.println("El promedio de estatura de las personas que cumplen es: " + promedioEstatura + " centimetros ");
    System.out.println("El porcentaje de personas que cumplen con la condición es del: " + porcentajePersonas + " % ");
     
    
     }
    }