function showMessage(){
document.getElementById("messageSecret").innerHTML="https://docs.google.com/forms/d/e/1FAIpQLScPd02R7ru5zixQWUB2ErmPz4skefoeXZr7nO3ww2b5L8Fhrg/viewform?usp=sf_link"; 
}

 var clicks=0;
function countClicks(){
   
    clicks +=1;
    document.getElementById("nombreDeCliques").innerHTML=clicks;
}
