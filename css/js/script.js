function Menu() 
{

    var m = document.getElementById("menu_bar");
    var b = document.getElementById("botao-hamburguer");
    

    if (m.style.display == "none")
    {
        m.style.display = "block";
        b.style.display = "none";
        
        
    }

    else 
    {
        m.style.display = "none";
        b.style.display = "block";
        
    }
}