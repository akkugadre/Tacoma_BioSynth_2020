var navbar = document.getElementById("navbar");
navbar.innerHTML = `
     <img src="https://cdn.discordapp.com/attachments/711039492688969790/735387388444147762/unknown.png"></img>
      <dl>
         <a href=https://codepen.io/MaxAllen/pen/QWyZrRy>
            <dt>Home</dt>
         </a>
         <a href="teambios.html">
            <dt>Team</dt>
         </a>
         <a href="teambios.html">
            <dd>Team&nbsp;Members</dd>
         </a>
         <a href="collaborations.html">
            <dd>Collaborations</dd>
         </a>
         <a href="projDescription.html">
            <dt>Project</dt>
         </a>
         <a href="projDescription.html">
            <dd>Description</dd>
         </a>
         <a href="research.html">
            <dd>Research</dd>
         </a>
         <a href="contributions.html">
            <dd>Contributions</dd>
         </a>
         <a href="attributions.html">
            <dd>Attributions</dd>
         </a>
      </dl>
   `;
var body = document.body,
    html = document.documentElement;
/*
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
navbar.style.height = height+"px";
console.log(height+"px");*/




// Team Bio Stuff
//Add https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js as external script
function teamBioFace(elemId) {
  var x = document.getElementById(elemId);
  if (x.style.display === "block") {
	x.style.display = "none";
  } else {
	x.style.display = "block";
  }
}
