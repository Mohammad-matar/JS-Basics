function clickfortest(){
    var  password=document.getElementById("password").value;
    var confirmation=document.getElementById("confirmation").value;
    if (password===confirmation){
    document.getElementById("password").style.border="1px solid black";
    document.getElementById("confirmation").style.border="1px solid black";
} else{
    document.getElementById("password").style.border="2px solid red";
    document.getElementById("confirmation").style.border="2px solid red";
}

}