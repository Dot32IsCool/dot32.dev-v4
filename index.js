const md = new Remarkable({
	html: true
});

var xhr = new XMLHttpRequest();
xhr.open("GET", detectPageFromURL());
console.log(detectPageFromURL())
xhr.onload = function()
{
  var text = xhr.responseText;
  // console.log(text);
  if (text.includes("<!doctype html>") && text.includes(`<script src="https://kit.fontawesome.com/c0fe0ca982.js" crossorigin="anonymous"></script>`)) {
  	text = '# 404'
  }
  document.getElementsByTagName("main").item(0).innerHTML = md.render(text);
  hljs.highlightAll()
  twemoji.parse(document.body, {folder: 'svg', ext: '.svg'})

  try {
	  var data = JSON.parse(document.getElementsByTagName("json-data").item(0).innerHTML)
	}
	catch(err) {
	  var data = JSON.parse("{}")
	  console.log(err)
	}
	console.log(data)
}
xhr.send();

function setContent(name) {
	xhr.open("GET", "/" + name + ".md");
	xhr.send();
	window.history.pushState(name, `Dot32`, '/'+name);
	document.title =  `Dot32 | ${name.replace('.md', '')}`
}

window.onpopstate = function(event) {
	console.log(detectPageFromURL())
	xhr.open("GET", detectPageFromURL());
	xhr.send();
}

function detectPageFromURL() {
	var page = window.location.pathname.replace('index.html','').replace('.html','')
	if (page.charAt(page.length-1) === "/") {
		console.log("removing slash to " + page)
		page.slice(0, -1);
	}
	page = page + ".md"
	if (page === "/.md") {
		page = "dot32.md"
	}
	page = page.replace('/.md','.md')

	var title = page.replace('.md', '')
	title = title.substring(1)
	title = "Dot32 | " + title
	document.title = title

	console.log(page)
	return page
}