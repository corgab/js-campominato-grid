// bottone che avvia gioco
//100 caselle
//utente clicca sulla cella si colora di azzurro
//console con numero casella


const buttonElement  = document.getElementById("avvio")
const avvioPartita = document.querySelector(".grid-wrapper")
const gridElement = document.querySelector(".grid")

const size = 10
const numeroCelle = size * size

//avviare la partita aggiungendo il grid e togliendo il bottone
buttonElement.addEventListener("click", function() {
    avvioPartita.classList.remove("d-none")
    buttonElement.classList.add("d-none")
})

//ciclo for per generare le caselle
for(let i = 0; i < numeroCelle; i++ )
{
    const num = i + 1

    const cella = document.createElement("div")
    cella.classList.add("cell")
    cella.innerHTML = num

    gridElement.append(cella)

    cella.addEventListener("click", function() {
        console.log("hai cliccato sulla casella " + num)
        cella.classList.toggle("bg-orange")
    })
    
}


