var li = new Array(8);
var list = new Array(4);
var a = Math.floor(Math.random() * 10);
var time = new Date();
var sec = time.getSeconds();
var min = time.getMinutes();
//var a = sec;
for (var az = 0; az < 4; az++) {
    var a = Math.floor(Math.random() * 10);
    if (list.includes(a)) {
        for (var mm = 0; mm < list.length; mm++) {
            a = list[az - 1] + 2;
            if (list.includes(a)) {
                var du = 0
            }
            else {
                break;
            }
        }
    }
    list.sort();
    list[az] = a;
    a = "";
}
var count = 0;
var counter = 0;
function an() {
    for (var i = 0; i < 8; i++) {
        var z = Math.floor(Math.random() * 8);
        //alert("be"+z);
        if (li.includes(z)) {
            for (var m = 0; m < li.length; m++) {
                z = m;
                if (li.includes(z)) {
                    var dum = 0
                }
                else {
                    break;
                }
            }
        }
        li[i] = z;
        z = "";
    }
}
var mli = new Array(8);
function assignval() {
    var c = 0;
    for (var i = 0; i < 8; i++) {
        var n = li[i];
        var d = document.getElementById(n);
        d.removeAttribute("data-value");
        d.setAttribute("data-value", list[c]);
        if (i % 2 == 1) {
            c++;
        }
        n = "";
        d = "";
    }
}

function clic(e) {
    var elem = e.target;
    var z = elem.getAttribute("data-value");
    var x = elem.getAttribute("id");
    mli[count] = x;
    elem.innerHTML = z;
    elem.style.backgroundColor = "purple";
    count++;
}
function match() {
    if (count == 2) {
        var z = document.getElementById(mli[0]);
        var y = document.getElementById(mli[1]);
        var x = z.getAttribute("data-value");
        var w = y.getAttribute("data-value");
        z.innerHTML = x;
        y.innerHTML = w;
        if (w == x) {
            count = 0;
            counter++;
            z.innerHTML = x;
            y.innerHTML = w;
            z.removeAttribute("onclick");
            y.removeAttribute("onclick");
            if (counter == 4) {
                var ti = new Date();
                var secc = ti.getSeconds();
                var minu = ti.getMinutes();
                var dur = secc - sec;
                var dur1 = minu-min;
                if(dur<0){
                    dur1 = dur1 * 60;
                    dur = dur1 + dur;
                    dur1 = 0;
                }
                alert("you win!! you takes " + dur1 + " Minutes and "+dur+" Seconds");
            }
        }
        else {
            document.getElementById("t1").style.borderColor = "red";
            z.style.backgroundColor = "blueviolet";
            y.style.backgroundColor = "blueviolet";
            setTimeout(function () {
                y.innerHTML = "";
                z.innerHTML = "";
                document.getElementById("t1").style.borderColor = "black";
            }, 200)
            count = 0;
        }
    }
}
function reset() {
    for (var i = 0; i < 8; i++) {
        var d = document.getElementById(i);
        d.removeAttribute("data-value");
        d.setAttribute("data-value", i);
        d.setAttribute("onclick", "clic(event); match();");
        d.style.backgroundColor = "";
        d.innerHTML = "";
    }
}