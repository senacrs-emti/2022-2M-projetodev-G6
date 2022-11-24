
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

function somSi() {
  // descobre o elemento
  var element = document.getElementById("teste-sol");
  // adiciona a classe
  element.className = "preta-key selecionada";  
  // identifica o audio
  var audio = new Audio('./audios piano/si.mp3');
  // toca o audio
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
  
//element.className = "preta-key";
}                         
document.addEventListener('keydown', e => {
  
  switch (e.key) {
    case 'a':
      somDo()
      break;
      case 's':
      somSi()
      break;
      case 'd':
      somLa()
      break;
      case 'f':
      somRe()
      break;
      case 'g':
      somFa()
      break;
      case 'g':
      somFa()
      break;
      case 'h':
      somDoagudo()
      break;
      case 'j':
      somMi()
      break;
      case 'k':
      somSol()
      break;
      case 'l':
      somSi()
      break;
    }
    
  });
 
  