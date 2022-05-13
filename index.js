function startTrafficSignal () {
    var green=document.getElementById("green");
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
    red.style.opacity=1;

    setTimeout(function () {
        red.style.opacity=1;
        red.style.boxShadow="0px 0px 50px 15px #CC3232";
        green.style.opacity=.3;
        yellow.style.opacity=.3;
    }
            ,6000);
    setTimeout(function () {
        red.style.opacity=.3;
        green.style.opacity=.3;
        yellow.style.opacity=1;
        yellow.style.boxShadow="0px 0px 50px 15px #db7b2b";
    }
            ,9000);
setTimeout(function () {
        red.style.opacity=.3;
        green.style.opacity=1;
        yellow.style.opacity=.3;
        green.style.boxShadow="0px 0px 50px 15px #2dc937";
    }
        ,15000);
    }
    var timer=setInterval(function () {
    startTrafficSignal();
    }
                        ,15000);
    startTrafficSignal();