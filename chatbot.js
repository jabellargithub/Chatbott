function chat(){
    // Greet the user
    alert("Hello");
    

  
    var yourName = prompt("What is your name?");
    alert ("Hello," + yourName);

    
    var car = prompt("What is your favorite car?");
    alert ("I like" + car + "too!");

    
    var rides = confirm("Come on let's spin");


    //If the user clicks "OK"
    if (rides ==true){
        alert("Thank you!");
    }

    // If the user clicks "Cancel"
    else {
        alert("See you later");
    }
 
}
document.getElementById("button1").onclick = chat;