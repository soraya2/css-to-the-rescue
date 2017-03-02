var li = document.getElementById('product-link');
var products = document.getElementById('products');
var menuItems = document.getElementsByTagName('ul')[0];
var hamburgerMenu = document.getElementById('menuToggler');
// menuItems.classList.add('hide');
products.classList.add('hide');

li.addEventListener("click",function(e){
	e.preventDefault();
	if(products.className==="hide"){
		 		products.classList.remove('hide');
	}else{
		products.classList.add('hide');
	}
});


hamburgerMenu.addEventListener("click",function(e){

	if(hamburgerMenu.checked){
		// console.log('hello');
		 		menuItems.classList.remove('hide');
		 		menuItems.classList.add('show');

	}else{
		// menuItems.classList.add('hide');
		menuItems.classList.remove('show');
	}
});
