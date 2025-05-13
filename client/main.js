function getSeedDesdeURL() {
  return window.location.pathname.replace('/', '') || null;
}

async function cargarPokemon() {
  const seed = getSeedDesdeURL();
  const url = seed
    ? `http://localhost:3001/api/pokemon?seed=${seed}`
    : `http://localhost:3001/api/pokemon`;

  const res = await fetch(url);
  const data = await res.json();
  const tipoPrincipal = data.types[0]; // primer tipo del array
  const color = tipoAColor(tipoPrincipal);
  document.getElementById('card').style.background = `linear-gradient(to bottom, ${color}, #fff2d1)`;
  
  document.getElementById('card').innerHTML = `
  <h2>${capitalize(data.name)}</h2>
  <img src="${data.img}" alt="${data.name}" />
  <div class="info">
    <p><strong>Tipo:</strong> ${data.types.map(capitalize).join(', ')}</p>
    <p><strong>Altura:</strong> ${data.height} m</p>
    <p><strong>Peso:</strong> ${data.weight} kg</p>
    <p><strong>Ataque base:</strong> ${data.attack}</p>
    <p><strong>Descripción:</strong> ${data.description}</p>

  </div>
`;



}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

cargarPokemon();

function tipoAColor(tipo) {
  const colores = {
    fire: '#f75336',
    water: '#3399ff',
    grass: '#78c850',
    electric: '#f7d02c',
    psychic: '#f85888',
    rock: '#b8a038',
    ground: '#e0c068',
    poison: '#a040a0',
    normal: '#a8a878',
    bug: '#a8b820',
    ghost: '#705898',
    dragon: '#7038f8',
    dark: '#705848',
    ice: '#98d8d8',
    steel: '#b8b8d0',
    fairy: '#ee99ac',
    fighting: '#c03028'
  };

  return colores[tipo] || '#ccc'; // color gris si no está definido
}

