// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var sum = Number(localStorage.getItem("amount"));


var movieData = JSON.parse(localStorage.getItem("movie")) || [];
movieData.map(function(elem,index){
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.src=elem.Poster;

    var name = document.createElement("p");
    name.innerText=elem.Title;
    
    div.append(image,name)
    document.getElementById("movie").append(div)
})
function confirmbooking(){
    var persons = document.getElementById("number_of_seats").value
        if(sum<100*persons){
          alert("Insufficient amount ")
        }
        else{
            alert("Booking successful!")
        sum = sum-100*persons;
        }
        
        
        
        localStorage.setItem("amount",sum)
         window.location.reload()
         localStorage.removeItem("movie")
      
}
document.getElementById("wallet").innerText=sum;