let dogs = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 01,
	},
	{
		img: './imagenes/perro2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 02,
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 03,
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 04,
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 05,
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 06,
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 07,
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 08,
	},
];


const container = document.querySelector('.cards-container');

function createDogCard(dog) {

	const card = `
  	<div class="card-conainer">
	  <div class="card card-hover position-relative">
	 <div class="edit">
	 <span class="position-absolute fw-bold custom-btn-edit rounded-5 p-2 bg-primary z-3" data-dog-id="${dog.id}">Editar</span>
	 </div>
	  <img class="card-img-top " src="${dog.img}">
		   <div class="card-body">
			  <h2 class="card-text">${dog.name}</h2>
			  <p>Teléfono: ${dog.telefono}</p>
			   <p>País: ${dog.pais}</p>
			<p>Descripción: ${dog.descripcion}</p>
			<p>ID: ${dog.id}</p>
		   </div>
		</div>
	</div>
  `;
	container.innerHTML += card;
}

dogs.forEach((dog) => {
	createDogCard(dog)
});

const addMascot = document.getElementById('addMascot');

addMascot.addEventListener('click', () => {

	const name = document.getElementById('nombreDog').value;
	const pais = document.getElementById('paisDog').value;
	const descripcion = document.getElementById('message-text-Dog').value;
	const imgDogInput = document.getElementById('fotoDog');
	const telephoneDog = document.getElementById('telefonoDog').value;
	const imgDogFile = imgDogInput.files[0];


	const reader = new FileReader();
	reader.onload = (e) => {
		const imgDog = e.target.result;

		const newDog = {
			img: imgDog,
			name: name,
			telefono: telephoneDog,
			pais: pais,
			descripcion: descripcion,
			id: dogs.length + 1,
		};

		dogs.push(newDog);
		createDogCard(newDog);
		
		document.getElementById('nombreDog').value = '';
        document.getElementById('paisDog').value = '';
        document.getElementById('message-text-Dog').value = '';
        document.getElementById('fotoDog').value = '';
        document.getElementById('telefonoDog').value = '';
	};
	reader.readAsDataURL(imgDogFile);

	const modalElement = document.getElementById('exampleModal');
    const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
    bootstrapModal.hide();
	
});



////////////////////Edit cards
const editCards = document.querySelectorAll('.custom-btn-edit');

editCards.forEach((editCard) => {
	editCard.addEventListener('click', () => {
		const dogId = editCard.dataset.dogId;
		const dog = dogs.find((dog) => dog.id === parseInt(dogId));
		if (dog) {
			const modal = new bootstrap.Modal(document.getElementById('editModal'));
			modal.show();

			const nombreInput = document.getElementById('nombre');
			const telefonoInput = document.getElementById('telefono');
			const paisInput = document.getElementById('pais');
			const descripcionInput = document.getElementById('descriptionEdit');
			const imagenInput = document.getElementById('imagen');

			nombreInput.value = dog.name;
			telefonoInput.value = dog.telefono;
			paisInput.value = dog.pais;
			descripcionInput.value = dog.descripcion;
			imagenInput.value = dog.img;

		}
	});
});

