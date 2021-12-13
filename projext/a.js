//function myFunction () {
//    var topNav = document.getElementById("myTopnav");
//    if (topNav.className === "topnav") {
//      topNav.className += " responsive";
//    } else {
//       topNav.className = "topnav";
//    }
//  }

var tog = document.getElementById("tog");
var my_list = document.getElementById("my_list");
var list_li = document.querySelector("nav > ul > li");

tog.addEventListener("click",function(){
  if(my_list.className == "list"){
    my_list.className += "list_stime"
  }else{my_list.className = "list"}
})