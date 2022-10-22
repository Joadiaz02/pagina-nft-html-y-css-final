writeHeaderFooter();

function writeHeaderFooter() {
   fetch("views/header.html")
      .then( res => res.text())
      .then( text => document.getElementById("myheader").innerHTML = text);

}