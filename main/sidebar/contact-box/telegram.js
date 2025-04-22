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
contactTitle.textContent = "Telegram";
// icona dell'elemento
icon.setAttribute("name", "phone-portrait-outline");
// link all'elemento
contactLink.href = "https://t.me/Akthanar";
// testo dell'elemento
contactLink.textContent = "Akthanar";

contactLink.style.color = "rgb(161, 233, 252)";
contactLink.style.textDecoration = "";
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
