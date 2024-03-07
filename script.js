// const seeds = localStorage.setItem(
// 	'contacts',
// 	JSON.stringify([
// 		{
// 			nombre: 'ines',
// 			email: 'ines@',
// 			mensaje: 'VAMOS',
// 			url_image: 'htttps://LA',
// 		},
// 		{
// 			nombre: 'ines',
// 			email: 'ines@',
// 			mensaje: 'VAMOS',
// 			url_image: 'htttps://LA',
// 		},
// 	])
// )

// LEE EL LOCAL STORAGE
const data = localStorage.getItem('contacts')
const contacts = JSON.parse(data)

// HIDRATA LA VISTA
renderContacts(contacts)

// CONFIGURAR EVENTO AÑADIR NUEVO CONTACTO
const btn = document.querySelector('#btn')
btn.addEventListener('click', handleAddContact)

function handleAddContact(event) {
	event.preventDefault()

	const nameInput = document.querySelector('#name')
	const emailInput = document.querySelector('#email')
	const msgInput = document.querySelector('#msg')
	const urlInput = document.querySelector('#url')

	const newContact = {
		nombre: nameInput.value,
		email: emailInput.value,
		mensaje: msgInput.value,
		url_image: urlInput.value,
	}

	const data = localStorage.getItem('contacts')
	const dataArray = JSON.parse(data)

	const newContacts = [...dataArray, newContact]
	const newContactsJSON = JSON.stringify(newContacts)

	localStorage.setItem('contacts', newContactsJSON)

	renderContacts(newContacts)
}

function renderContacts(contacts) {
	const container = document.querySelector('ul')

	container.innerHTML = ''
	contacts.forEach((contact) => {
		const li = document.createElement('li')
		li.textContent = contact.nombre

		container.appendChild(li)
	})
}

/* 


 // Crear elemento del DOM

 // const newElement = document.createElement(tagElementHTML)
 // newElement.textContent = texto

 // contenedorElDOM.appendChild(newElement)

ESCRITURA: Cread un registro en localStorage con un valor de prueba:
localStorage.setItem(clave, valor)

LECTURA: Obtener el valor e imprimirlo por consola
const value = localStorage.getItem(clave)


KEY: contacts

[{
	nombre: "ines",
	email: "ines@"," ,
	mensaje: "VAMOS",
	"url_image": "htttps://LA"
},
{
	nombre: "ines",
	email: "ines@"," ,
	mensaje: "VAMOS",
	"url_image": "htttps://LA"
},
]




--Crear un formulario de contacto con los siguientes campos:
+Nombre
+Email
+Mensaje
+URL imagen
Guardar en Local Storage los datos de contacto enviados de cada usuario
La estructura de datos de usuarios consistirá en un array de objetos [{..},{..},{..}...{..}] almacenado en Local Storage



Mostrar los datos de los contactos guardados en el DOM
Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave







*/
