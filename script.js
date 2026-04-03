// // variables
// let maVar = "La valeur"
// const maConst = "Autre valeur"

// //structures conditionnelles
// //On peut utiliser && (et), || (ou) dans les conditions
// if (maVar =="titi")
// {
//     console.log("C'est ok")
// } else if(maVar =="La valeur") {
//     console.log("Autre cas")
// } else {
//     console.log("Tant pis !")
// }

// switch(maVar){
//     case "titi" : 
//         console.log("C'est ok")
//     break;
//     case "La valeur" : 
//         console.log("Autre cas")
//     break;
//     default :
//         console.log("Tant pis !")
// }

// //boucles
// for( let i=0; i<100; i= i + 2)
// {
//     console.log(`Nombres pairs : ${i}`)
// }

// let i = 0
// while(i<100)
// {
//     console.log(`Nombre impair : ${i}`)
//     i += 2
// }

// let valeur = "huhu"

// while(valeur !="haha"){
//     console("La valeur est différente !")
//     valeur = "haha"
// }

// //Voilà une manière simple d'écrire dans la console entre text et variables
// age = 4
// let prenom = "Kaiko"
// console.log(`Bonjour je m'appelle ${prenom} et j'ai ${age} ans !`)

// //fonctions
// function DireBonjour(prenom) {
//     console.log(`Bonjour ${prenom}`)
// }
// DireBonjour("Felix")

// //fonction fléchée
// const sayHello = (prenom) => {
//     console.log(`Bonjour ${prenom}`)
// }
// sayHello("El Gato")

// //classes

// //DRY = Don't Repeat Yourself

// const h1 = document.querySelector('h1')

// h1.innerHTML = "Helloooooo"
// h1.textContent = "Grominet"

const article = `
        <article>
            <h2>Titre</h2>
            <div>
                <div>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </div>
                <a href="#">Lien</a>
            </div>
        </article>`
document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("afterbegin", article)
//beforebegin = On injecte avant le contenu selectionné
//afterbegin = On injecte dans le contenu au début
//beforeend = On injecte dans le contenu à la fin
//afterend = On injecte après le contenu selectionné

const h1 = document.querySelector('h1')
let count = 0
const title = h1.textContent
h1.addEventListener('click', () => {
    count++
    console.log("Le titre a été cliqué")
    h1.textContent = `${title} ${count}`
})
//ternaire : if else condensé en une ligne mais qui a objectif d'attribute une valeur à une variable
// variable = (cnondition) ? valeur si vrai : valeur si faux
const age = 22
const information = age >= 18 ? "Majeur" : "Mineur"

//Travailler avec le storage local, on peut le voir dans "Application" dans F12
localStorage.setItem('prenom', "Kaiko")
const prenom = localStorage.getItem('prenom')
console.log(prenom)

const person = {
    prenom: "Kaiko",
    nom: "LeChat",
    age: 4
}

//Pour voir en chaîne de caractère
const strPerson = JSON.stringify(person)
console.log(strPerson)

localStorage.setItem('person', strPerson)

//Pour remettre en normal
const parsePerson = JSON.parse(localStorage.getItem('person'))
console.log(parsePerson)