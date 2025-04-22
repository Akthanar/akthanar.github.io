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
contactTitle.textContent = "Email";
// icona dell'elemento
icon.setAttribute("name", "mail-outline");
// link all'elemento
contactLink.href = "mailto:programmatore.unity@gmail.com";
// testo dell'elemento
contactLink.textContent = "[click here]";

contactLink.style.color = "rgb(156, 255, 161)";
contactLink.style.textDecoration = "underline";
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
