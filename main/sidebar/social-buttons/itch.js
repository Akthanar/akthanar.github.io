// Crea un nuovo elemento lista
var listItem = document.createElement("li");
listItem.className = "social-item";

// Crea un link per il social media
var socialLink = document.createElement("a");
socialLink.href = "https://programmatore-unity.itch.io";
socialLink.className = "social-link";

// Crea un'immagine per l'icona di itch.io
var iconImg = document.createElement("img");
iconImg.src = "./assets/images/itch-io-icon-red.png";
iconImg.width = "20";

// Aggiungi l'immagine al link
socialLink.appendChild(iconImg);

// Aggiungi il link al listItem
listItem.appendChild(socialLink);

// Aggiungi il listItem al tuo documento HTML
document.querySelector("ul").appendChild(listItem);
