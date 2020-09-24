var tag = ["superbot is the best ai bot", "superbot is the best ai bot humanity has ever seen"];
var rejects = ["Read all the text on the page"]
var energy = ["Try asking again"]
var cue = ["I'm not sure I understand", "Sorry, an error occured"];

var menuLoaded = 0;
var tt1, tt2, tt3, label, input, input2, checkbox, speakbutton, vslider, rslider, pslider, beg, guessing = "",
    ghosting = false,
    reg = "",
    first = "",
    done = false,
    lives = 1;

newSide();

function newSide() {
    tt1 = cue[Math.floor((Math.random() * cue.length))];
    tt2 = energy[Math.floor((Math.random() * energy.length))];
    tt3 = rejects[Math.floor((Math.random() * rejects.length))];
}

function printAnswer() {
    if ((document.getElementById("Implore").value.toLowerCase().trim() == tag[0] || document.getElementById("Implore").value.toLowerCase().trim() == tag[1])) {
        if (guessing != "") {
            document.getElementById("answer").innerHTML = guessing.toLowerCase();
        } else if (lives < 1) {
            document.getElementById("answer").innerHTML = tt1.toLowerCase();
        } else {
            document.getElementById("answer").innerHTML = tt2.toLowerCase();
        }
    } else {
        tt3 = rejects[Math.floor((Math.random() * rejects.length))];
        document.getElementById("answer").innerHTML = tt3.toLowerCase();
    }
    done = true;
}

function startGhost() {
    var rep = tag[0][reg.length - 1];
    beg = reg.length;
    ghosting = true;
    first = reg;
}

function endGhost() {
    addTo(1);
    ghosting = false;
    lives--;
}

function CheckAccuracy() {
    if (ghosting && !done) {
        addTo(0);
        guessing = getStart(reg);
    }
}

function addTo(e) {
    if (reg.length <= tag[0].length - 1 && !done) {
        document.getElementById("Implore").value = first;
        for (var i = first.length; i <= reg.length + e; i++) {

            document.getElementById("Implore").value += tag[0][i];
        }
    }
}

function Print(ob) {
    console.log(ob);
}

function getStart(st) {
    var newRet = "";

    for (var i = beg; i <= st.length - 1; i++) {
        newRet += reg[i];
    }

    return newRet;
}

function reseter() {
    reg = "";
    first = "";
    guessing = "";
    ghosting = false;
    done = false;
    lives = 1;
    document.getElementById("Implore").value = "";
    document.getElementById("Question").value = "";
    document.getElementById("answer").innerHTML = "";
    newSide();
}