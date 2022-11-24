
const teclas = document.querySelectorAll(".oitavo > div")

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
  }

teclas.forEach(function(tecla){
 tecla.onmousedown = function(){
 tecla.classList.add("selecionada")

  }
  
  
tecla.onmouseup = () => desmarcar (tecla)
tecla.onmouseleave = () => desmarcar(tecla)
})

function somDo() {
  // descobre o elemento
  var element = document.getElementById("teste-do");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/do.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
}
  function somDo() {
    // descobre o elemento
    var element = document.getElementById("d");
    // adiciona a classe
    element.className = "branca-key selecionada";  
    // identifica o audio
    var audio = new Audio('./audios piano/do.mp3');
    // toca o audio
    audio.play();
    setTimeout(() => {
      element.className = "branca-key";  
    }, "200")
    
  
  //element.className = "preta-key";
}
function somSi() {
  // descobre o elemento
  var element = document.getElementById("teste-C");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/si.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
  

  //element.className = "preta-key";
}
function somLa() {
  // descobre o elemento
  var element = document.getElementById("teste-d");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/la.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
  

  //element.className = "preta-key";
}

function somRe() {
  // descobre o elemento
  var element = document.getElementById("teste-re");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/re.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
  

  //element.className = "preta-key";
}
function somFa() {
  // descobre o elemento
  var element = document.getElementById("teste-e");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/fa.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")

}
  function somDoagudo() {
    // descobre o elemento
    var element = document.getElementById("teste-f");
    // adiciona a classe
    element.className = "branca-key selecionada";  
    // identifica o audio
    var audio = new Audio('./audios piano/do-agudo.mp3');
    // toca o audio
    audio.play();
    setTimeout(() => {
      element.className = "branca-key";  
    }, "200")
    
  //element.className = "preta-key";
}
function somMi() {
  // descobre o elemento
  var element = document.getElementById("teste-mi");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/mi.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
  
//element.className = "preta-key";
}
function somSol() {
  // descobre o elemento
  var element = document.getElementById("teste-t");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/sol.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
  
//element.className = "preta-key";
}

function somLagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-sol");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/la-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
  
//element.className = "preta-key";
}                         

function somRe() {
  // descobre o elemento
  var element = document.getElementById("teste-a");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/re-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
  
//element.className = "preta-key";
}
function somRe() {
  // descobre o elemento
  var element = document.getElementById("teste-re");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/re.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
  
//element.className = "preta-key";
}                                                    
function somSolagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-b");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/sol-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
}                                            
function somMiagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-ag");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/mi-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
//element.className = "preta-key";
}                   
function somReagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-fa");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/re-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
//element.className = "preta-key";
}
function somLagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-sol");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/la-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
//element.className = "preta-key";
}
                                  
function somFaagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-rf");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/fa-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
//element.className = "preta-key";
}                         
function somSiagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-rf");
  // adiciona a classe
  element.className = "branca-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/fa-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")
//element.className = "preta-key";
}                                      
function somMiagudo() {
  // descobre o elemento
  var element = document.getElementById("teste-du");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/mi-agudo.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
//element.className = "preta-key";
}           
document.addEventListener('keydown', e => {
  
  switch (e.key) {
    case 'z':
      somDo()
      break;
      case 'x':
      somSi()
      break;
      case 'c':
      somLa()
      break;
      case 'v':
      somRe()
      break;
      case 'b':
      somFa()
      break;
      case 'n':
      somFa()
      break;
      case 'm':
      somDoagudo()
      break;
      case 'a':
      somMi()
      break;
      case 's':
      somSol()
      break;
      case 'd':
      somSi()
      break;
      case 'f':
        somReagudo()
        break;
        case 'g':
        somSolagudo()
        break;
      case 'h':
       somLagudo()
      break;
      case 'j':
        somFaagudo()
        break;
        case 'k':
          somMiagudo()
          break;
           
          }
    
  });
 
  