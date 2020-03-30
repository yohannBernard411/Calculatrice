var duoOperateur=false;
var decimal=false;
var apresOperateur=false;
var ouverte=false;
var frame = 20;
var fond = 0;
var couleurs = ["red", "deeppink", "orangered", "magenta", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];

function chiffre(chiffre, btn){
   duoOperateur=false;
   apresOperateur=false;
   document.getElementById("label").innerText += chiffre;
   eclatement(btn);
}
function operateur(signe, btn){
   if (!duoOperateur){
      document.getElementById("label").innerText += signe;
      duoOperateur=true;
      decimal=false;
      apresOperateur=true;
      eclatement(btn);
   }
}
function virgule(btn){
   if (!decimal && !apresOperateur){
      document.getElementById("label").innerText += ".";
      decimal=true;
      eclatement(btn)
   }
}
function resetAll(btn){
   document.getElementById("label").innerText = "";
   eclatement(btn);
}
function parentheses(btn){
   if (!ouverte && apresOperateur){
      document.getElementById("label").innerText += "(";
      ouverte = true;
   }else if(ouverte){
      document.getElementById("label").innerText += ")";
      ouverte = false;
   }
   eclatement(btn);
}
function retour(btn){
   if (document.getElementById("label").innerText.substr (-1)=="("){
      ouverte = false;
   }
   if (document.getElementById("label").innerText.substr (-1)==")"){
      ouverte = true;
   }
   document.getElementById("label").innerText = document.getElementById("label").innerText.slice(0, -1);
   eclatement(btn);
}
function resultat(btn){
   if (document.getElementById("label").innerText == "0+0"){
      document.getElementById("label").innerText = "😜😜LA TÊTE À TOTO😜😜";
   }else {
  var solde = eval(document.getElementById("label").innerText);
  document.getElementById("label").innerText = solde;
  }
  duoOperateur=false;
  apresOperateur=false;
  eclatement(btn);
}
function eclatement(btn){
   btn.style.background = "url('images/Bb1.png')";
   btn.style.backgroundSize = "cover";
   window.setTimeout(etape1, frame);
   function etape1(){
      btn.style.background = "url('images/Bb2.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape2, frame);
   }
   function etape2(){
      btn.style.background = "url('images/Bb3.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape3, frame);
   }
   function etape3(){
      btn.style.background = "url('images/Bb4.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape4, frame);
   }
   function etape4(){
      btn.style.background = "url('images/Bb5.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape5, frame);
   }
   function etape5(){
      btn.style.background = "url('images/Bb6.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape6, frame);
   }
   function etape6(){
      btn.style.background = "url('images/Bb7.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape7, frame);
   }
   function etape7(){
      btn.style.background = "url('images/Bb8.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape8, frame);
   }
   function etape8(){
      btn.style.background = "url('images/Bb9.png')";
      btn.style.backgroundSize = "cover";
      window.setTimeout(etape9, frame);
   }
   function etape9(){
      btn.style.background = "url('images/Base.png')";
      btn.style.backgroundSize = "cover";
      btn.classList.add("apparition");
      window.setTimeout(enleverClass, 3000);
      function enleverClass(){
         btn.classList.remove("apparition");
      }
   }
}
function changeColor(){
   fond +=1;
   if (fond==11){
      fond=0;
   }
   document.getElementById("label").style.backgroundColor = couleurs[fond];
}