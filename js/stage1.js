/*
$(document).ready(function(event){
var $ships = $('.statek')
var $ramka = $('#ramka')


var $choice=$('#choice')
$ships.mouseenter(function(){
var $your_ship=this
$($your_ship).next('.opis').fadeIn('slow')
})
.mouseleave(function(){
var $your_ship=this

$($your_ship).next('.opis').fadeOut('slow')
});

})

*/


$(document).ready(function(event){

$('.statek').mouseenter(function(){
    var $your_ship=this
    var $your_discription=$(this).next('.opis')
    var $ship_clone=$(this).clone()
$(this).replaceWith($your_discription)
$your_discription.fadeIn('slow')


.mouseleave(function(){
    $(this).replaceWith($your_ship)
    $(this).fadeOut('slow')
    $your_discription.replaceWith($ship_clone)

})
})
})
