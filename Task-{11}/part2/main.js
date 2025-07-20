// [1]
let myReq=new XMLHttpRequest();
myReq.open("GET","jakson.json");
myReq.send();

myReq.onload=function () {
    if (this.readyState===4 && this.status===200) {
        new Promise((resolve,reject)=>{
            let data=JSON.parse(this.responseText);
            resolve(data);

        }).then((resolveData)=>{
            resolveData.length=5;
            return resolveData;            
        }).then((data)=>{
            for (let i = 0; i < data.length; i++) {
                let div=document.createElement("div");
                let h3=document.createElement("h3");
                let p=document.createElement("p");
                
                h3.innerHTML=data[i].title;
                p.innerHTML=data[i].description;
                div.appendChild(h3);
                div.appendChild(p);
                document.body.appendChild(div);
            }
                document.body.appendChild(document.createElement("hr"));

        })
        
    }
}


// [2]

fetch("jakson.json").then((result)=>{
    let myDataAsPromise=result.json();
    return myDataAsPromise;
}).then((data)=>{
    data.length=5;
    return data;
}).then((data)=>{
    for (let i = 0; i < data.length; i++) {
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        let p=document.createElement("p");
                
        h3.innerHTML=data[i].title;
        p.innerHTML=data[i].description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    }
})






// study part
// let myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         document.getElementById("t1").style.visibility="visible";
//         resolve();
//     }
//     ,1000)
// }).then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.getElementById("t2").style.visibility="visible";
//             resolve();
//             }   
//         ,1000)
//    })
// }).then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.getElementById("t3").style.visibility="visible";
//             resolve();
//             }   
//         ,1000)
//    })
// }).then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             document.getElementById("t4").style.visibility="visible";
            
//             }   
//         ,1000)
//    })
// })