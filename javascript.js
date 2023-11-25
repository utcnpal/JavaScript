// Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var imagine = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()
an.addEventListener("mouseover", displayAge)
function displayAge() {
    an.innerHTML = year - an.innerHTML
}

button.addEventListener("click", altaViata)
function altaViata() {
    nume.innerHTML = "Functie: Software Developer";
    nume.style.color = "gold";
    nume.style.backgroundColor = "brown";
    prenume.innerHTML = "Locul de munca: Cluj-Napoca";
    prenume.style.color = "blue";
    prenume.style.backgroundColor = "#b5e8e3";
    imagine.src = "yoda.jpeg";
    imagine.style.opacity = "80%";
    imagine.style.border = "1px solid black";
    asteptari.innerHTML = "Experienta: <ul> <li>proiecte</li> <li>internship la Bosch</li> </ul>";
    body.style.backgroundColor = "#FFE4C4";
    body.style.fontFamily = "Papyrus";
    body.style.color = "darkred";
}