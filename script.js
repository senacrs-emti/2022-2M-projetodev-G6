
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
    case 'z':
      somSi()
    break;
 
  }
  switch (e.key) {
    case 'x':
      somLa()
    break;
 
  }

  switch (e.key) {
    case 'c':
      somFa()
    break;
 
  }

  switch (e.key) {
    case 'v':
      somRe()
    break;
  }
  switch (e.key) {
    case 'b':
      somSol()
    break;
  }
  switch (e.key) {
    case 'n':
      somSol()
    break;
  }

  switch (e.key) {
    case 'm':
      somMi()
    break;
  }
  switch (e.key) {
    case 'a':
      somDoagudo()
    break;
  }
  switch (e.key) {
    case 's':
      somDo()
    break;
  }
  switch (e.key) {
    case 'd':
      somDo()
    break;
  }
  switch (e.key) {
    case 'f':
      somMiagudo()
    break;
    }
    switch (e.key) {
      case 'g':
        somReagudo()
      break;
    }
    switch (e.key) {
      case 'h':
        somSolagudo()
      break;
    }
    switch (e.key) {
      case 'j':
        somFaagudo()
      break;
    }
  
  
    //alert(e.key);
});
  