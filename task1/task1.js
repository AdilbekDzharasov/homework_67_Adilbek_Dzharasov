const containers = document.getElementById('container');
const buttons = document.getElementById('add-item-btn');

const makeElement = () => {
    const div = document.createElement('div');
	div.className = 'window';

	const divClose = document.createElement('div')
	divClose.className = 'cl-btn-7';

	const text = document.createTextNode("Modal window text");

	div.appendChild(divClose);
	div.appendChild(text);

	containers.appendChild(div);

    divClose.addEventListener('click', function() {
        containers.removeChild(div);
    })
    setTimeout(() =>{containers.removeChild(div)}, 5000)
}

buttons.addEventListener('click', makeElement)

