
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
var audio = new Audio('./audios piano/do.mp3');
audio.play();

}

function somRe() {
var audio = new Audio('./audios piano/re.mp3');
audio.play();
  
  }
function somMi() {
var audio = new Audio('./audios piano/mi.mp3');
audio.play();
    
    }

function somFa() {
var audio = new Audio('./audios piano/fa.mp3');
 audio.play();
      
      }

function somSol() {
var audio = new Audio('./audios piano/sol.mp3');
audio.play();
        
        }

function somLa() {
var audio = new Audio('./audios piano/la.mp3');
 audio.play();
          
          }

function somSi() {
var audio = new Audio('./audios piano/si.mp3');
audio.play();
            
            }

function somDoagudo() {
var audio = new Audio('./audios piano/do-agudo.mp3');
audio.play();
              
              }
              
function somMiagudo() {
 var audio = new Audio('./audios piano/mi-agudo.mp3');
 audio.play();
                
}

function somFaagudo() {
 var audio = new Audio('./audios piano/fa-agudo.mp3');
  audio.play();
                  
 }

function somSolagudo() {
var audio = new Audio('./audios piano/sol-agudo.mp3');
audio.play();
                    
}
function somLaagudo() {
 var audio = new Audio('./audios piano/la-agudo.mp3');
  audio.play();
                      
}
function somSiagudo() {
var audio = new Audio('./audios piano/si-agudo.mp3');
audio.play();
                        
}
function somReagudo() {
var audio = new Audio('./audios piano/re-agudo.mp3');
audio.play();
                          
}
                          
document.addEventListener('keydown', e => {
  
  switch (e.key) {
    case 'a':
      somDo()
      break;
      
 
  }
  switch (e.key) {
    case 's':
      somRe()
    break;
 
  }

  switch (e.key) {
    case 'd':
      somMi()
    break;
 
  }

  switch (e.key) {
    case 'f':
      somFa()
    break;
  }
  switch (e.key) {
    case 'g':
      somSol()
    break;
  }
  switch (e.key) {
    case 'h':
      somLa()
    break;
  }

  switch (e.key) {
    case 'j':
      somSi()
    break;
  }
  switch (e.key) {
    case 'z':
      somDoagudo()
    break;
  }
  switch (e.key) {
    case 'x':
      somReagudo()
    break;
  }
  switch (e.key) {
    case 'c':
      somMiagudo()
    break;
  }
  switch (e.key) {
    case 'v':
      somFaagudo()
    break;
    }
    switch (e.key) {
      case 'b':
        somSolagudo()
      break;
    }
    switch (e.key) {
      case 'n':
        somLaagudo()
      break;
    }
    switch (e.key) {
      case 'm':
        somSiagudo()
      break;
    }
    
  
    //alert(e.key);

  });
 
  