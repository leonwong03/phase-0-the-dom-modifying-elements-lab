const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement("H1");

newHeader.id = 'victory';

newHeader.textContent = "Urmom is the champion";

document.body.append(newHeader);