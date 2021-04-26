function openLoginForm(){
  document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
}

/*FUNÇÃO POPUP*/

/* DEIXA O TAMANHO DA SIDEBAR EM 250px E A MARGEM ESQUERDA DO CONTEUDO DA PAGINA PARA 250px */
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

/* DEIXA A LARGURA DA SIDEBAR EM 0 E A MARGEM ESQUERDA DO CONTEUDO DA PAGINA PARA to 0 */
function closeNav(){
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

 
