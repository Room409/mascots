let dogs = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 1,
	},
	{
		img: './imagenes/perro2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 2,
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 3,
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 4,
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 5,
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 6,
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 7,
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 8,
	},
];


const container = document.querySelector('.cards-container'); //llama al contenedor de las cards

function createDogCard(dog) {     //crea una funcion de dog

	//crea la card con los elmentos de dog
	const card = `   
			<div class="card card-hover position-relative">
				<div class="edit">
					<span class="position-absolute fw-bold custom-btn-edit rounded-5 p-2 bg-primary z-3" data-dog-id="${dog.id}">Editar</span>
					<span class="position-absolute btn custom-btn-delete btn-close  bg-danger rounded-circle opacity-100 p-2  z-2" data-dog-id="${dog.id}"></span>
					</div>
				<img class="card-img-top imgHTML" src="${dog.img}">
				<div class="card-body">
					<h2 class="card-text nameHTML">${dog.name}</h2>
					<p class="telefonoHTML">Teléfono: ${dog.telefono}</p>
					<p class="paisHTML">País: ${dog.pais}</p>
					<p class="descripcionHTML">Descripción: ${dog.descripcion}</p>
					<p >ID: ${dog.id}</p>
				</div>
			</div>
		`;
	container.insertAdjacentHTML('afterbegin', card); //inserta la card al comienzo de todo
	
	editNewCards(container.firstElementChild); //funcion para poder editar las nuevas cartas añadidas
	eliminarCard() // funcion para que las nuevas cards tengan la funcion de eliminar
}

dogs.forEach((dog) => {    //recorre dogs como dog
	createDogCard(dog)    //crea la card dog
});  


const addMascot = document.getElementById('addMascot');   //se activa el btn addMascot

addMascot.addEventListener('click', () => {                //se crea un evento medianten el click
	const name = document.getElementById('nombreDog').value;
	const pais = document.getElementById('paisDog').value;
	const descripcion = document.getElementById('message-text-Dog').value;  //se agrega los valores que añaden al modal 
	const imgDogInput = document.getElementById('fotoDog');
	const telephoneDog = document.getElementById('telefonoDog').value;
	const imgDogFile = imgDogInput.files[0];

	const reader = new FileReader();    //metodo de interfaz externa para leer archivos y sus datos 
	reader.onload = (e) => {            //se soluciona la subida de imagen desde una parte remota 
		const imgDog = e.target.result;

		const newDog = {
			img: imgDog,
			name: name,
			telefono: telephoneDog,    //se crea una card de objetos mediante los valores agregados de addMascot
			pais: pais,
			descripcion: descripcion,
			id: dogs.length + 1,
		};

		dogs.push(newDog);              //pushea el nuevo objeto creado mediante addMascot al array de objetos dogs
		createDogCard(newDog);          //crea una nueva card en el html

		document.getElementById('nombreDog').value = '';
		document.getElementById('paisDog').value = '';
		document.getElementById('message-text-Dog').value = '';  //se reinicia los valores al finalizar 
		document.getElementById('fotoDog').value = '';
		document.getElementById('telefonoDog').value = '';

		eliminarCard()
	};
	reader.readAsDataURL(imgDogFile);    //inicia la lectura del archivo que subimos y a la vez la operacion se completa (la foto)

	const modalElement = document.getElementById('exampleModal');     //llamamos al modal abierto
	const bootstrapModal = bootstrap.Modal.getInstance(modalElement); //instanceamos el modal creado 
	bootstrapModal.hide(); //ocultamos el modal al finalizar


});


//////////////editar carta

function editNewCards(card) {     //creamos una funcion para poder luego agregarla a las nuevas cards agregadas
	const editBtn = card.querySelector('.custom-btn-edit');   //llamamos al boton edit
	editBtn.addEventListener('click', () => {      //creamos un evento del boton
		const dogId = editBtn.dataset.dogId;          //tomamos el id de los perros
		const dog = dogs.find((dog) => dog.id === parseInt(dogId)); //find para buscar el id del perro que editamos

		if (dog) {  //si el id corresponde al que editamos se ejecuta if
			const modal = new bootstrap.Modal(document.getElementById('editModal')); //instancemos el modal
			modal.show(); //abrimos modal de bootstrap

			const nombreInput = document.getElementById('nombre');
			const telefonoInput = document.getElementById('telefono');
			const paisInput = document.getElementById('pais');           //llamamos los valores de los atributos del DOM
			const descripcionInput = document.getElementById('descriptionEdit');
			const imagenInput = document.getElementById('imagen');

			nombreInput.value = dog.name;
			telefonoInput.value = dog.telefono;
			paisInput.value = dog.pais;                    //les asignamos el valor a los inputs del modal
			descripcionInput.value = dog.descripcion;
			imagenInput.value = dog.img;

			imagenInput.disabled = true;   //desabilitamos la edicion de imagen porque rompe la pagina xd

			saveChangesButton.dataset.dogId = dogId;  //guardamos el id en savechanges para luego ejecutarlo
		}
	});
}

//savechanges
const saveChangesButton = document.getElementById('saveChanges');//llamamos al btn actualizar del modal 

saveChangesButton.addEventListener('click', () => {    //hacemos un evento de click para alacenar lo editado
	const dogId = saveChangesButton.dataset.dogId;    //obtenemos el valor del atributo dogId
	const dog = dogs.find((dog) => dog.id === parseInt(dogId));  //comparamos el id del objeto al que estamos editando
	if (dog) {
		const nombreInput = document.getElementById('nombre');
		const telefonoInput = document.getElementById('telefono');
		const paisInput = document.getElementById('pais'); //tomamos los valores editados de la card 
		const descripcionInput = document.getElementById('descriptionEdit');
		const imagenInput = document.getElementById('imagen');

		dog.name = nombreInput.value;
		dog.telefono = telefonoInput.value;
		dog.pais = paisInput.value;   //actualizamos los valores de las propiedades de input
		dog.descripcion = descripcionInput.value;
		dog.img = imagenInput.value;

		const dogCards = document.querySelectorAll(`[data-dog-id="${dogId}"]`); //Pasamos dogID a dogCards
		dogCards.forEach((dogCard) => {    //creamos dogCard de dogCards
			const parentCard = dogCard.closest('.card'); //creamos closeest para buscar dentro de card las clases asignadas en html
			parentCard.querySelector('.nameHTML').textContent = dog.name;
			parentCard.querySelector('.telefonoHTML').textContent = `Teléfono: ${dog.telefono}`;
			parentCard.querySelector('.paisHTML').textContent = `País: ${dog.pais}`;   //sobreescribimos con textContent los valores de los atributos dog para visualizarlo en el DOM
			parentCard.querySelector('.descripcionHTML').textContent = `Descripción: ${dog.descripcion}`;
			parentCard.querySelector('.imgHTML').src = dog.img;

			const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal')); //instanceamos el modal 
			editModal.hide();    //cerramos el modal al finalizar
		});

	}


});

//eliminar card
function eliminarCard() { //funcion para eliminar cards
	const deleteBtns = document.querySelectorAll('.btn-close');

	deleteBtns.forEach((deleteBtn) => {
		deleteBtn.addEventListener('click', () => {
			const dogId = deleteBtn.dataset.dogId;
			const dog = dogs.find((dog) => dog.id === parseInt(dogId));

			if (dog) {
				const dogIndex = dogs.indexOf(dog);
				dogs.splice(dogIndex, 1);
				const cardDog = deleteBtn.closest('.card');
				cardDog.remove();
			}
		});
	});
}
