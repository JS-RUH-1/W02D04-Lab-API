fetch("https://rickandmortyapi.com/api/character", {
  method: "GET",
})
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((data) => {
    let res = data.results;
    console.log(res);
    let main = document.getElementById("card-group");
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      main.innerHTML += `
            <div class="card " style="max-width: 18rem;">
              <img class="card-img-top img-thumbnail" src="${element.image}" alt=" image" />
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
              </div>
            </div>
            `;
    }
  })
  .catch((err) => {
    console.log("rejected", err);
  });

// function load() {
//   let mydata = JSON.parse(data.results);
//   //   console.log(mydata);

//   let main = document.getElementById("card-group");
//   for (let i = 0; i < mydata.length; i++) {
//     const element = mydata[i];
//     main.innerHTML += `
//           <div class="card">
//             <img class="card-img-top" src="${element.image}" alt=" image" />
//             <div class="card-body">
//               <h5 class="card-title">${element.name}</h5>
//             </div>
//           </div>
//           `;
//   }
// }
