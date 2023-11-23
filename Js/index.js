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