

fetch("https://rickandmortyapi.com/api/character", {
    "method": "GET",

})
.then((response) => response.json()) //2
.then((character) => {
  console.log(character); //3
  let result = character.results;
  for(i in result){
    let div = document.getElementById("grid")
      let inerdiv = document.createElement("div");
      let img = document.createElement("img");
      img.src =result[i].image;
      inerdiv.appendChild(img);
      let name = document.createElement("h6");
      name.innerText = result[i].name
      inerdiv.appendChild(name);
      div.appendChild(inerdiv);
    
  }
});
  

