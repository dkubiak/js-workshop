'use strict';

const View = {
    renderProducts (model, $target){
        const products = model.getProducts();

        for (var idx in products) {
            const $product = View._renderProduct(products[idx]);
            $target.appendChild($product);
        }
    },

    _renderProduct(product) {
        var $product = document.createElement('div');
        $product.className = 'product';

        var $img = document.createElement('img');
        $img.className = 'product__img';
        $img.src = product.imgURL;

        var $title = document.createElement('h2');
        $title.className = 'product__name';
        $title.appendChild(document.createTextNode(product.name))

        var $description = document.createElement('p');
        $description.className = 'product__description';
        $description.textContent = product.description;

        var $price = document.createElement('h1');
        $price.className = 'product__price';
        $price.textContent = product.price;

        var $buyItButton = document.createElement('button');
        $buyItButton.className = 'product__button--buyIt';
        $buyItButton.textContent = "Kup Teraz!";
        $buyItButton.addEventListener('click', function () {
            alert('Kupione!!');
        });

        $product.appendChild($img);
        $product.appendChild($title);
        $product.appendChild($description);
        $product.appendChild($price);
        $product.appendChild($buyItButton);

        return $product;
    }
};


