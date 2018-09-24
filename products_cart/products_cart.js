//products list -> Object

// var items = [
//     [1,"milk",10],
//     [2,"bread",20],
//     [3,"butter",30]
// ];

var shopItems = [
    {"id":1, "name":"Milk", "price":10,
     "img": "https://via.placeholder.com/200x200//000/?text=MILK",
     "thmb_img": "https://via.placeholder.com/50x50//000?text=M" },
    {"id":2, "name":"Bread", "price":20},
    {"id":3, "name":"Butter", "price":30},
];


//products contains list of goods
//it populates from DB(in future)
var Products = {    
    render : function(){
        var prodList = document.getElementById("products");
        shopItems.forEach(function(item){
            //add text content
            var li = document.createElement("li");
            li.className+="list-item";
            li.textContent = item.name + " " + item.price + "$ ";
            
            //add button "+"
            var btn = document.createElement("button");
            btn.textContent = "+";
            btn.setAttribute("prod-id", item.id);
            btn.addEventListener("click", (e) => { 
                var itemId = Number(e.target.getAttribute("prod-id"));
                // console.log(itemId);
                Cart.addItem(itemId);
                });
            li.appendChild(btn);
            //append list item to products list
            prodList.appendChild(li);
            
        });
        //console.log(this.items);

    }
    
};

var Cart = {
    items: [],
    addItem : function(id) {
        
        //search item by id in Cart.items
        var found = this.items.find(item => item.id === id);
        //if Cart.items doesn't include item
        if(!found) {
            //add to Cart.items
            this.items.push({
                "id": id,
                "qty": 1
            });
        } else {
            //increase item quantity
            found.qty++;
        }        
        // console.log(this.items);
        this.render();

        //store Cart.items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(this.items));

    },
    remItem : function(id) {

    },
    //rerender cart after add/remove item
    render : function(){
        var cartList = document.getElementById("cart");
        var cartSum = 0;
        cartList.innerHTML = "";
        this.items.forEach(function(cartItem){
            var found = shopItems.find(item => item.id === cartItem.id);
            
            
            
            var li = document.createElement("li");
            li.textContent = found.name + " " + 
                             found.price + 
                             "$" + " " + 
                             "qty: " + cartItem.qty;
                             ;
            li.className+="list-item";
            cartList.appendChild(li);
            //calculate total
            cartSum+= found.price * cartItem.qty;
        });
        //render total 
        var total = document.createElement("p");
        total.innerHTML = "<b>Total:</b> " + cartSum + "$";
        cartList.appendChild(total);
    },
    reset : function(){
        document.getElementById("cart").innerHTML = "";
        Cart.items = [];
        localStorage.removeItem('cartItems');
    }

}
//order items= id,qty

//HELPERS

Products.render();
var storedItems = localStorage.getItem('cartItems');
if(storedItems) {
    Cart.items = JSON.parse(storedItems);
    Cart.render();
}
