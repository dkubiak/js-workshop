let $products = document.querySelector('.products_top');
$products.innerHTML = '';
const standardProducts = new Products(Model.standardProducts);
const premiumProducts = new Products(Model.premiumProducts);

const viewPremium = new ViewPremium(premiumProducts);
viewPremium.render($products)

const viewStandard = new ViewStandard(standardProducts);
viewStandard.render($products);


