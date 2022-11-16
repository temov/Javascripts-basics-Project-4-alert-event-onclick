function prikazi(){
    
var name = document.getElementById("username");
var vrednost = name.value;

    if (vrednost == ""){
            alert("Enter some text in the field");
            e.preventdefault();
    }else{ 
    alert('You have entered' + " " + vrednost);
    }
}
    prikazi();
