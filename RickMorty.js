// api url
const api_url = "https://rickandmortyapi.com/api/character";
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  show(data);
}
// Calling that async function
getapi(api_url);

let tab = "";
function show(data) {
  for (let i = 0; i < data.results.length; i++) {
    tab +=
      "<div>" +
      `<img src=${data.results[i].image} >` +
      "<h3>" +
      data.results[i].name +
      "</h3>" +
      "</div>";
  }
  document.getElementById("employees").innerHTML = tab;
}
