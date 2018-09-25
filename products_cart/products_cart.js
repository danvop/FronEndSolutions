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

var search = document.getElementById("search");
search.addEventListener("keyup", searchItem);


//products contains list of goods
//it populates from DB(in future)
var Products = {    
    render : function(){
        var prodList = document.getElementById("products");
        shopItems.forEach(function(item){
            //add text content
            var li = document.createElement("li");
            li.className+="list-item";
            li.textContent = item.name + " - " + item.price + "$ ";
            
            //add button "+"
            var btnAdd = document.createElement("button");
            btnAdd.className = "btn bg-success media-btn";
            btnAdd.textContent = "+";
            btnAdd.addEventListener("click", () => { 
                Cart.addItem(item.id);
            });
            li.appendChild(btnAdd);
            
            //remove buttton "-"
            var btnRemove = document.createElement("button");
            btnRemove.className = "btn bg-danger media-btn";
            btnRemove.textContent = "-";
            btnRemove.addEventListener("click", (e) => { 
                Cart.removeItem(item.id);

                });
            li.appendChild(btnRemove);
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
        
        //show cart
        document.getElementById("cart-list").classList.remove("hidden");

        //store Cart.items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(this.items));

    },
    removeItem : function(id) {
        var found = this.items.find(item => item.id === id);
        //decrease quantity
        if(!found) return;
        found.qty--;
        if(found.qty === 0) {
            // delete item from Cart

            this.items.splice(this.items.indexOf(found),1);
            found.qty = 0;            
        };
        //rerender cart
        this.render();

        //store Cart.items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    //rerender cart after add/remove item
    render : function(){
        var cartList = document.getElementById("cart");
        var cartSum = 0;
        cartList.innerHTML = "";
        this.items.forEach(function(cartItem){
            var found = shopItems.find(item => item.id === cartItem.id);
            
            
            
            var li = document.createElement("li");
            li.textContent = found.name + " - " + 
                             found.price + 
                             "$" + " " + 
                             "qty: " + cartItem.qty;
                             ;
            li.className+="list-item";
            cartList.appendChild(li);
            //calculate total
            cartSum+= found.price * cartItem.qty;
            
            //remove field with qty == 0
            if(cartItem.qty === 0) li.remove();
        });
        //render total 
        var total = document.createElement("p");
        total.innerHTML = "Total: " + cartSum + "$";
        total.className = "total";
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

function toggleDisplay(className){
    var elem = document.getElementById(className);
    elem.classList.toggle('hidden');
}


function searchItem(e) {
    var text = e.target.value.toLowerCase();
    var itemList = document.getElementById("products");
    Array.from(itemList.children).forEach(function(item) {
        
        var itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(text) != -1) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}