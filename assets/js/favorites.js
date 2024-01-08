let favorites =  document.querySelector("#favorites");

fetch("http://localhost:3000/Favorite")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        favorites.innerHTML += `
            <div class="book">
                <i class="bi bi-heart-fill"></i>
                <img src="${element.image}" alt="">
                <h2>${element.name}</h2>
                <p>${element.desc}</p>
                <button onclick="deleteFav(${element.id})">Delete</button>
            </div>
        `
    })
})

//--Delete--//
function deleteFav(id) {
    axios.delete(`http://localhost:3000/Favorite/${id}`);
    window.location.reload();
}

//---Go Back---//
let back = document.querySelector(".back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})