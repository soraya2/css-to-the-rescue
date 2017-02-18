var li = document.getElementById('product-link');
var products = document.getElementById('products');

products.classList.add('hide');

li.addEventListener("click",function(e){
	e.preventDefault();
	if(products.className==="hide"){
		 		products.classList.remove('hide');
	}else{
		products.classList.add('hide');
	}
});
