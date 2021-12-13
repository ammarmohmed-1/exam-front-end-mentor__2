
let M = 0 ;

// @@@@@@@@@@@@@@ Start programing THE NAVBAR MENUE responsive @@@@@@@@@@@@@@@@@@@
toggle.addEventListener("click", function(){
    const toggle = document.getElementById("toggle");
    const close = [`<i class="fas fa-times"></i>`,`<i class="fa fa-bars"></i>`];

    if(nav_list.className === "navbar_none"){
        nav_list.className = "navbar_block";
        toggle.innerHTML = close[0];
    }else{
        nav_list.className = "navbar_none";
        toggle.innerHTML = close[1];
    }
});
// @@@@@@@@@@@@@@ End programing THE NAVBAR MENUE responsive @@@@@@@@@@@@@@@@@@@

const UP__List = document.getElementsByClassName("UP__List");   

for(i = 0; i < UP__List.length; i++){
    UP__List[i].addEventListener("click", function(){
        var the_list = this.nextElementSibling;
     if(the_list.style.display == "block"){
        the_list.style.display = "none"
    }else{the_list.style.display = "block"}
    })
}