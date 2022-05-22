let numeroDeAlunos = 10;

let contador = 0

for(let contador = 0; contador < numeroDeAlunos; contador++)
{
    //console.log(contador)
    if(contador == 0)
    {
        console.log("o número atual é zero")
    }
    else if(contador %2 ==0)
    {
        console.log ("o número "+contador+" é PAR")
    }
    else
    {
        console.log (`o número ${contador} é ÍMPAR`)
    }
}
