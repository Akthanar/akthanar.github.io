const testimonialsItem = document.createElement('li');
testimonialsItem.classList.add('testimonials-item');

const contentCard = document.createElement('div');
contentCard.classList.add('content-card');
contentCard.setAttribute('data-testimonials-item', '');

const avatarBox = document.createElement('figure');
avatarBox.classList.add('testimonials-avatar-box');

const avatarImage = document.createElement('img');
avatarImage.setAttribute('src', './assets/images/avatar-1.png');
avatarImage.setAttribute('alt', 'Valeria Moscatelli');
avatarImage.setAttribute('width', '60');
avatarImage.setAttribute('data-testimonials-avatar', '');

avatarBox.appendChild(avatarImage);

const itemTitle = document.createElement('h4');
itemTitle.classList.add('h4', 'testimonials-item-title');
itemTitle.setAttribute('data-testimonials-title', '');
itemTitle.textContent = 'Valeria Moscatelli';

const testimonialsText = document.createElement('div');
testimonialsText.classList.add('testimonials-text');
testimonialsText.setAttribute('data-testimonials-text', '');

const textParagraphs = document.createElement('p');
textParagraphs.innerHTML = `
I am Valeria Moscatelli, a 27yo concept artist currently living in Turin.<br><br>
My passion for art led me to dedicate three years of my life
to the Event Horizon School, where I had the opportunity to explore
the world of video games and study concept art.<br><br>
Among the various styles I encountered, I discovered that the cartoon style
is the one I am most inclined towards.<br><br>
<a href="https://drive.google.com/file/d/1ySM4BKcinfZtwntBaG1cWZIfzlYKKu5a/view?usp=sharing" target="_blank" style="color: rgb(252, 255, 74); text-decoration: none;">Portfolio</a>
`;

const timeElement = document.createElement('time');
timeElement.setAttribute('datetime', '2023-12-22');
timeElement.textContent = '22 December 2023';

testimonialsText.appendChild(textParagraphs);
testimonialsText.appendChild(timeElement);

contentCard.appendChild(avatarBox);
contentCard.appendChild(itemTitle);
contentCard.appendChild(testimonialsText);

testimonialsItem.appendChild(contentCard);

// Now you can append testimonialsItem to wherever you want in your document
