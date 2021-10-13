 

 

 
fetch('https://rickandmortyapi.com/api/character')
.then((resp) => resp.json())
.then(function(data) {

data.results.forEach(element => {
  const elm = document.createElement('div');
  elm.innerHTML=`
  <img src =${element.image} >
  <h5>       ${element.name}</h5>
  `;
  document.getElementById('parent').appendChild(elm);
})
});



 