const textComponent = () => {
	const elH1 = document.createElement('h1');
	elH1.innerHTML = 'Hola mundo';
	return elH1;
}

document.body.appendChild(textComponent() );