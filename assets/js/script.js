//--Data--//
let tour = document.querySelector(".tour");
let page = 4;

function getAllData() {
    fetch(" http://localhost:3000/Travel")
    .then(res => res.json())
    .then(data => {
        data.slice(0, page).forEach(element => {
            tour.innerHTML += `
                <div class="book">
                    <img src="${element.image}" alt="">
                    <h2>${element.name}</h2>
                    <p>${element.desc}</p>
                </div>
            `
        })
    })
}

getAllData();

//--Menu--//
// let list =  document.querySelector("#list");
// let modal =  document.querySelector(".modal");
// let x = document.querySelector("#x");

// list.addEventListener("click", ()=>{
//     modal.style.display = "flex";
// })

// x.addEventListener("click", ()=>{
//     modal.style.display = "";
// })