let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let image = document.querySelector("#image");
let form = document.querySelector("form");

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
    let obj = {};
    let src = file.files[0];
    let reader = new FileReader();
    reader.onload = (e)=> {
        obj = {
            image: e.target.result,
            name: name.value,
            desc: desc.value
        }
        axios.post("http://localhost:3000/Travel", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    reader.readAsDataURL(src);
})

//---Go Back---//
let back = document.querySelector(".back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})