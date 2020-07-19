var navbar = document.getElementById("navbar");
//navbar.innerHTML = ``;
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
navbar.style.height = height+"px";
console.log(height+"px");