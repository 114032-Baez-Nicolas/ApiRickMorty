const personajeId = localStorage.getItem('codPersonaje');

fetch(`https://rickandmortyapi.com/api/character/${personajeId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('characterName').textContent = data.name;
        document.getElementById('personajeImagen').src = data.image;
        document.getElementById('personajeGenero').value = data.gender;
        document.getElementById('personajeOrigen').value = data.origin.name;
        document.getElementById('personajeEspecie').value = data.species;
        document.getElementById('personajeStatus').value = data.status === 'Alive' ? 'Vivo' : 'Muerto';
        document.getElementById('personajeStatus').style.color = data.status === 'Alive' ? 'green' : 'red';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al cargar el personaje..');
    });