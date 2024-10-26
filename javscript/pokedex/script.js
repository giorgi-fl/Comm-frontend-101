// https://pokeapi.co/api/v2/pokemon/

const poke_container = document.getElementById("poke-container");

const pokemon_count = 21;
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const main_types = Object.keys(colours);
let team = [];
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

fetchPokemons();

const createPokemonCard = (pokemon) => {
  const pokmonEl = document.createElement("div");
  pokmonEl.classList.add("w-1/4");
  const id = pokemon?.id.toString().padStart(4, 0);

  const poke_types = pokemon?.types?.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colours[type];

  const pokeInnerHTML = `
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${pokemon?.sprites?.front_default}" alt="Sunset in the mountains">
    <div class="px-6 py-4">
    <div class="font-semibold text-[gray] text-center text-sm mb-2">${id}</div>
        <div class="font-bold text-center text-xl mb-2">${pokemon?.name}</div>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-[${color}] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#${type}</span>
    </div>
    </div>
  `;
  pokmonEl.innerHTML = pokeInnerHTML;

  pokmonEl.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    addToTeam(pokemon);
  });

  poke_container.appendChild(pokmonEl);
};

const addToTeam = (pokemon) => {
  if (team.length < 5 && !team.includes(pokemon)) {
    team.push(pokemon);

    const teamList = document.getElementById("team-list");
    const teamItem = document.createElement("li");
    teamItem.innerHTML = `
        <div class="flex items-center justify-between flex-col rounded-full p-5 ]">
            <img class="w-20 h-20" src="${pokemon.sprites.front_default}" alt="Sunset in the mountains">
            <div class="font-bold text-center text-sm mb-2">${pokemon.name}</div>
        </div>
    `;
    teamList.appendChild(teamItem);

    if (team.length === 5) {
      document.getElementById("battle-button").style.display = "block";
    }
  } else if (team.includes(pokemon)) {
    alert(`${pokemon.name} is already in your team`);
  } else {
    alert("You can only have 5 pokemons in your team");
  }
  console.log(team);
};
