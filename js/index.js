var mlist = [];
function upData() {
    var id = Number(document.getElementById('id').value);
    var mname = document.getElementById('mname').value;
    var auth = document.getElementById('auth').value;
    var year = Number(document.getElementById('year').value);
    mlist.forEach(function (n) {
        if (n.id === id) {
            n.mname = mname;
            n.auth = auth;
            n.year = year;
        }
    });
    console.table(mlist);
    showData();
}
function addData() {
    var id = Number(document.getElementById('id').value);
    var mname = document.getElementById('mname').value;
    var auth = document.getElementById('auth').value;
    var year = Number(document.getElementById('year').value);
    var flag = 0;
    mlist.forEach(function (n, x) {
        if (n.id == id) {
            flag = 1;
        }
    });
    if (flag == 0) {
        mlist.push({ id: id, mname: mname, auth: auth, year: year });
    }
    else {
        alert("ID : " + id + " already exists");
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
    if (mlist.length === 0) {
        document.getElementById('out').style.visibility = "hidden";
    }
    else {
        document.getElementById('out').style.visibility = "visible";
    }
    var x = "<div id='h'>MOVIE</div><div id='h'>AUTHOR</div><div id='h'>YEAR</div><div id='h'></div>";
    mlist.forEach(function (n) {
        x += "<div>" + n.mname + "</div><div>" + n.auth + "</div><div>" + n.year + "</div><button id='close' onclick='delData(" + n.id + ")'><i class='fa fa-close'></i></button>";
    });
    document.getElementById('out').innerHTML = x;
}
console.table(mlist);
