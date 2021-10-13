
fetch("https://rickandmortyapi.com/api/character")
.then((resp) => resp.json())
.then(function(data) {

data.results.forEach(element => {

  const allInfo = document.createElement("div");

  allInfo.innerHTML=`
  <img src ="${element.image}" >
  <h5>${element.name}</h5>
  `;
  document.getElementById("gridInfo").appendChild(allInfo);
})



});
