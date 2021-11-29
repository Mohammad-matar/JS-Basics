function size(){
    var shoesize=document.getElementById("shoe_size").value;
    var birthyear=document.getElementById("year").value;
    alert("the result is "+((shoesize*2+5)*50-birthyear+1766));
}
