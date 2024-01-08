let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Travel/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML += `
        <div class="book">
            <img src="${data.image}" alt="">
            <h2>${data.name}</h2>
            <p>${data.desc}</p>
        </div>
    `
})

//---Go Back---//
let back = document.querySelector(".back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})