var v = 1;
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
}