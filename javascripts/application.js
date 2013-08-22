
$(document).ready(function(){
$('span.year').hide();

var selected = ($('body').attr('id'));
$('nav li a').filter('.'+selected).css('color', '#1BAFBF');
//(selected.hasClass('selected'))? $(this).removeClass(): $('.selected').removeClass(); $(this).addClass('selected')

});

