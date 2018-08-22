// console.log(document.forms);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);

var button = document.querySelector("button");
button.addEventListener("click", function(){
    var itemList = document.getElementById("items");
    var li = document.createElement("li");
    var input = document.querySelector("input");
    if (input.value !== "") {
        li.className = "list-group-item";
        li.textContent = input.value;
        itemList.appendChild(li);
    }
    
        
});