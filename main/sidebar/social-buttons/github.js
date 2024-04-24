// Crea un nuovo elemento lista
var listItem = document.createElement("li");
listItem.className = "social-item";

// Crea un link per il social media
var socialLink = document.createElement("a");
socialLink.href = "https://github.com/HighshoreGames";
socialLink.className = "social-link";

// Crea l'icona GitHub
var icon = document.createElement("ion-icon");
icon.setAttribute("name", "logo-github");
icon.style.color = "rgb(0, 0, 0)";
icon.style.backgroundColor = "white";
icon.style.borderRadius = "50%";

// Aggiungi l'icona al link
socialLink.appendChild(icon);

// Aggiungi il link al listItem
listItem.appendChild(socialLink);

// Aggiungi il listItem al tuo documento HTML
document.querySelector("ul").appendChild(listItem);
