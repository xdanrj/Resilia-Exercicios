function funcao_email(){
    while (true){
        email = prompt("Insira o e-mail: ");
        if (email.includes("@")){
            alert("EMAIL '" +email+ "' VALIDADO COM SUCESSO!");
            break;}
        else{
            alert("EMAIL '" +email+ "' INVALIDO! DIGITE NOVAMENTE: ");
        }}}