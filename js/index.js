var mlist = [];
function upData() {
    var mnow = readData();
    mlist.forEach(function (n) {
        if (n.id === mnow.id) {
            n.mname = mnow.mname;
            n.auth = mnow.auth;
            n.year = mnow.year;
        }
    });
    console.table(mlist);
    showData();
}
function addData() {
    var mnow = readData();
    var flag = 0;
    mlist.forEach(function (n, x) {
        if (n.id == mnow.id) {
            flag = 1;
        }
    });
    if (flag == 0) {
        mlist.push(mnow);
    }
    else {
        alert("ID : " + mnow.id + " already exists");
    }
    console.table(mlist);
    showData();
}
function delData(i) {
    mlist.forEach(function (n, x) {
        if (n.id == i) {
            // delete mlist[x];
            mlist.splice(x, 1);
        }
    });
    showData();
}
function showData() {
    var x = "<div id='h'>MOVIE</div><div id='h'>AUTHOR</div><div id='h'>YEAR</div><div id='h'></div>";
    if (mlist.length === 0) {
        document.getElementById('out').style.visibility = "hidden";
        // x="<div id='no'> List is Empty </div>";
    }
    else {
        document.getElementById('out').style.visibility = "visible";
        mlist.forEach(function (n) {
            x += "<div>" + n.mname + "</div><div>" + n.auth + "</div><div>" + n.year + "</div><button id='close' onclick='delData(" + n.id + ")'><i class='fa fa-close'></i></button>";
        });
    }
    document.getElementById('out').innerHTML = x;
}
function readData() {
    var id = Number(document.getElementById('id').value);
    var mname = document.getElementById('mname').value;
    var auth = document.getElementById('auth').value;
    var year = Number(document.getElementById('year').value);
    return { id: id, mname: mname, auth: auth, year: year };
}
console.table(mlist);
