let RangeI = document.getElementById('Range');



RangeI.addEventListener('input', Valor);

document.getElementById('Botão').addEventListener('click', Sortear);



function Valor(event)
{
    console.log(event);
    console.log(RangeI.value);
}

function Sortear()
{
    let Numero = Math.random() * ((RangeI.value - 1) + 1);
    document.getElementById('NumeroS').innerText = Math.floor(Numero);
}