// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//http://www.omdbapi.com/?t=avengers&apikey=b1b97d14

let movies_div=document.getElementById("movies");

async function searchMovies(){
    try{
        const search= document.getElementById("search").value;
       
        let res= await fetch(`http://www.omdbapi.com/?t=avengers&apikey=b1b97d14&s=${search}`);
        const data= await res.json();
        console.log(data);
        appendMovies data.search;
        
    }
    catch(err){
        console.log("err:",err);
    }
}

function appendMovies(data){
    
    if(data=== undefined){
        return false;
    }

    movies_div.innerHTML=null;
    data.forEach(function(el){
    let container = document.createElement("div");
    let title = document.createElement("h5")
    title.innerText=el.Title;
    image=document.createElement("img");
    image.src=el.Poster;
    let btn=document.createElement("button")
    btn.innerText="Book Now";
    c.append(image,title,btn);
    movies_div.append(container);
    });
}



//

function debouncing(func,delay){
    if(id) {
       clearTimeout(id);
    }

    id=setTimeout(function(){
        func();
    },delay);
}