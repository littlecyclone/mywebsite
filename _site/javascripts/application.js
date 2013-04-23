
$(document).ready(function(){
$('span.year').hide();

var selected = ($('body').attr('id'));
$('nav li a').filter('.'+selected).css('color', 'red');
//(selected.hasClass('selected'))? $(this).removeClass(): $('.selected').removeClass(); $(this).addClass('selected')

});

