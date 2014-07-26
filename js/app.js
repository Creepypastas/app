var v = 2;
if (typeof creepypastas === 'undefined' || creepypastas.v < v){ //fallback al código local

var creepypastas = {
  v: v,
  cambiarArticle: function () {
			var nuevo = this.innerHTML.toLowerCase().replace(/[\. ,:-]+/g, '');
			document.querySelector('.activo').classList.add("oculto");
			document.querySelector('.activo').classList.remove("activo");
			document.querySelector('#'+nuevo).classList.remove("oculto");
			document.querySelector('#'+nuevo).classList.add("activo");
			//console.log(nuevo);
    },
	mL: document.querySelectorAll('#lateral li a, #lateral h2 a'),
	mListeners: function(){
		for (var i = 0; i < creepypastas.mL.length; i++){
			creepypastas.mL[i].addEventListener("click", creepypastas.cambiarArticle, false);
		}
	}
}

creepypastas.mListeners();

function loadJSON(url,f){
request = new XMLHttpRequest();
request.open('GET', url, true);

request.onreadystatechange = function() {
  if (this.readyState === 4){
    if (this.status >= 200 && this.status < 400){ // Success!
      data = JSON.parse(this.responseText);
        f(data);
    } else {console.log("Error :(");}
  }
};

request.send();
request = null;
}

function mostrar(){
 document.querySelector('#timeline ul').innerHTML="";

    for (i=0;i<20;i++){
    li = document.createElement('li');
    li.innerHTML="<a href='" + creepypastas.news.posts[i].URL.replace(/(<([^>]+)>)/ig,"") + "'><p>" + creepypastas.news.posts[i].content.replace(/(<([^>]+)>)/ig,"") + "</p><p>" + creepypastas.news.posts[i].content.replace(/(<([^>]+)>)/ig,"") + "</p></a>";
     document.querySelector('#timeline ul').appendChild(li);
    }
}

function almacenar(data){creepypastas.news=data;mostrar();}

loadJSON('http://public-api.wordpress.com/rest/v1/sites/esx.creepypastas.net/posts/?number=20',almacenar);
document.querySelector('#timeline header').innerHTML="Experiencias paranormales";
console.log("experiencias paranormales");
}
