let tempo = 4000;

const mudarElementoUm = () => {
    const pegarDiv = document.getElementById("banner").innerHTML = '<img src="./Images/img1.jpg" alt=""> <div class="main-inicio-banner-texto"> <h1>Alimentação Saudável</h1> <p>Comer conscientemente, priorizando alimentos nutritivos, é a chave para uma boa saúde.</p> </div>'
    document.getElementById("img1").style.cssText =
    'filter: brightness(40%)'
    document.getElementById("img2").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img3").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img4").style.cssText =
    'filter: brightness(100%)'
    tempo = 4000;
}

const mudarElementoDois = () => {
    const pegarDiv = document.getElementById("banner").innerHTML = '<img src="./Images/img2.jpg" alt=""> <div class="main-inicio-banner-texto"> <h1>Comer Consciente</h1> <p>Explorar a prática de comer conscientemente, prestando atenção aos sinais de fome e saciedade.</p> </div>'
    document.getElementById("img1").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img2").style.cssText =
    'filter: brightness(40%)'
    document.getElementById("img3").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img4").style.cssText =
    'filter: brightness(100%)'
    tempo = 4000;
}

const mudarElementoTres = () => {
    const pegarDiv = document.getElementById("banner").innerHTML = '<img src="./Images/img3.jpg" alt=""> <div class="main-inicio-banner-texto"> <h1>Planejamento de Refeições</h1> <p>Estratégias para o planejamento de refeições saudáveis, mesmo em meio a um estilo de vida agitado.</p> </div>'
    document.getElementById("img1").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img2").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img3").style.cssText =
    'filter: brightness(40%)'
    document.getElementById("img4").style.cssText =
    'filter: brightness(100%)'
    tempo = 4000;
}

const mudarElementoQuatro = () => {
    const pegarDiv = document.getElementById("banner").innerHTML = '<img src="./Images/img4.jpg" alt=""> <div class="main-inicio-banner-texto"> <h1>Fast Food e Comida Processada</h1> <p>Os impactos negativos do consumo frequente de fast food e alimentos altamente processados na saúde.</p> </div>'
    document.getElementById("img1").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img2").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img3").style.cssText =
    'filter: brightness(100%)'
    document.getElementById("img4").style.cssText =
    'filter: brightness(40%)'
    tempo = 4000;
}

function chamarFuncoes() {
    const funcoes = [mudarElementoUm, mudarElementoDois, mudarElementoTres, mudarElementoQuatro];
    let currentIndex = 0;

    function chamarProximaFuncao() {
      funcoes[currentIndex]();
      currentIndex = (currentIndex + 1) % funcoes.length;
    }

    setInterval(chamarProximaFuncao, tempo); // Chama a próxima função a cada 6 segundos
  }

chamarFuncoes()

const calcularImc = () => {
    let resultado;
    let imc;
    let img;
    let tipo;
    const dadosDoUsuario = document.getElementById('dados')
    const resultadoFinal = document.getElementById('resultado')
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    
    resultado = peso/altura**2

    if (!resultado){
        resultadoFinal.innerHTML = `<h2>Valor incorreto</h2>`;

    }else{

        if (idade < 60){
            tipo = 'Adulto'
            if (resultado < 18.5){
                imc = 'Baixo Peso'
                img = 'abaixo do peso.png'
            }else if (resultado >= 18.5 && resultado <= 24.5){
                imc = 'Peso Normal'
                img = 'peso normal.png'
            }else if (resultado >= 25 && resultado <= 29.9){
                imc = 'Excesso de Peso'
                img = 'acima do peso.png'
            }else if (resultado >= 30 && resultado <= 34.9){
                imc = 'Obesidade de Classe 1'
                img = 'obeso.png'
            }else if (resultado >= 35 && resultado <= 39.9){
                imc = 'Obesidade de Classe 2'
                img = 'obesidade 2.png'
            }else if (resultado >= 40){
                imc = 'Obesidade de Classe 4'
                img = 'obesidade 2.png'
            }

        }else if (idade >= 60){
            tipo = 'Idoso'
            if (resultado <= 22){
                imc = 'Baixo Peso'
                img = 'abaixo do peso.png'
            }else if (resultado > 22 && resultado < 27){
                imc = 'Adequado ou eutotrófico'
                img = 'peso normal.png'
            }else if (resultado >= 27){
                imc = 'Sobrepeso'
                img = 'acima do peso.png'
            }
        }

        dadosDoUsuario.innerHTML = `
        <div class="main-calccontainer-esquerdo-dados-img">
            <img src="../Images/${img}" alt="">
        </div>
        <div class="main-calccontainer-esquerdo-dados-texto">
            <p><span>Sua idade é: </span> ${idade}</p>
            <p><span>Você é: </span> ${tipo}</p>
            <p><span>Sua altura é de: </span> ${altura}m</p>
            <p><span>Seu peso é de: </span> ${peso}Kg</p>
            <p><span>Seu IMC é: </span> ${resultado}</p>
            <p><span>Sua classificação é: </span> ${imc}</p>
        </div>

        `;
        resultadoFinal.innerHTML = `<h2>${resultado}</h2>`;

    }
    
}