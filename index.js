const md = new Remarkable({
	html: true
});
// document.getElementById("markdown").innerHTML = md.render('# tada');

var xhr = new XMLHttpRequest();
xhr.open("GET", "Dot32.md");
xhr.onload = function()
{
  var text = xhr.responseText;
  // console.log(text);
  document.getElementsByTagName("main").item(0).innerHTML = md.render(text);

  document.getElementById("url").innerHTML = "<h3>Testing (ignore)</h3><br>" + window.location.href + "<br>" + window.location.hostname + "<br>" + window.location.host + "<br>" + window.location.pathname
}
xhr.send();

// var nodelist = document.getElementsByTagName("button")
// for (let i = 0; i < nodelist.length; i++) {
//   console.log(nodelist.item(i).innerHTML) // .onclick = function() {}
// }
function Dot32() {
	xhr.open("GET", "Dot32.md");
	xhr.send();
}
function Projects() {
	xhr.open("GET", "Projects.md");
	xhr.send();
}
function Posts() {
	xhr.open("GET", "Posts.md");
	xhr.send();
}