fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    
    data.results.forEach(character => {
        const node = document.createElement("div");                
        node.innerHTML = `
        <img src="${character.image}" />
        <h3>${character.name}</h3>
        `;
                                  
        document.getElementById("list").appendChild(node);
    })

  });