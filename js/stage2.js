$(document).ready(function(event){

var $planety=$('.planety')

 
 function startBall1() {
        $("#SOLARIS").circulate({
            speed: 2500,
            height: 40,
            width: 70,
            sizeAdjustment: 90,
            loop: true,
            zIndexValues: [1, 100, 500, 100]
        });
    }

 function startBall2() {
        $("#KRYPTON").circulate({
            speed: 1500,
            height: 30,
            width: 80,
            sizeAdjustment: 90,
            loop: true,
            zIndexValues: [1, 100, 500, 100]
        });
    }


 function startBall3() {
        $("#GENEZIS").circulate({
    
            speed: 1000,
            height: 30,
            width: 40,
            sizeAdjustment: 80,
            loop: true,
            zIndexValues: [1, 5, 500, 100]

    });
 }
      function startBall4() {
        $("#HELIOPOLIS").circulate({
            speed: 2000,
            height: 20,
            width: 100,
            sizeAdjustment: 90,
            loop: true,
            zIndexValues: [1, 100, 500, 100]
        });
    }

startBall1();
startBall2();
startBall3();
startBall4();
});

/*

$planety.on('click',function(){

var $destinationPlanet =this;
$destinationPlanet=$($destinationPlanet).attr('id');
var $planetId=$(this).data("id");
var $actualPlanet = $('#ramka').data('planet');
if($actualPlanet===$destinationPlanet){
    alert('Jesteś na tej planecie');
$('a').attr('href','#');
    
}else{
  
var link='http://127.0.0.1:8000/stage3/'+$planetId;
$('.button').val('LECĘ NA ' + $destinationPlanet +'!');
}
$('a').attr('href',link);
});


*/