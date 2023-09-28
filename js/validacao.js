function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data de nascimento = document.getElementById("i_data_nascimento");
    let data da admissao = document.getElementById("i_data_admissao");
    let email = document.getElementById("i_email");
    let cargo = document.getElementById("i_cargo");
    let setor = document.getElementById("i_setor");

    estilo_input(none, "#f25c54", "#000000");
    estilo_input(sobrenome, "#f25c54", "#000000");
    estilo_input(data, "#f25c54", "#000000");
    estilo_input(senha, "#f25c54", "#000000");
    estilo_input(con_senha, "#f25c54", "#000000");

}


function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}

function validarEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailInput.setCustomValidity("Por favor, insira um e-mail válido.");
    } else {
        emailInput.setCustomValidity("");
    }
}