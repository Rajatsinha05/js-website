import nav from "../components/navbar.js";
function test() {
  console.log("test");
}
document.getElementById("nav").innerHTML = nav();

let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];

{
  /* <div class="cart d-flex align-items-center bg-danger">
     <div class="box-25 w-25">
      <img
        src="https://cdn.shopify.com/s/files/1/2399/6481/products/Weblist.jpg?v=1646465160"
        alt=""
      />
    </div>
    <div class="box-25 w-25">
        <h1>Apple Juice</h1>
    </div>



    <div class="box-25 w-25">
        <p><span class="plus">+</span>2<span class="minus">-</span></p>
    </div>

    <div class="box-25 w-25">
        <div class="price">
            <h1>$2.99</h1>
        </div>
    </div>
   </div> */
}


let ui=``
let cartui = (products) => {
  products.map((product) => {
//  let imgdiv=document.createElement('div');
// let img = document.createElement('img');
// img.src = product.images[0]


// imgdiv.append(img)
// imgdiv.setAttribute("class", "box-25 w-25")


// let namediv=document.createElement('div');
// let name=document.createElement('h1');
// name.innerHTML =product.title

// namediv.append(name)
// namediv.setAttribute("class", "box-25 w-25")



// let qtydiv=document.createElement('div');
// let minus=document.createElement('span');
// minus.innerHTML="-"
// let plus=document.createElement('span');
// plus.innerHTML="+"
// let qty=document.createElement('span');
// qty.innerHTML=product.qty

// let qtyp=document.createElement("p")
// minus.setAttribute("class", "minus")
// plus.setAttribute("class", "plus")

// qtyp.append(minus,qty,plus)

// qtydiv.append(qtyp)
// qtydiv.setAttribute("class", "box-25 w-25")






// let div1p=document.createElement("div");
// let div2p=document.createElement("div");
// let price=document.createElement("h1");
// price.innerHTML=product.price

// div2p.append(price)


// div2p.setAttribute("class", "price")
// div1p.append(div2p)

// div1p.setAttribute("class", "box-25 w-25")



// console.log(imgdiv,namediv,qtydiv,div1p);

// let parent=document.createElement("div")
// parent.append(imgdiv,namediv,qtydiv,div1p)
// parent.setAttribute("class","cart d-flex align-items-center bg-danger")
// // document.getElementById("cart").append(imgdiv,namediv,qtydiv,div1p)
// document.querySelector("#test").append(parent)






ui+=` <div class="cart d-flex align-items-center bg-danger">
<div class="box-25 w-25">
 <img
   src=${product.images[1]}
   alt=""
 />
</div>
<div class="box-25 w-25">
   <h1>${product.title}</h1>
</div>



<div class="box-25 w-25">
   <p><span class="plus" onclick=test >+</span>${product.qty}<span class="minus">-</span></p>
</div>

<div class="box-25 w-25">
   <div class="price">
       <h1>${product.price}</h1>
   </div>
</div>
</div> `






  });



};
cartui(cartitem);

document.getElementById("parent").innerHTML=ui
let totalprice = 0
cartitem.map((ele)=>{
totalprice +=ele.price*ele.qty
})

document.getElementById("test").innerHTML=`total price ${totalprice}`