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
	 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary z-3">Editar</span>
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
	const telefono = document.getElementById('apellidoDog').value;
	const pais = document.getElementById('paisDog').value;
	const descripcion = document.getElementById('message-text-Dog').value;

	const newDog = {
		img: './imagenes/perro5.jpg',
		name: name,
		telefono: telefono,
		pais: pais,
		descripcion: descripcion,
		id: dogs.length + 1,
	};

	dogs.push(newDog);
	createDogCard(newDog);
});
