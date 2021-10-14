

let characters;
// let = characters2=[];
fetch("https://rickandmortyapi.com/api/character", {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    data => {
        characters=data.results;
        for (let i=0 ; i<characters.length ; i++) {
              //  characters2.push({"name" : characters[i].name,"url" : characters[i].url})
                document.getElementById("characters").innerHTML+=(`<div id="character"> <p>${characters[i].name}</p><img src="${characters[i].image}" ></div>`)
                
        }
        console.log(document.getElementById("characters"));
       // console.log(characters2)
    }
).catch((err) => {
    console.log('rejected', err)
});

console.log(characters);
/*
{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
 */