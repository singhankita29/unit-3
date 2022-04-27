// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//http://www.omdbapi.com/?t=avengers&apikey=b1b97d14


let movies_div=document.getElementById("movies");

async function searchMovies(){
    try{
        const query= document.getElementById("search").value;
       
        let res= await fetch(`https://www.omdbapi.com/?t=avengers&apikey=b1b97d14&s=${query}`);
        const data= await res.json();
        console.log(data);
        appendMovies(data.Search);
       
    }
    catch(err){
        console.log("err:",err);
    }
}

function appendMovies(data){
  
    
    if(data===undefined){
        return false;
    }

    movies_div.innerHTML=null;
    data.forEach(function(elem,index){
    let container = document.createElement("div");
    let title = document.createElement("h5")
    title.innerText=elem.Title;
    let image=document.createElement("img");
    image.src=elem.Poster;
    let btn=document.createElement("button")
    btn.innerText="Book Now";
    btn.addEventListener("click",function(){
        bookMovie(elem,index)
    })
    container.append(image,title,btn);
    movies_div.append(container);
    });
}

let arr = JSON.parse(localStorage.getItem("movie")) || [];
function bookMovie(elem,index){
    
    arr.push(elem);
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
}








