var navbar = document.getElementById("navbar");
navbar.innerHTML = `
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
         <a href="basicPage.html">
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
   `;
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
navbar.style.height = height+"px";
console.log(height+"px");
