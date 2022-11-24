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

<p>botões do teclado</p>
<h3> a  s  d  f  g  h  j  k</h3>
<h2>z  x  c  v  b  n  m</h2>  
<div class= "teclado" >
     <div class="oitavo" ot1>
   
 
     
     <div class="branca-key"   id="teste-C" onclick="somSi();"> </div>
     
      <div class="preta-key" cs  id="teste-do"   onclick="somDo();"></div>
      <div class="branca-key" id="teste-d" onclick="somLa();" ></div>
      <div class="preta-key" ds id="teste-re"onclick="somRe();"></div>
      <div class="branca-key" id="teste-e" onclick="somFa();"></div>
      <div class="branca-key" id="teste-f"  onclick="somDoagudo();"></div>
      <div class="preta-key" fs id="teste-mi" onclick="somMi();"></div>
      <div class="branca-key" id="teste-t" onclick="somSol();"></div>
      <div class="preta-key" gs id="teste-sol" onclick="somSi();"></div>
      <div class="branca-key" id="a" onclick="somRe();"></div>
     
      <div class="branca-key "id="teste-b"  onclick="somSolagudo();"></div>
  </div> 
  
   </div>
   
   <p>Músicas que pode ser feitas no piano:</p>
  
<br>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/e838BE_MH6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/aqVscO_FPZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous">
</script>
<script src="script.js"></script>
  </body>
</html>
