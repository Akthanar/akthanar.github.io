// Crea un nuovo elemento lista
var listItem = document.createElement("li");
listItem.className = "contact-item";

// Crea il div per l'icona
var iconBox = document.createElement("div");
iconBox.className = "icon-box";
var icon = document.createElement("ion-icon");
iconBox.appendChild(icon);

// Crea il div per le informazioni di contatto
var contactInfo = document.createElement("div");
var contactTitle = document.createElement("p");
var contactLink = document.createElement("a");
contactInfo.className = "contact-info";
contactTitle.className = "contact-title";
//contactLink.className = "contact-link";
contactLink.rel = "noopener noreferrer";
contactLink.target = "_blank";

// titolo dell'elemento
contactTitle.textContent = "Discord ID";
// icona dell'elemento
icon.setAttribute("name", "logo-discord");
// link all'elemento
contactLink.href = "https://discord.gg/BgX7tsgV8S";
// testo dell'elemento
contactLink.textContent = "programmatore";

contactLink.style.color = "rgb(239, 150, 250)";
contactLink.style.textDecoration = "none";
contactLink.style.fontSize = "14px";
// link in grassetto
//contactLink.style.fontWeight = "bold";
// titolo in grassetto
contactTitle.style.fontWeight = "bold";

contactInfo.appendChild(contactTitle);
contactInfo.appendChild(contactLink);

// Aggiungi i div creati al listItem
listItem.appendChild(iconBox);
listItem.appendChild(contactInfo);

// Aggiungi il listItem al tuo documento HTML
document.querySelector("ul").appendChild(listItem);
