
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
  var element = document.getElementById("do");
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

function somRe() {
  var element = document.getElementById("re");
  element.className = "preta-key selecionada";  
  var audio = new Audio('./audios piano/re.mp3');
  audio.play();
  // remove a classe selecionada
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
    
  }
function somMi() {
  var element = document.getElementById("b");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/mi.mp3');
audio.play();
setTimeout(() => {
  element.className = "branca-key";  
}, "200")
  
    }

function somFa() {
  var element = document.getElementById("e");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/fa.mp3');
 audio.play();
 setTimeout(() => {
  element.className = "branca-key";  
}, "200")
      
      }

function somSol() {
  var element = document.getElementById("t");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/sol.mp3');
audio.play();
setTimeout(() => {
  element.className = "branca-key";  
}, "200")
        }

function somLa() {
  var element = document.getElementById("la");
  element.className = "preta-key selecionada";  
var audio = new Audio('./audios piano/la.mp3');
 audio.play();
 setTimeout(() => {
  element.className = "preta-key";  
}, "200")
          
          }

function somSi() {
  var element = document.getElementById("sol");
  element.className = "preta-key selecionada";  
var audio = new Audio('./audios piano/si.mp3');
audio.play();
setTimeout(() => {
  element.className = "preta-key";  
}, "200")
            }

function somDoagudo() {
  var element = document.getElementById("da");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/do-agudo.mp3');
audio.play();
setTimeout(() => {
  element.className = "branca-key";  
}, "200")
              }
              
function somMiagudo() {
  var element = document.getElementById("f");
  element.className = "preta-key selecionada";  
 var audio = new Audio('./audios piano/mi-agudo.mp3');
 audio.play();
 setTimeout(() => {
  element.className = "preta-key";  
}, "200")
                
}

function somFaagudo() {
  var element = document.getElementById("e");
  element.className = "preta-key selecionada";  
 var audio = new Audio('./audios piano/fa-agudo.mp3');
  audio.play();
  setTimeout(() => {
    element.className = "preta-key";  
  }, "200")
                  
 }

function somSolagudo() {
  var element = document.getElementById("di");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/sol-agudo.mp3');
audio.play();
setTimeout(() => {
  element.className = "branca-key";  
}, "200")
}
function somLaagudo() {
  var element = document.getElementById("g");
  element.className = "branca-key selecionada";  
 var audio = new Audio('./audios piano/la-agudo.mp3');
  audio.play();
  setTimeout(() => {
    element.className = "branca-key";  
  }, "200")             
}
function somSiagudo() {
  var element = document.getElementById("a");
  element.className = "preta-key selecionada";  
var audio = new Audio('./audios piano/si-agudo.mp3');
audio.play();
setTimeout(() => {
  element.className = "preta-key";  
}, "200")
                        
}
function somReagudo() {
  var element = document.getElementById("b");
  element.className = "branca-key selecionada";  
var audio = new Audio('./audios piano/re-agudo.mp3');
audio.play();
setTimeout(() => {
  element.className = "branca-key";  
}, "200")
}
                          
document.addEventListener('keydown', e => {
  
  switch (e.key) {
    case 'a':
      somDo()
      break;
    case 's':
      somRe()
    break;
    case 'd':
      somMi()
    case 'f':
      somFa()
    break;
    case 'g':
      somSol()
    case 'h':
      somLa()
    break;
    case 'j':
      somSi()
    break;
    case 'z':
      somDoagudo()
    break;
    case 'x':
      somReagudo()
    break;
    case 'c':
      somMiagudo()
    break;
    case 'v':
      somFaagudo()
    break;
      case 'b':
        somSolagudo()
      break;
      case 'n':
        somLaagudo()
      break;
      case 'm':
        somSiagudo()
      break;
    }

  });
 
  