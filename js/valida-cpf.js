function funcao_cpf(){
    while (true){
        cpf = prompt("Insira o CPF: ");
        if (cpf.length == "11"){
            alert("CPF '" +cpf+ "'' VALIDADO COM SUCESSO!");
                break;}
        else{
            alert("CPF '" +cpf+ "' INVALIDO! DIGITE NOVAMENTE: ");
        }}}