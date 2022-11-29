
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
  
  }
  function somRe1() {
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
    
   
  }
  function somRe() {
    // descobre o elemento
    var element = document.getElementById("teste-a");
    // adiciona a classe
    element.className = "branca-key selecionada";  
    // identifica o audio
    var audio = new Audio('./audios piano/re.mp3');
    // toca o audio
    audio.play();
    setTimeout(() => {
      element.className = "branca-key";  
    }, "200")
    
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
  function somSiagudo() {
    // descobre o elemento
    var element = document.getElementById("teste-fa");
    // adiciona a classe
    element.className = "branca-key selecionada";  
    // identifica o audio
    var audio = new Audio('./audios piano/si-agudo.mp3');
    // toca o audio
    audio.play();
    setTimeout(() => {
      element.className = "branca-key";  
    }, "200")
 
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

    }
    function somDo2() {
      // descobre o elemento
      var element = document.getElementById("teste-dr");
      // adiciona a classe
      element.className = "branca-key selecionada";  
      // identifica o audio
      var audio = new Audio('./audios piano/do.mp3');
      // toca o audio
      audio.play();
      setTimeout(() => {
        element.className = "branca-key";  
      }, "200")

    }
    function somReagudo() {
      // descobre o elemento
      var element = document.getElementById("teste-pi");
      // adiciona a classe
      element.className = "preta-key selecionada";  
      // identifica o audio
      var audio = new Audio('./audios piano/re-agudo.mp3');
      // toca o audio
      audio.play();
      setTimeout(() => {
        element.className = "preta-key";  
      }, "200")

    }
    function somReagudo() {
      // descobre o elemento
      var element = document.getElementById("teste-pi");
      // adiciona a classe
      element.className = "preta-key selecionada";  
      // identifica o audio
      var audio = new Audio('./audios piano/re-agudo.mp3');
      // toca o audio
      audio.play();
      setTimeout(() => {
        element.className = "preta-key";  
      }, "200")

    }
    function somFaagudo4() {
      // descobre o elemento
      var element = document.getElementById("teste-o");
      // adiciona a classe
      element.className = "branca-key selecionada";  
      // identifica o audio
      var audio = new Audio('./audios piano/fa-agudo.mp3');
      // toca o audio
      audio.play();
      setTimeout(() => {
        element.className = "branca-key";  
      }, "200")

    }
    function somSi() {
      // descobre o elemento
      var element = document.getElementById("teste-c");
      // adiciona a classe
      element.className = "branca-key selecionada";  
      // identifica o audio
      var audio = new Audio('./audios piano/si.mp3');
      // toca o audio
      audio.play();
      setTimeout(() => {
        element.className = "branca-key";  
      }, "200")
    
    

  }           
document.addEventListener('keydown', e => {
  
  switch (e.key) {
    case 'z':
      somDo()
      break;
      case 'x':
      somLa()
      break;
      case 'c':
      somRe1()
      break;
      case 'v':
      somFa()
      break;
      case 'b':
      somDoagudo()
      break;
      case 'n':
      somMi()
      break;
      case 'm':
      somSol()
      break;
      case 'a':
      somLagudo()
      break;
      case 's':
      somRe()
      break;
      case 'd':
      somSolagudo()
      break;
      case 'f':
      somSiagudo()
      break;
      case 'g':
      somFaagudo()
      break;
      case 'h':
      somMiagudo()
      break;
      case 'j':
      somDo2()
      break;
      case 'k':
      somReagudo()
      break;
      case 'l':
        somFaagudo4()
        break;
        
    }

    
  });
 
  