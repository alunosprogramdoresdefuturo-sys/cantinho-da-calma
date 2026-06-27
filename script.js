const botao = document.getElementById("startBtn");

botao.addEventListener("click", ()=>{

    botao.innerHTML="Loading...";

    botao.style.background="#70d6c5";

    setTimeout(()=>{

        alert("Bem-vindo ao aplicativo de Meditação!");

        botao.innerHTML="LET'S<br>START";

        botao.style.background="#f59db5";

    },1500);

});
