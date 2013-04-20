
$(document).ready(function(){
$('span.year').hide();

$('nav li a').click(function(){
  ($(this).hasClass('selected'))? $(this).removeClass(): $('.selected').removeClass(); $(this).addClass('selected')
});

});