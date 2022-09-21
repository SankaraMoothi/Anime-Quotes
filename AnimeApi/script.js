/* Creating a h1 element and appending it to the body. */

let h1=document.createElement("h1");
h1.setAttribute("id","heading")
h1.innerHTML="Anime Quotes";
h1.style.textAlign="center"
document.body.append(h1);

/* Creating a paragraph element and appending it to the body. */

let p=document.createElement("p");
p.setAttribute("id","discription");
p.innerHTML="Search Anime Quotes Using Anime Name"
p.style.textAlign="center"
document.body.append(p);

/* Creating a div element and appending it to the body. */

let div=document.createElement("div");
div.setAttribute("class","container");
div.setAttribute("id","main");
document.body.append(div);

/* Creating a div element and appending it to the body. */

let div1=document.createElement("div");
div1.setAttribute("class","container");
div1.setAttribute("id","main1");
document.body.append(div1);

/* Creating an input element and setting its attributes. */

let search=document.createElement("input");
search.setAttribute("type","text");
search.setAttribute("id","search");
search.setAttribute("placeholder","Search the Anime Name:(eg:naruto,death note)")
search.setAttribute("class","input form-control");

/* Creating a button element and setting its attributes. */

let button=document.createElement("button");
button.setAttribute("id","submit");
button.setAttribute("class","submit btn btn-primary");
button.textContent="search";

/* Creating a select element and setting its display to none. */

var select=document.createElement("select");
select.style.display="none";
select.setAttribute("id","select");

/* Creating a button element and setting its attributes. */

let button2=document.createElement("button");
button2.setAttribute("id","reset");
button2.setAttribute("class","submit btn btn-danger");
button2.textContent="reset";
button2.style.display="none" ;


/* Creating a button element and setting its attributes. */

let button1=document.createElement("button");
button1.setAttribute("id","submit1");
button1.setAttribute("class","submit btn btn-primary");
button1.textContent="search";
button1.style.display="none" ;
div1.append(select,button1,button2);
div.append(search,button);

/* Creating a div element for diplay and appending it to the body. */

let flag=document.createElement("div");
flag.setAttribute("class","container")
flag.setAttribute("id","flag")
document.body.append(flag)

button.addEventListener("click",async()=>{
   
    const response= await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${search.value}`)
    const values= await response.json();
    
    select.style.display="unset";
    button1.style.display="unset";
    button2.style.display="unset";


    /* Creating an array of names and pushing the character names into it. */
    
    var names=[];
    values.forEach(element => {
        
        names.push(element.character);
    });


    /* Creating a select element and appending it to the body. */

    for (const val of names){
        var option = document.createElement("option");
        option.setAttribute("id","optionValue")
        option.value = val;
        option.innerText=val;
        select.append(option);
    }

   /* Adding an event listener to the button1 element. */

    button1.addEventListener("click",()=>{
        var valuea=document.getElementById("select");
        values.forEach(element => {
            if(element.character==valuea.value){
                flag.innerHTML=element.quote;
            }
        });
    })
    button2.addEventListener("click",()=>{
        location.reload();
    })

})
