


var expandBoxes = document.getElementsByClassName("expand-box");
var collapseBtns = document.getElementsByClassName("collapse-btn");

Array.from(expandBoxes).forEach((el) => {
    // Do stuff here
    el.addEventListener("click", function(){
        this.classList.add("selected");
        this.querySelector(".collapse-btn").style.display = 'flex';
    });
});

Array.from(collapseBtns).forEach((el) => {
    // Do stuff here
    el.addEventListener("click", function(e){
        e.stopPropagation();
        this.parentElement.classList.remove("selected"); 
        this.style.display = 'none';      
    });
});
