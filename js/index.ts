interface Movies{
    id:number;
    mname:string;
    auth:string;
    year:number;
}

let mlist : Movies[] = [];
function upData(){
    let id:number = Number((document.getElementById('id') as HTMLInputElement).value);
    let mname:string = (document.getElementById('mname') as HTMLInputElement).value;
    let auth:string = (document.getElementById('auth') as HTMLInputElement).value;
    let year:number = Number((document.getElementById('year') as HTMLInputElement).value);
    mlist.forEach(n=>{
        if(n.id === id){
            n.mname = mname;
            n.auth = auth;
            n.year =year;
        }
    })
    console.table(mlist);
    showData();
}

function addData(){
    let id:number = Number((document.getElementById('id') as HTMLInputElement).value);
    let mname:string = (document.getElementById('mname') as HTMLInputElement).value;
    let auth:string = (document.getElementById('auth') as HTMLInputElement).value;
    let year:number = Number((document.getElementById('year') as HTMLInputElement).value);
    let flag:number =0;
    mlist.forEach((n,x)=>{
        if(n.id == id){
           flag = 1; 
        }
    })
    if(flag == 0){
        mlist.push({id:id,mname:mname,auth:auth,year:year});
    }
    else{
        alert("ID : "+id+" already exists");
    }
    console.table(mlist);
    showData();
}

function delData(i:number){
    mlist.forEach((n,x)=>{
        if(n.id == i){
            delete mlist[x];
        }
        
    })
    showData();  
}
 
function showData(){
    if(mlist.length === 0){
        (document.getElementById('out') as HTMLInputElement).style.visibility="hidden";
    }
    else{
        (document.getElementById('out') as HTMLInputElement).style.visibility="visible";
    }
    
    let x :string = "<div id='h'>MOVIE</div><div id='h'>AUTHOR</div><div id='h'>YEAR</div><div id='h'></div>";
    mlist.forEach(n=>{
        x+="<div>"+n.mname+"</div><div>"+n.auth+"</div><div>"+n.year+"</div><button id='close' onclick='delData("+n.id+")'><i class='fa fa-close'></i></button>";
    });
    (document.getElementById('out') as HTMLInputElement).innerHTML = x;
    
}
console.table(mlist);