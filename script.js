var navbar = document.getElementById("navbar");
navbar.innerHTML = `
     <a href="index.html"><img src="Images/Solid-logo2.png"></img></a>
      <dl>
         <a href="index.html">
            <dt>Home</dt>
         </a>
         <a href="teambios.html">
            <dt>Team</dt>
         </a>
         <a href="projDescription.html">
            <dt>Project</dt>
         </a>
         <a href="research.html">
            <dt>Research</dt>
         </a>
		 <a href="ldpe.html">
			<dd>LDPE</dd>
		 </a>
		 <a href="bacillus-subtilis.html">
			<dd>B. subtilis</dd>
		 </a>
		 <a href="bacillus-amyloliquefaciens.html">
			<dd>B. amylo...</dd>
		 </a>
		 <a href="pseudomonas-putida.html">
			<dd>P. putida</dd>
		 </a>
		 <a href="cocultures.html">
			<dd>Cocultures</dd>
		 </a>
		 <a href="references.html">
			<dd>References</dd>
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
var mainContent = document.getElementById("main-content");
function teamBioFace(elemId) {
  console.log(elemId);
  mainContent.classList.add("slide-out");
  document.getElementById(elemId).classList.add("slide-in");
  
  // add function to slide back
  // Code for Safari 3.1 to 6.0
  mainContent.onclick = function(){};
  var resetMainContent = function(){mainContent.onclick=function(){
	mainContent.classList.remove("slide-out");
	document.getElementById(elemId).classList.remove("slide-in");
  }}
  mainContent.addEventListener("webkitTransitionStart", resetMainContent);
  // Standard syntax
  mainContent.addEventListener("transitionstart", resetMainContent);
  
}

var makevisable = function(elemid){
	var elem = document.getElementById(elemid);
	if(elem.style.display === 'block') {
		elem.style.display = 'none'; }
		else{elem.style.display = 'block'; }
}
