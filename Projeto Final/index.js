const btnPrimary = document.querySelector(".btn-primary");
const input = document.getElementById("mensagem");
btnPrimary.addEventListener("click", function(event){
    event.preventDefault();
    const email = input.value;

alert(`E-mail cadastrado ${email}!!´ );

})