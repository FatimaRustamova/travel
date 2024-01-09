//--Data--//
let tour = document.querySelector(".tour");
let search = document.querySelector("input[type=search]");
let arr_1 = [];
let arr_2 = [];

function getAllData() {
    fetch("http://localhost:3000/Travel")
        .then(res => res.json())
        .then(data => {
            arr_2 = data;
            tour.innerHTML = "";
            arr_1 = arr_1.length || search.value ? arr_1 : data;
            arr_1.forEach(element => {
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

//--Search--//
search.addEventListener("input", (e) => {
    arr_1 = arr_2;
    arr_1 = arr_1.filter((el) => {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    getAllData();
})

//--Sort--//
let sorted = "descending";
let sort = document.querySelector("#sort");

sort.addEventListener("click", () => {
    if (sorted == "ascending") {
        arr_1 = arr_1.sort((a, b) => a.name.localeCompare(b.name));
        sorted = "descending";
        sort.innerHTML = "SORT ASC";
    }
    else if (sorted == "descending") {
        arr_1 = arr_1.sort((a, b) => b.name.localeCompare(a.name));
        sorted = "default";
        sort.innerHTML = "SORT DSC";
    }
    else {
        arr_1 = arr_2;
        sorted = "ascending";
        sort.innerHTML = "SORT";
    }
    getAllData();
})

//--Menu--//
let list = document.querySelector("#list");
let modal = document.querySelector(".modal");

list.addEventListener("click", () => {
    modal.classList.toggle("none")
})

//---Hurricane---//
let hurricane = document.querySelector(".hurricane");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 250){
        hurricane.style.visibility = "visible"
    }
    else{
        hurricane.style.visibility = ""
    }
})

hurricane.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})