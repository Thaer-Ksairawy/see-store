/////////////////////////////////////////
//Page cursors
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2");
function n(t) {
    e.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover")
}
s();
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
/////////////////////////SIDEBAR////////
const sidebar = document.querySelector('.sidebar');
const bxbutton = document.querySelector('.bx-menu-alt-left');

bxbutton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
//////////////////////////////////
let DATA;
async function get() {
    const response = await fetch('https://see-store-3.onrender.com/Home/data/all');
    const data = await response.json();
    DATA = data.data
    return DATA
}

const filterItems = () => {
    console.log('Inside filter')
    const searchInput = document.getElementById('search-input')
    if (DATA && DATA.length > 1 && searchInput.value && searchInput.value.length > 1) {
        const searchInput = document.getElementById('search-input')
        const searchValue = searchInput.value
        console.log(searchValue)
        const data = DATA.filter(item => {
            return item.name === searchValue || item.catagory === searchValue
        })
        printSections(data)
    }
    else {
        printSections(DATA)
    }

}


//////////////////////////////////////filterCatagory///////////
const filterAll = () => {
        printSections(DATA)
}


const filterSport = () => {
    if (DATA && DATA.length > 1) {
        const sport = "sport shoes"
        const data = DATA.filter(item => {
            return item.catagory === sport
        })
        printSections(data)
    }
}

const filterSuit = () => {
    if (DATA && DATA.length > 1) {
        const suit = "suit"

        const data = DATA.filter(item => {
            return item.catagory === suit
        })
        printSections(data)
    }
}


const filterToys = () => {
    if (DATA && DATA.length > 1) {
        const Toys = "boy's toys"
        const data = DATA.filter(item => {
            return item.catagory === Toys
        })
        printSections(data)
    }
}


const filtertechnolegy = () => {
    if (DATA && DATA.length > 1) {
        const technolegy = "technolegy"
        const data = DATA.filter(item => {
            return item.catagory === technolegy
        })
        printSections(data)
    }
}

/////////////////////////////////////

const displaySections = async () => {
    await get().then((data) => {
        
        printSections(DATA)
    })
}
const printSections = (data) => {

    const content = document.getElementById('mycontent')
    content.innerHTML = "";
    content.classList.add('content')
    data.map((element) => {
        const section = document.createElement('section')
        section.classList.add("section")
        section.innerHTML +=
            `
        <auther class="authar" >
        <div class="div-img"><img class="auther-img" src="./pics/logo for store  .png"></div>
        <div class="auther-name"> see store </div>
    </auther>

    <div class="image" ><img src="./pics/${element.image}"></div>
    <div class="info" >
        <div class="name">${element.name}</div>
        <div class="size"> ${element.size}</div>
        <div class="price">${element.price} $</div>
        <div class="catagory">${element.catagory} </div>
    </div>
    <div class="more">
        <div class="buttons">
            <button class="buy" onclick="alert('Please Rigester first then try buy it..')">&#128722;</button>
            <button class="buynow">  <a href="#" class="buynow">Buy Now </a></button>
        </div>
    </div>
        `
        content.appendChild(section)
    })
}
displaySections();
//////////////////////////////////////////////////////////
