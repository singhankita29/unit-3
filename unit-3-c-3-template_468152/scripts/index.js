// Store the wallet amount to your local storage with key "amount"
//let sum=Number(localStorage.getItem("amount"));
document.getElementById("add_to_wallet").addEventListener("click",myFunction);
let amountArr=localStorage.getItem("amount") || [];
function myFunction(){
 event.preventDefault(); 
let amount= document.getElementById("amount").value;
//amount=Number(amount);
//sum += amount;
localStorage.setItem("amount",amount);
//document.getElementById("wallet").innerText=sum;
}

