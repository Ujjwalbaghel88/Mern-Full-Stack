function Log()
{
    console.Log("Login Button Clicked");
    const em=document.getElementById("LoginEmail").value;
    const ps=document.getElementById("LoginPassword").value;
    console.Log( "Email :" +em);
     console.Log( "Password :" +ps);
     alert("Login done");

     document.getElementById("LoginEmail").value="";
     document.getElementById("LoginPassword").value="";

}

function regestration()
{
    console.Log("Regestration Button Clicked");
    
}