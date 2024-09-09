// import { kanu } from "./products.js";

let inputbox = document.querySelector(".inputbox");
let loading = document.querySelector(".loading");
let con = document.querySelector(".res");

inputbox.addEventListener("keyup", (e) => {
  let man = e.target.value.toLowerCase();
  
  con.innerHTML = ""; // Clear the results container

  // Show loading indicator
  loading.style.display = "block";
  con.appendChild(loading);

  // Simulate some delay for the loading effect
  setTimeout(() => {
    if (kanu) {
      let filteredProducts = kanu.filter((enl) =>
        enl.Name.toLowerCase().includes(man)
      );

      // Clear loading after search is complete
      loading.style.display = "none";
      

      // Populate results
      filteredProducts.forEach((key) => {
        let gon = document.createElement("div");
        gon.classList.add("gon");

        let gon_img = document.createElement("div");
        gon_img.classList.add("gon-img");

        let img = document.createElement("img");
        img.setAttribute("src", key.image);

        let titl = document.createElement("div");
        titl.classList.add("titl");
        titl.innerHTML = `<p>${key.Name}</p>`;

        gon.appendChild(gon_img);
        gon_img.appendChild(img);
        gon.appendChild(titl);
        con.appendChild(gon);
      });

      // If no matching results, display a message
      if (filteredProducts.length === 0) {
        con.innerHTML = `<p>No results found</p>`;
      }
    }
  }, 500); // Simulating a 500ms delay for loading (can be adjusted)
});


inputbox.addEventListener("focus",()=>{
    let con = document.querySelector(".res");
    con.style.display = "block"
})

inputbox.addEventListener("blur",()=>{
    let con = document.querySelector(".res");
    con.style.display = "none"
})