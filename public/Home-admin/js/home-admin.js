//Page cursors

let picname;

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
//////////////////////////(SIDEBAR)//////////////
const sidebar = document.querySelector('.sidebar');
const bxbutton = document.querySelector('.bx-menu-alt-left');

bxbutton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
//////////////////////////////////
let DATA;
async function get() {
    const response = await fetch(`https://see-store-3.onrender.com/data/all`);
    const data = await response.json();
    DATA = data.data
    return DATA
}
////////////////////////////////////////////

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

////////////////////////////////////////////


const displaySections = async () => {
    await get().then((data) => printSections(data))
}

const deleteitem = async (id) => {
    const response = await fetch(`https://see-store-3.onrender.com/data/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    location.reload();
}





const printSections = (data) => {
    const content = document.getElementById('mycontent')
    content.innerHTML = 
    `
    <section class="section" >
            <auther class="authar" >
                <div class="div-img"><img class="auther-img" src="./pics/logo for store  .png"></div>
                <div class="auther-name"> see store </div>
            </auther>
        
            <div class="image" name="image" type="text" id="formimg">      
                 <div class="dropzone" id="dropzone" ondragover="dragOverHandler(event)" ondragleave="dragLeaveHandler(event)"
                ondrop="dropHandler(event)">
            </div>
            <div class="info" >
                <div class="name"><input  name="name" type="text" placeholder="Name"><div>
                <div class="size"><input  name="size" type="text" placeholder="size"> </div>
                <div class="price"> <input  name="price" type="text" placeholder="price"></div>
                <div class="catagory"><input  name="catagory" type="text" placeholder="catagory"> </div>
            </div>
            <div class="more">
                <div class="buttons">
                    <button class="buy" onclick="updateInfo()">&#128173</button>
                    <button class="insert" onclick="sendInfo()">  <a class="insert"><h1>INSERT</h1> </a></button>
                    
        
                </div>
            </div>
        </section>
    `
    ;
    content.classList.add('content')
    data.map((element) => {
        const section = document.createElement('section')
        section.id = element.id
        section.classList.add("section")
        section.innerHTML +=
            `
        <auther class="authar" >
        <div class="div-img"><img class="auther-img" src="./pics/logo for store  .png"></div>
        <div class="auther-name"> see store </div>
    </auther>

    <div class="image" ><img src="./pics/${element.image}" id = "img${element.id}"  ></div>
    <div class="info" >
        <div class="name">${element.name}</div>
        <div class="size"> ${element.size}</div>
        <div class="price">${element.price} $</div>
        <div class="catagory">${element.catagory} </div>
    </div>
    <div class="more">
        <div class="buttons">
            <button class="buy">&#128722;</button>
            <button class="delete">  <a class="delete">DELETE </a></button>
            <button class="update">  <a class="update">UPDATE </a></button>

        </div>
    </div>
        `
        section.querySelector('.delete').setAttribute("onclick", `deleteitem(${element.id})`);

        section.querySelector('.update').setAttribute("onclick", `fillForm(${section.id})`);

        section.querySelector('.buy').addEventListener('click', addToCart);
        content.appendChild(section)
    })
}
displaySections();



///////////////(CARTCOUNT)////////////////////////

let cartItemCount = 0;
const cartCount = document.querySelector('#cart-count');
function addToCart(e) {
    const statusElement = e.target;

    if (statusElement.classList.contains('added')) {
        statusElement.classList.remove('added');
        statusElement.classList.add('not-added');
        statusElement.classList.remove('fa-check-circle');
        cartItemCount--;
    } else {
        statusElement.classList.add('added');
        statusElement.classList.remove('not-added');
        statusElement.classList.add('fa-check-circle');
        cartItemCount++;
    }
    cartCount.innerHTML = cartItemCount;
}
/////////////////////////////////////////


//////////////(DRAGANDDROP)/////////////
function dragOverHandler(event) {
    event.preventDefault();
    const dropzone = document.querySelector('#dropzone');
    dropzone.classList.add('dragging_over');
}

function dragLeaveHandler(event) {
    event.preventDefault();
    const dropzone = document.querySelector('#dropzone');
    dropzone.classList.remove('dragging_over');
}

async function dropHandler(event) {
    event.preventDefault()
    if (event.dataTransfer.items) {
        image = new Image();
        for (let item of event.dataTransfer.items) {
            if (item.kind === 'file') {
                const file = item.getAsFile()
                if (file) {
                    if (!file.type.match('image.*')) {
                        alert('only images supported')
                        return
                    }
                    console.log(file)
                    picname = file.name;
                    const reader = new FileReader();
                    reader.readAsDataURL(file)
                    reader.onload = function (_file) {
                        image.src = _file.target.result;
                        image.width = 500
                        image.onload = function () {
                            const dropzone = document.querySelector('#dropzone');
                            dropzone.innerHTML = '';
                            dropzone.append(image);
                            dropzone.classList.add('drop');
                        };
                        image.onerror = function () {
                            alert('Invalid file type: ' + file.type);
                        };
                    };

                }
            }
        }
    }
}
/////////////////////////(SENDITEM)///////////////////////////
async function sendInfo(e) {

    let object = {}
    object = { ...object, image: picname }
    object = { ...object, name: document.getElementsByName('name')[0].value }
    object = { ...object, size: document.getElementsByName('size')[0].value }
    object = { ...object, price: document.getElementsByName('price')[0].value }
    object = { ...object, catagory: document.getElementsByName('catagory')[0].value }

    console.log(object)

    const response = await fetch("https://see-store-3.onrender.com/data",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(object)
        }
    );
    location.reload();
}
///////////////////////////////////////////////////////////////////
const fillForm = (id) => {


    if (DATA && DATA.length > 1) {
        const searchValue = id
        console.log(searchValue)
        const data = DATA.filter(item => {
            return item.id === searchValue
        })
        const dropzone = document.querySelector('#dropzone');

        img = document.createElement('img')
        img.src = `./pics/${data[0].image}`
        picname = data[0].image
        img.width = 500;
        dropzone.innerHTML = '';
        dropzone.append(img)

        document.getElementsByName('name')[0].value = data[0].name
        document.getElementsByName('size')[0].value = data[0].size
        document.getElementsByName('price')[0].value = data[0].price
        document.getElementsByName('catagory')[0].value = data[0].catagory


    }
    const UP = document.querySelector('.buy')
    UP.innerHTML = "&#10148;";
    UP.classList.add('change')
    localStorage.setItem('fillform', id)


}


////////////////////////////////////////////////////
const updateInfo = async () => {
    const id = localStorage.getItem('fillform')

    let object = {}

    object = { ...object, image: picname }
    object = { ...object, name: document.getElementsByName('name')[0].value }
    object = { ...object, size: document.getElementsByName('size')[0].value }
    object = { ...object, price: document.getElementsByName('price')[0].value }
    object = { ...object, catagory: document.getElementsByName('catagory')[0].value }
    object = { ...object, id: id };

    console.log(object)

    const response = await fetch(`https://see-store-3.onrender.com/data/${id}`,
        {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(object)
        }
    );

    location.reload();

}

///////////////////////////////////////////////////////
const logout = document.querySelector('.logout');

logout.onclick = () => {
    sessionStorage.clear();
    location.href = '/Home'
}