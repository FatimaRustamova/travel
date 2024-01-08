//--Data--//
let tour = document.querySelector(".tour");

function getAllData() {
    fetch("http://localhost:3000/Travel")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            tour.innerHTML += `
                <div class="book">
                    <i class="bi bi-heart" onclick="getFavorite(${element.id})"></i>
                    <img src="${element.image}" alt="">
                    <h2>${element.name}</h2>
                    <p>${element.desc}</p>
                    <button onclick="viewDetails(${element.id})">View Details</button>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                    <button onclick="updateEl(${element.id})">Update</button>
                </div>
            `
        })
    })
}

getAllData();

//--View Details--//
function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}

//--Delete--//
function deleteEl(id) {
    axios.delete(`http://localhost:3000/Travel/${id}`);
    window.location.reload();
}

//--Update--//
function updateEl(id) {
    window.location = `./update.html?id=${id}`
}

//--Favorite--//
function getFavorite(id) {
    axios.get(`http://localhost:3000/Travel/${id}`)
    .then(res => {
        axios.post("http://localhost:3000/Favorite", res.data);
        alert("Your chosen data has been sent Favorite page!")
    })
}

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