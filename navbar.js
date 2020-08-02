//Add https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js as external script
function myFunction(elemId) {
  var x = document.getElementById(elemId);
  if (x.style.display === "none") {
	x.style.display = "block";
  } else {
	x.style.display = "none";
  }
}
var navbar = document.getElementById("navbar");
navbar.innerHTML = `<body>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
   <div id=navbar>
     <img src="https://cdn.discordapp.com/attachments/711039492688969790/735387388444147762/unknown.png"></img>
      <dl>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dt>Home</dt>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dt>Team</dt>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Team&nbsp;Members</dd>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Collaborations</dd>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dt>Project</dt>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Description</dd>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Research</dd>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Contributions</dd>
         </a>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dd>Attributions</dd>
         </a>
      </dl>
   </div>
</body>`;
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
navbar.style.height = height+"px";
console.log(height+"px");