function validation(){
    const name=document.getElementById("name").value;
    const password=document.getElementById("pass").value;
    if(name==="" ||name.length<3){
        alert("please enter valid name");
        name.focus();
        return false;
    } if(password.length<8||isNaN(password)){
        alert("please enter valid password");
        password.focus();
        return false;
    }else{
        alert("Done,ThankYou");
    }

}
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }