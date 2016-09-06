'use strict';
const Model = {
    _products: [
        {
            id: 1,
            name: 'MacBook PRO',
            description: "Apple's 15-inch MacBook Pro with Retina Display returns for 2015, this time with the" +
            " power of the Force. This refreshed MacBook sports the company's innovative Force Touch trackpad, which can" +
            " perform a host of pressure-sensitive commands. It also packs an optional AMD Radeon R9 R9 M370X GPU, which" +
            " Apple says can deliver up to 80 times the graphics performance as last year's model.",
            price: '8 000 PLN',
            imgURL: 'http://www.laptopmag.com/images/uploads/4374/g/apple-macbook-pro-13inch-g10.jpg',

        },
        {
            id: 2,
            name: 'MacBook PRO 2',
            description: "Apple's 13-inch MacBook Pro with Retina Display returns for 2015, this time with the"
            +
            " power of the Force. This refreshed MacBook sports the company's innovative Force Touch trackpad, which can" +
            " perform a host of pressure-sensitive commands. It also packs an optional AMD Radeon R9 R9 M370X GPU, which" +
            " Apple says can deliver up to 80 times the graphics performance as last year's model.",
            price: '10 000 PLN',
            imgURL: 'https://i.wpimg.pl/730x0/m.komorkomania.pl/macbook-pro-13-retina-13-9221e96.jpg',

        },
        {
            id: 3,
            name: 'MacBook PRO 3',
            description: "Apple's 13-inch MacBook Pro with Retina Display returns for 2015, this time with the" +
            " power of the Force. This refreshed MacBook sports the company's innovative Force Touch trackpad, which can" +
            " perform a host of pressure-sensitive commands. It also packs an optional AMD Radeon R9 R9 M370X GPU, which" +
            " Apple says can deliver up to 80 times the graphics performance as last year's model.",
            price: '10 000 PLN',
            imgURL: 'https://i.wpimg.pl/730x0/m.komorkomania.pl/macbook-pro-13-retina-13-9221e96.jpg',

        }
        ,
        {
            id: 4,
            name: 'MacBook PRO 3',
            description: "Apple's 13-inch MacBook Pro with Retina Display returns for 2015, this time with the" +
            " power of the Force. This refreshed MacBook sports the company's innovative Force Touch trackpad, which can" +
            " perform a host of pressure-sensitive commands. It also packs an optional AMD Radeon R9 R9 M370X GPU, which" +
            " Apple says can deliver up to 80 times the graphics performance as last year's model.",
            price: '10 000 PLN',
            imgURL: 'https://i.wpimg.pl/730x0/m.komorkomania.pl/macbook-pro-13-retina-13-9221e96.jpg',

        }
    ],

    getProducts() {
        return Model._products.slice(0);
    }

}