interface Movies{
    id:number;
    mname:string;
    auth:string;
    year?:number;
}

let mlist : Movies[] = [];
function upData(){
    let mnow:Movies = readData();
    mlist.forEach(n=>{
        if(n.id === mnow.id){
            n.mname = mnow.mname;
            n.auth = mnow.auth;
            n.year =mnow.year;
        }
    })
    console.table(mlist);
    showData();
}

function addData(){
    let mnow:Movies = readData();
    let flag:number = 0;
    mlist.forEach((n,x)=>{
        if(n.id == mnow.id){
           flag = 1; 
        }
    })
    if(flag == 0){
        mlist.push(mnow);
    }
    else{
        alert("ID : "+mnow.id+" already exists");
    }
    console.table(mlist);
    showData();
}

function delData(i:number){
    mlist.forEach((n,x)=>{
        if(n.id == i){
            // delete mlist[x];
            mlist.splice(x,1);
        }
        
    })
    showData();  
}
 
function showData(){
    let x :string = "<div id='h'>MOVIE</div><div id='h'>AUTHOR</div><div id='h'>YEAR</div><div id='h'></div>";
    if(mlist.length === 0){
        (document.getElementById('out') as HTMLInputElement).style.visibility="hidden";
        // x="<div id='no'> List is Empty </div>";
    }
    else{
        (document.getElementById('out') as HTMLInputElement).style.visibility="visible";
        mlist.forEach(n=>{
            x+="<div>"+n.mname+"</div><div>"+n.auth+"</div><div>"+n.year+"</div><button id='close' onclick='delData("+n.id+")'><i class='fa fa-close'></i></button>";
        });
    }
    (document.getElementById('out') as HTMLInputElement).innerHTML = x;
    
}
function readData():Movies{
    let id:number = Number((document.getElementById('id') as HTMLInputElement).value);
    let mname:string = (document.getElementById('mname') as HTMLInputElement).value;
    let auth:string = (document.getElementById('auth') as HTMLInputElement).value;
    let year:number = Number((document.getElementById('year') as HTMLInputElement).value);
    return {id:id,mname:mname,auth:auth,year:year};
}

console.table(mlist);