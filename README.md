# 🎴 Cartas Pokémon Aleatorias

Aplicación web que genera una carta de Pokémon diferente cada vez que se accede, usando datos reales de la [PokéAPI](https://pokeapi.co) y un diseño inspirado en las cartas del TCG (Trading Card Game).

> 💡 Cada carta se genera usando una **seed en la URL**, permitiendo compartir cartas únicas y reproducibles.

---

## 🌟 Funcionalidades

- ✅ Muestra carta Pokémon con diseño visual llamativo.
- ✅ Backend con Express que consulta la PokéAPI.
- ✅ Seed en la URL para reproducir siempre la misma carta.
- ✅ Imagen oficial, nombre, tipo, altura, peso, ataque, HP y descripción.
- ✅ Fondo dinámico según tipo de Pokémon.
- ✅ Botón para generar nueva carta aleatoria.

---

## 🖥️ Tecnologías utilizadas

| Área       | Tecnología                        |
|------------|-----------------------------------|
| Frontend   | HTML, CSS, JavaScript Vanilla     |
| Backend    | Node.js, Express, seedrandom, node-fetch |
| API        | PokéAPI                           |
| Herramientas | Vite, Git, GitHub               |

---

## 🚀 Cómo ejecutar el proyecto localmente

### 🧩 Clonar el proyecto

```bash
git clone https://github.com/DanteMVargas/cartas-pokemon.git
cd cartas-pokemon
npm install
node server/index.js
npm run dev
http://localhost:5173/
