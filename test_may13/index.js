

const Movielist = new map ([
    ["Leo", "action"],
    ["Forest Gump", "Drama"],
    ["The Hangover", "Comedy"],
]);

var selectgenereEl = document.getElementById("genereEl");

var addinglistContainerEl = document.getElementById("addinglistContainer");

selectgenereEl.addEventListener("change",function(){
    console.log("change");
    if(selectgenereEl.value==="All"){
        console.log("All");
        for(let i=0; i<Movielist.length; i++){

            let container = document.createElement("div");
            container.classList.add("listconatiner");
            addinglistContainerEl.appendChild(container);

            let head = document.createElement("h3");
            head.textContent=Movielist[i][0];
            head.classList.add("heading");
            container.appendChild(head);

            let para = document.createElement("p");
            para.textContent = Movielist[i][1];
            container.appendChild(para);
    }
    }

    else if(selectgenereEl.value==="Comedy"){
        let result = Movielist.filter(movie =>Movielist.genere==="Comedy");
        console.log(result);
        for(let i=0; i<result.length; i++){

            let container = document.createElement("div");
            container.classList.add("listconatiner");
            addinglistContainerEl.appendChild(container);

            let head = document.createElement("h3");
            head.textContent=result.name;
            head.classList.add("heading");
            container.appendChild(head);

            let para = document.createElement("p");
            para.textContent = result.genere;
            container.appendChild(para);
    }
    }
    else if(selectgenereEl.value==="Drama"){
        let result = Movielist.filter(movie =>Movielist.genere==="Drama");
        console.log(result);
        for(let i=0; i<result.length; i++){

            let container = document.createElement("div");
            container.classList.add("listconatiner");
            addinglistContainerEl.appendChild(container);

            let head = document.createElement("h3");
            head.textContent=result.name;
            head.classList.add("heading");
            container.appendChild(head);

            let para = document.createElement("p");
            para.textContent = result.genere;
            container.appendChild(para);
    }
    }
    else if(selectgenereEl.value==="Action"){
        let result = Movielist.filter(movie =>Movielist.genere==="Action");
        console.log(result);
        for(let i=0; i<result.length; i++){

            let container = document.createElement("div");
            container.classList.add("listconatiner");
            addinglistContainerEl.appendChild(container);

            let head = document.createElement("h3");
            head.textContent=result.name;
            head.classList.add("heading");
            container.appendChild(head);

            let para = document.createElement("p");
            para.textContent = result.genere;
            container.appendChild(para);
    }
    }

});



