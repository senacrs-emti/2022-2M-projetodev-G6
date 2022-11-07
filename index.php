<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Piano</title>
</head>
<header>trabalho</header>

<body>
<h1> Piano virtual</h1>
<p>Toque nas teclas para tocar uma melodia e quem sabe descubre uma música secreta.</p>
  
<h2>botões do teclado</h2>
<h3>z,x,c,v,b,n,m,a,s,d,f,g,h,j,k.</h3>
  
<div class= "teclado" >
     <div class="oitavo" ot1>
   
 
     
     <div class="branca-key"   id="C" onclick="somSi();"> </div>
     
      <div class="preta-key" cs  id="do"   onclick="somDo();"></div>
      <div class="branca-key" id="d"onclick="somLa();" ></div>
      <div class="preta-key" ds id="re"onclick="somRe();"></div>
      <div class="branca-key"id="e"onclick="somFa();"></div>
      <div class="branca-key" id="f" onclick="somRe();"></div>
      <div class="preta-key" fs id="mi" onclick="somMi();"></div>
      <div class="branca-key" id="g" onclick="somSol();"></div>
      <div class="preta-key" gs id="sol"onclick="somSol();"></div>
      <div class="branca-key" id="a"onclick="somMi();"></div>
      <div class="preta-key"as id="la" onclick="somLa();"></div>
      <div class="branca-key "id="b"onclick="somDoagudo();"></div>
  </div> 
  



  <div class="oitavo" ot2>
      
      <div class="branca-key" id="f"  onclick="somMiagudo();"> </div>
       <div class="preta-key" cs id="da" onclick="somDoagudo();"></div>
       <div class="branca-key" id="d" onclick="somDo();"></div>
       <div class="preta-key"  ds id="de"onclick="somReagudo();"></div>
       <div class="branca-key" id="e"onclick="somFaagudo();"></div>
       <div class="branca-key" id="f"onclick="somSolagudo();"></div>
       <div class="preta-key"  fs id="di"onclick="somMiagudo();"></div>
       <div class="branca-key" id="g"onclick="somLaagudo();"></div>
       <div class="preta-key"  gs  id="do"onclick="somSolagudo();"></div>
       <div class="branca-key" id="a" onclick="somSiagudo();"></div>
       <div class="preta-key"as id="du"onclick="somLaagudo();"></div>
       <div class="branca-key "id="b" onclick="somReagudo();"></div>
   </div>  
   </div>
 

   <button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  let texto = prompt("desbloqueou uma música");
  if (texto != null) {
    document.getElementById("primeiro").innerHTML =
    "primeiro " + texto ;

    alert.getElementByID("primeiro");
  }
}
</script>
<iframe width="560" id="primeiro" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" id="segundo" height="315" src="https://www.youtube.com/embed/ZHwVBirqD2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous">
</script>
<script src="script.js"></script>
  </body>
</html>
