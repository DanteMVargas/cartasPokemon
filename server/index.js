import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import seedrandom from 'seedrandom';

const app = express();
const PORT = 3001;

app.use(cors());

const pokemonIds = [39, 52, 133, 150, 172,1,2,3, 4,5,6, 7,8,9,10,11,12,13,14,15,16,17,18, 25, 39, 52, 133, 150, 172,111,222,333,444,555,112,223,334,445,443,332]; // podés expandir esto

// Ruta con Pokémon aleatorio, usando semilla
app.get('/api/pokemon', async (req, res) => {
  try {
    const { seed } = req.query; // podés pasar ?seed=12345

    const rng = seed ? seedrandom(seed) : Math.random; // si hay seed, usala

    const index = Math.floor((seed ? rng() : Math.random()) * pokemonIds.length);
    const id = pokemonIds[index];

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const speciesData = await speciesRes.json();
    const flavor = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es' && entry.flavor_text
); 
    const descripcion = flavor ? flavor.flavor_text.replace(/\n|\f/g, ' '): 'No hay descripción disponible en español.';

    const pokemon = {
      name: data.name,
      img: data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default || 'https://via.placeholder.com/150?text=Sin+imagen',
      height: data.height / 10,
      weight: data.weight / 10,
      types: data.types.map(t => t.type.name),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      description: descripcion
    };

    res.json(pokemon);
  } catch (err) {
    console.error('❌ Error al consultar PokéAPI:', err);
    res.status(500).json({ error: 'No se pudo obtener el Pokémon' });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`)
);
