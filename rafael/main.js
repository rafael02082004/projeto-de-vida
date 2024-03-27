const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
for ([inicialização]; [condição]; [incremento]) {
    declaração
    }
    for (var i = 1; i <= 5; i++) {
        console.log(i);
      }

      for (var i = 0; i <= 10; i += 2) {
        console.log(i);
      }
      var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let contador = 10;
contador -= 4;


var numero = 10;
numero /= 2; 

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

for (let i=-1 ; i<5; i++){
    console.log(i);
  }

  for (let i=-1 ; i<5; i++){
    console.log(i);
  }

  <button class="botao">Escuro</button>

  .fundo-preto{
    background: black;
    color: white;
  }
  .botao{
    padding: 2em; 
  }

  const botao = document.querySelectorAll(".botao");
`__________________________________`
for (let i=0;i<botao.length;i++){
 `__________________`
    if(i==0){
        fundo.classList.remove("fundo-branco");
        fundo.classList.add("fundo-preto");
    } else{
      fundo.classList.remove("fundo-preto");
     `__________________`
    }  }  }


    p>       Vamos verificar o <strong>retorno!</strong> </p>
