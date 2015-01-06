/**
* Created with jqtour.
* User: tuxik
* Date: 2015-01-06
* Time: 08:57 PM
* To change this template use Tools | Templates.
*/



$(document).ready(function() {

    
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});