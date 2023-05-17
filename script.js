//Condicionais if - else 

//Mostre no console os seguintes retornos:
//Menores de 18 anos -> Menor de idade (Pagará Meio Ticket)
//Entre 18 e 60 anos -> Adultos (Pagarão meia apenas com carteirinha)
//Maiores de 60 anos -> Idosos (Pagarão Meia)

let idade = 55;
let temCarteirinha = true;
let ehAdulta = ((idade >=18) && (idade <=60)); //&& para E

//=== para igualdade
if (ehAdulta && temCarteirinha === false) {
    console.log("INTEIRA");
} else {
    console.log("MEIA");
}
    

