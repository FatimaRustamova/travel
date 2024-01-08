let id = new URLSearchParams(window.location.search).get("id");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let image = document.querySelector("#image");
let form = document.querySelector("form");

fetch(`http://localhost:3000/Travel/${id}`)
.then(res => res.json())
.then(data => {
    name.value = data.name;
    image.src = data.image;
    desc.value = data.desc;
})

file.addEventListener("input", (e)=> {
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=> {
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let obj = {
        image: image.src,
        name: name.value,
        desc: desc.value
    };
    axios.patch(`http://localhost:3000/Travel/${id}`, obj)
    .then(res => {
        window.location = "./index.html"
    })
})

//---Go Back---//
let back = document.querySelector(".back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})