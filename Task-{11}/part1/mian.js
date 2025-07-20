let myReq=new XMLHttpRequest();
myReq.open("GET","articles.json");
myReq.send();


console.log(myReq);
myReq.onreadystatechange=function (){
    if (this.readyState===4 && this.status===200) {

        // [2]
        // console.log("JSON Object Content Here");
        // console.log(this.responseText);
        // console.log("Data Loaded"); 

        // [3] 
        let mainData=JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].category="All";
            console.log(mainData);
        }
        let updatedData=JSON.stringify(mainData);
        console.log("JSON Object Content Here");
        
         console.log(updatedData);

        // [4]
        let divPa=document.createElement("div");
        divPa.setAttribute("id","data")
        for (let i = 0; i < mainData.length; i++) {
            let divCh=document.createElement("div");
            let h2=document.createElement("h2");
            let article=document.createElement("p");
            let author=document.createElement("p");
            let category=document.createElement("p");
            
            h2.textContent=mainData[i].title;
            article.textContent=mainData[i].body;
            author.textContent=mainData[i].author;
            category.textContent=mainData[i].category;
            divCh.appendChild(h2);
            divCh.appendChild(article);
            divCh.appendChild(author);
            divCh.appendChild(category);
            divPa.appendChild(divCh);
            document.body.appendChild(divPa);
        }
        
    }
}
