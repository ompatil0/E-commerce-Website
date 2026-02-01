const product = [
    {
        id: 0,
        image: 'image/55.jpeg',
        title: 'MENS SQUARE SHIRT',
        price: 599,
    },
    {
        id: 1,
        image: 'image/66.jpeg',
        title: 'MENS SQUARE SHIRT',
        price: 399,
    },
    {
        id: 2,
        image: 'image/44.jpeg',
        title: 'MENS T-SHIRT',
        price: 699,
    },
    {
        id: 3,
        image: 'image/22.jpg',
        title: 'KIDS ROUNDED T-SHIRT',
        price: 299,
    },
    {
        id: 4,
        image: 'image/33.jpeg',
        title: 'KID CARTOON T-SHIRT',
        price: 249,
    },
    {
        id: 5,
        image: 'image/77.jpeg',
        title: 'WOMEN T-SHIRT',
        price: 299,
    },{
        id: 6,
        image: 'image/88.jpeg',
        title: 'WOMEN KURTA',
        price: 459,
    },{
        id: 7,
        image: 'image/99.jpeg',
        title: 'WOMEN DRESS',
        price: 499,
    },{
        id: 8,
        image: 'image/f1.jpeg',
        title: 'SPORT SHOES',
        price: 599,
    },{
        id: 9,
        image: 'image/f2.jpeg',
        title: 'SNEAKER SHOES',
        price: 399,
    },
    {
        id: 10,
        image: 'image/f3.jpeg',
        title: 'CASUAL SHOES',
        price: 699,
    },
    {
        id: 11,
        image: 'image/f4.jpeg',
        title: 'MORDERN SHOES',
        price: 299,
    },
    {
        id: 12,
        image: 'image/f5.jpeg',
        title: 'FORMAL CHAPPAL',
        price: 249,
    },
    {
        id: 13,
        image: 'image/f6.jpeg',
        title: 'HEEL SANDAL',
        price: 299,
    },
    {
        id: 14,
        image: 'image/f7.jpeg',
        title: 'WOMENS SANDAL',
        price: 459,
    },
    {
        id: 15,
        image: 'image/f8.jpeg',
        title: 'KOLHAPURI CHAPPAL',
        price: 499,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2><i class="fa-solid fa-indian-rupee-sign" ></i> ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML =`<h2 <i class="fa-solid fa-indian-rupee-sign" ></i></h2>`+total+".0";
            return(
                `<div class='cart-item'> 
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'><i class="fa-solid fa-indian-rupee-sign" ></i> ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}