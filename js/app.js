var v = 6;
if (typeof creepypastas === 'undefined' || creepypastas.v < v){ //fallback al código local
//	if (creepypastas.v < v) {delete creepypastas;}
var   appNextYA = false;
if (!typeof creepypastas === 'undefined')
   appNextYA = creepypastas.appNextYA || false;


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
	},
  appNextYA: appNextYA
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

loadJSON('https://public-api.wordpress.com/rest/v1/sites/esx.creepypastas.net/posts/?number=22&order=DESC',almacenar);
document.querySelector('#timeline header').innerHTML="Experiencias paranormales";


function appNext(){
if(creepypastas.appNextYA) return;
/*
window.parameters = ['4229dd3b-8c5d-4cd0-951a-e2ba57a9b503','cafeab8c-4598-4378-b468-6cd229b9f9e9','2','banner-full','bottom','postback-parameter','default'];
var sa = document.createElement('script');
sa.type = 'text/javascript';
sa.async = true;
sa.src = 'https://admin.appnext.com/sticky/jq.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(sa, s);
*/
creepypastas.appNextYA = true;
}

if(!creepypastas.appNextYA) appNext();

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'html { margin-top:0px !important; }';
document.getElementsByTagName('head')[0].appendChild(style);

}
