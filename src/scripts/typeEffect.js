const heroText = document.querySelector('.hero__text');

const string = "Based in Melbourne, Australia, I'm passionate about building accessible, "
    + "interactive websites and web applications. If you're interested in working together, get in touch below!"
let buildString = "";
let i = 0;

// Wait until appears on page before initialising type effect
setTimeout(() => {
    const typeInterval = setInterval(() => {
        if (i === string.length - 1) {
            clearInterval(typeInterval)
        }
        buildString += string[i];
        i++;
        heroText.textContent = buildString;
        console.log('hello');
    }, 35)
}, 1500)



