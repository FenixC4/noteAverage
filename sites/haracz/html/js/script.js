$.getJSON( "js/dag.json", function( json ) {
    var lysta = json.lysta;

    for (var i=0; i<lysta.length; i++) {
        var numero = lysta[i].numer;
        var wisio = lysta[i].wisi;
        var ileo = lysta[i].ile;
        var divo = document.getElementById(numero);
        var imgo = divo.childNodes[3];
        
        if(wisio=="tak") {
            imgo.src="svg/wisi.svg"
        }
        else {
            imgo.src="svg/nie_wisi.svg"
        };

        if(wisio=="tak") {
            divo.childNodes[5].innerHTML="Ile wisi: "+ileo;
        }
        else {
            divo.childNodes[5].innerHTML="Ile wisi: nic"
        }
    };
});