var li = document.getElementById('product-link');
var products = document.getElementById('products');
var menuItems = document.getElementsByTagName('ul')[0];
var hamburgerMenu = document.getElementById('menuToggler');
var gridContainer = document.getElementsByClassName('grid-container')[0];
var subLinks = document.querySelectorAll('nav > ul a')[4];
var subLinks2 = document.querySelectorAll('nav > ul a')[0];

products.classList.add('hide');

function triggerSubMenu(e) {

    e.preventDefault();
    if (products.className === "") {
        products.classList.add('hide');
    } else {
        products.classList.remove('hide');

    }

}


li.addEventListener("focus", triggerSubMenu);


subLinks.addEventListener("focus", triggerSubMenu);



hamburgerMenu.addEventListener("click", function(e) {

    if (hamburgerMenu.checked) {
        gridContainer.classList.add('blur');
        menuItems.classList.remove('hide');
        menuItems.classList.add('show');

    } else {
        menuItems.classList.remove('show');
        gridContainer.classList.remove('blur');
    }
});
