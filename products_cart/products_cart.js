//products list -> Object

// var items = [
//     [1,"milk",10],
//     [2,"bread",20],
//     [3,"butter",30]
// ];

var items = [
    {"id":1, "name":"milk", "price":10},
    {"id":2, "name":"bread", "price":20},
    {"id":3, "name":"butter", "price":30},
];


//products contains list of goods
//it populates from DB(in future)
var Products = {    
    render : function(){
        var prodList = document.getElementById("products");
        items.forEach(function(item){
            var li = document.createElement("li");
            var btn = document.createElement("button");
            
            btn.textContent = "+";
            btn.setAttribute("prod-id", item.id);
            btn.addEventListener("click", (e) => { 
                var itemId = e.target.getAttribute("prod-id")
                console.log(itemId);
                Cart.addItem(itemId);
                });
            li.textContent = item.id + " " + item.name + " " + item.price + "$";
            li.appendChild(btn);
            prodList.appendChild(li);
        });
        //console.log(this.items);

    }
    
};

var Cart = {
    items: [],
    addItem : function(id) {
        //if Cart.items includes id = id => qty++ else add new item
        this.items.push(id);
        console.log(this.items);
        
    },
    //rerender cart after add/remove item
    render : function(){
        
    }

}
//order items= id,qty

//HELPERS

Products.render();

//Cart.populate();