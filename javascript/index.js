let items = [
    {
        'id': 1,
        'name': 'Sweet Item',
        'image': '/images/item1.jpeg',
        'price': 5,
        'category': 'sweets'
    },
    {
        'id': 2,
        'name': 'Cupcake Item',
        'image': '/images/item2.jpeg',
        'price': 5,
        'category': 'cupcakes'
    },
    {
        'id': 3,
        'name': 'Cake Item',
        'image': '/images/item3.jpeg',
        'price': 5,
        'category': 'cakes'
    },
    {
        'id': 4,
        'name': 'Dougnut Item',
        'image': '/images/item4.jpeg',
        'price': 5,
        'category': 'doughnuts'
    },
    {
        'id': 5,
        'name': 'Sweet Item',
        'image': '/images/item5.jpeg',
        'price': 10,
        'category': 'sweets'
    },
    {
        'id': 6,
        'name': 'Cupcake Item',
        'image': '/images/item6.jpeg',
        'price': 10,
        'category': 'cupcakes'
    },
    {
        'id': 7,
        'name': 'Cake Item',
        'image': '/images/item7.jpeg',
        'price': 10,
        'category': 'cakes'
    },
    {
        'id': 8,
        'name': 'Dougnut Item',
        'image': '/images/item8.jpeg',
        'price': 10,
        'category': 'doughnuts'
    },
    {
        'id': 9,
        'name': 'Sweet Item',
        'image': '/images/item9.jpeg',
        'price': 15,
        'category': 'sweets'
    },
    {
        'id': 10,
        'name': 'Cupcake Item',
        'image': '/images/item10.jpeg',
        'price': 15,
        'category': 'cupcakes'
    },
    {
        'id': 11,
        'name': 'Cake Item',
        'image': '/images/item11.jpeg',
        'price': 15,
        'category': 'cakes'
    },
    {
        'id': 12,
        'name': 'Dougnut Item',
        'image': '/images/item12.jpeg',
        'price': 15,
        'category': 'doughnuts'
    },
]
let cart = [];
function customAnimation(props, seconds, element) {
    let animation = element.animate(props, seconds);
    animation.onfinish = () => {
        Object.keys(props).forEach(key => {
            element.style[key] = props[key];
        });
    };

}
let itemCount = 0;
let itemPrice = 0;

//for mobile users
function toggleDropDown() {
    let dropDowncontainer = document.body.getElementsByClassName('drop-down-container')[0];
    let navBar = document.body.getElementsByClassName('top-nav')[0];
    let displayType = dropDowncontainer.style.display;
    if (displayType === 'none' || displayType == '') {
        dropDowncontainer.style.display = 'inline';
        customAnimation({'height': '15rem'}, 300, navBar);
        return;
    }
    customAnimation({'height': '4.5rem'}, 300, navBar);
    setTimeout(function () {
        dropDowncontainer.style.display = 'none';
    }, 300);
}
function aboutusSweetAssignEvent() {
    //cant stop propagation unless using native events
    let sweet = document.querySelector('.aboutus-sweet');
    sweet.addEventListener('click', (elem) => {
        return toggleAboutBorder(elem);
    });
}
function defaultAboutBorder() {
    let border = document.querySelector('.aboutus-border');
    customAnimation({'margin-top': '-2rem', 'margin-left': '4rem'}, 300, border);
}
function toggleAboutBorder(element) {
    element.stopPropagation();
    let border = document.querySelector('.aboutus-border');
    customAnimation({'margin-top': '-0.5rem', 'margin-left': '5rem'}, 300, border);
}
function addToCart(item, elem) {
    if (elem.style.visibility === 'hidden') return;
    itemPrice += item.price;
    itemCount += 1;
    cart.push(item);
    alert('item added to cart');
    document.querySelector('#cart-btn').innerHTML = `${itemCount} items $${itemPrice}`;
    elem.style.visibility = 'hidden';
}

function displayItems(itemsList) {
    let container = document.querySelector('.store-item-container');
    if (itemsList == null) {
        itemsList = items;
    }
    for (let item of itemsList) {
        //item card
        let itemBox = document.createElement("div");
        // item preview container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add('item-image-container');
        let shoppingCartContainer = document.createElement("div");
        shoppingCartContainer.classList.add('cart-container');
        //cart icon displayed on hover
        let shoppingCart = document.createElement('i');
        shoppingCart.className = "fa fa-shopping-cart";
        shoppingCart.classList.add('item-cart-icon');
        shoppingCartContainer.append(shoppingCart);
        shoppingCartContainer.id = item.id.toString();
        imageContainer.append(shoppingCartContainer);

        // item preview 
        let itemImage = document.createElement("IMG");
        itemImage.setAttribute("src", item.image);
        itemImage.classList.add('item-image');
        imageContainer.append(itemImage);

        // item name and price
        let itemDescription = document.createElement("SPAN");
        itemDescription.classList.add('item-description');
        itemDescription.innerHTML = item.name + ` &nbsp &nbsp &nbsp &nbsp` + `$ ${item.price}`;
        itemBox.append(imageContainer);
        itemBox.appendChild(itemDescription);
        itemBox.classList.add('store-item');
        //events
        //add to cart
        shoppingCartContainer.addEventListener('click', () => {
            return addToCart(item, shoppingCartContainer);
        });
        //show cart on hover
        imageContainer.addEventListener('mouseenter', () => {
            //give time for animation
            setTimeout(() => {
                shoppingCartContainer.style.visibility = 'visible';
            }, "100")

        });
        imageContainer.addEventListener('mouseleave', () => {
            shoppingCartContainer.style.visibility = 'hidden';
        });
        container.append(itemBox);
    }
}
function searchCategory(catName) {
    let container = document.querySelector('.store-item-container');
    catName = catName.toLowerCase();
    container.innerHTML = '';
    if (catName == 'all') {
        displayItems(null);
        return;
    }
    let itemList = [];
    for (let item of items) {
        if (item.category == catName) {
            itemList.push(item);
        }
    }
    displayItems(itemList);
}
function searchItems() {
    let search = document.querySelector('.search-box').value.toLowerCase();
    let container = document.querySelector('.store-item-container');
    console.log(search);
    container.innerHTML = '';
    if (search == '') {
        displayItems(null);
        return;
    }
    let itemList = [];
    for (let item of items) {
        if (item.name.toLowerCase().startsWith(search)) {
            itemList.push(item);
        }
    }
    displayItems(itemList);
}