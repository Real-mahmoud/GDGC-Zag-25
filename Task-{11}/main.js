let json=`{"name":"mahmoud","age":20}`;
console.log(typeof json);
console.log(json);

let ob=JSON.parse(json);
console.log(typeof ob);
console.log( ob);

let jsonAgain=JSON.stringify(ob);
console.log(typeof jsonAgain);
console.log(jsonAgain);







let req=new XMLHttpRequest();
req.open("GET","https://api.github.com/users/real-mahmoud/repos");
req.send();
console.log(req);

req.onreadystatechange=function (){
    // console.log(req.readyState);
    // console.log(req.status);
    if (this.readyState===4 && this.status===200) {
        // console.log(this.responseText);
        let jsData=JSON.parse(this.responseText);
        console.log(jsData);
        for (let i = 0; i < jsData.length; i++) {
            let div=document.createElement("div");
            div.innerHTML=`${jsData[i].full_name}`;
            document.body.appendChild(div);
        }      
    }
}

