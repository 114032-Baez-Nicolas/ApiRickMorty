fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const personajes = data.results;
        const tableBody = document.getElementById('PersonajesRickMorty');

        personajes.forEach(personaje => {
            const row = document.createElement('tr');
            row.innerHTML = `
                        <td>${personaje.id}</td>
                        <td>${personaje.episode.length}</td>
                        <td>${personaje.name}</td>
                        <td>${personaje.species}</td>
                        <td>
                            <button class="btn btn-primary" onclick="redirectToDetails(${personaje.id})">Más info</button>
                        </td>
                    `;
            tableBody.appendChild(row);
        });
    });

function redirectToDetails(codPersonajeid) {
    localStorage.setItem('codPersonaje', codPersonajeid);
    window.location.href = 'ObtenerPersonajeIndividual.html';
}