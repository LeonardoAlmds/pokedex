fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  .then((resp) => resp.json())
  .then((data) => {
    var pokemons = [];
    data.results.map((val) => {
      fetch(val.url)
        .then((resp) => resp.json())
        .then((result) => {
          pokemons.push({
            name: val.name,
            imagem: result.sprites.front_default,
          });

          if (pokemons.length == 100) {
            var content = document.querySelector(".content");
            content.innerHTML = "";

            pokemons.map(function (val) {
              content.innerHTML += `
            <div class="card">
            <img src="${val.imagem}" alt="pokemon">

            <div>
              <p><span>Nome: </span>${val.name}</p>
            </div>
          </div>
            `;
            });
          }
        })
        .catch((err) => console.log(err));
    });
  })
  .catch((err) => console.log(err));
