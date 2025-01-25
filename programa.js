let listaAmigos=[];

do 
{
let amigo=prompt("ingrese el nombre de su amigo o amiga");
if (amigo)
    {
        listaAmigos.push(amigo);
    }
    let opcion=prompt("desea agregar a otro amigo? (si/no)").toLowerCase();

}
while (opcion==="si");
console.log("lista de amigos");

listaAmigos.forEach((amigo), index)=>{console.log(`${index},${amigo}`)};




