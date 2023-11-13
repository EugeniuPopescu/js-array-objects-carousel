// Perscorso immagini
//Si crea un array contenente i percorsi delle foto, in questo caso non sono link"
const imagesPath = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// creo una stringa vuota per inserire le immagini nel DOM a ciclo finito
let imagesAdd = "";

// CICLO WHILE
// specifichiamo solo la condizione da dicchiarare ad ogni giro
// dicchiaro la variabile fuori
let i = 0;
while (i < imagesPath.length) {
    const imagePath = imagesPath[i]; 
    // inserisco nella stringa vuota il codice html del singolo percorso all'atributo src 
    imagesAdd += `<img src="${imagePath}">`;

    // si prende la stringa popolata e si stampa nel DOM il codice con l'immagine
    document.querySelector('.carousel-container').innerHTML += imagesAdd;

    // incremento i di uno a fine di ogjni giro
    i++;
} 
// si prende la stringa popolata e si stampa nel DOM il codice con l'immagine
// document.querySelector('.carousel-container').innerHTML += imagesAdd;

// definisco una variabile, e si assegna l'index 0, impostando la prima immagine come attiva 
let currentImage = [0];     
// seleziono tutte le immagini attraverso il querySelectorAll che pesca i tag di tutte le immagini presenti nel container
// mi restituisce un array di immagini, e con currentImage prendo l'immagine dell'array e la imposto a 0
const images = document.querySelectorAll('.carousel-container img');
// do la classe active (display: block) alla prima immagine dell'array, assegnando display: non a tute le altre
images[currentImage].classList.add('active');



// NEXT BUTTON 
document.querySelector('#nextBtn').addEventListener('click', function() {
    console.log('avanti');

    // se lelemento ha n elementi, l'ultimo elemento sarà n-1
    // ci interessa andare avanti fino a quando non raggiungo l'ultima immagine
    if (currentImage < images.length-1) {
        
        // rimuovo la clsse active(display:block) e rendo l'immagine corrente invisibile
        images[currentImage].classList.remove('active');
        // aggiorno il contatore dell'immagine attiale, incrementandolo di 1
        currentImage++;
        // aggiungo la visibilità sull'immagine incrementata
        images[currentImage].classList.add('active');

    } else if (currentImage == images.length-1) {
        images[currentImage].classList.remove('active');
        currentImage = [0];
        images[currentImage].classList.add('active');
    }

});

document.querySelector('#prevBtn').addEventListener('click', function() {
    console.log('indietro');

    if (currentImage > 0) {
        images[currentImage].classList.remove('active');
        currentImage--;
        images[currentImage].classList.add('active');
    } else if (currentImage == 0) {
        images[currentImage].classList.remove('active');
        currentImage = images.length-1;
        images[currentImage].classList.add('active');
    }
});