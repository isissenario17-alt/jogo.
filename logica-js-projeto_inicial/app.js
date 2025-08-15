alert('Bem vindos ao jogo do Número Secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao n.s.
while(chute != numeroSecreto) {
chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o numero secreto for igual ao chute
   if (numeroSecreto == chute){ 
    break;
   } else {
    if (numeroSecreto > chute) {
      alert (`o número secreto é maior que ${chute}`);
   } else {
      alert (`o número secreto é menor que ${chute}`);
   }     
   //tentativas = tentativas + 1;   
   tentativas++;                                                                                   
}
}

 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert (`Isso aí, você acertou o  número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);













   
