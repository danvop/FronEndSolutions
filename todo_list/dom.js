

var button = document.getElementById("addBtn");
var itemList = document.getElementById("items");
var search = document.getElementById("search");


button.addEventListener("click", addItem);

itemList.addEventListener("click",removeItem);

search.addEventListener("keyup", searchItem);

function addItem(e) {
    e.preventDefault();
    var input = document.getElementById("taskInput");
    if (input.value !== "") {
        //add Task content
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = input.value;
        itemList.appendChild(li);
        //add delete button
        var delBtn = document.createElement("delBtn");
        delBtn.className = "btn btn-danger btn-sm float-right delete";
        delBtn.textContent="X";
        li.appendChild(delBtn);
        //clear input value
        input.value = "";
    }
}

function removeItem(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            itemList.removeChild(e.target.parentElement);
        }
    };
}

function searchItem(e) {
    var text = e.target.value.toLowerCase();

    Array.from(itemList.children).forEach(function(item) {
        
        var itemText = item.firstChild.textContent.toLowerCase();
        console.log(itemText);
        console.log(text);
        if (itemText.indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


