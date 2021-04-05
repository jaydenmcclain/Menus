var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".wrap");
var begin = 0
var el = document.createElement("div");
var elVal= document.createElement("h1");
var pages = [
  {
    name: "Home",
    content: "Home"
  },
  {
    name:"About",
    content: "Jayden"
  },
  {
    name: "Interact",
    content: "none"
  }
]

for(var i = 0; i<pages.length; i++){
 createPage(pages[i]);
}

function createPage(pg){
   var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button)
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Interact"){
    var header = document.createElement("h1");
  header.innerHTML = wd
  display.appendChild(header)
  }else{
    elVal.innerHTML = "Counter Value: " + begin;
    el.appendChild(elVal);
    display.appendChild(el)
    var button = document.createElement("button");
    button.addEventListener("click", function(){
      count();
    })
    button.innerHTML = "Add 1"
    display.appendChild(button)
    
  }
}

function count(){
  var begin = 0;
  begin++;
  elVal.innerHTML = "Counter Value: " + begin;
  el.appendChild(elVal);
  display.appendChild(el)
}

contentWrite(pages[0].content, "Home")