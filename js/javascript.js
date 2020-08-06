$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip;
    $('#carousel').carousel({interval: 2000, pause :false});

    $('.butn').click(function() {
        if( $('.butn').children('span').hasClass('fa fa-pause') )
        {
            alert('entering pause button');
            $('#carousel').carousel('pause');
            $('#carousel').children('span').removeClass('fa fa-pause');
            $('#carousel').children('span').addClass('fa fa-play');
        }
        else
        {
            alert('entering play button');
            $('#carousel').carousel('cycle');
            $('#carousel').children('span').removeClass('fa fa-play');
            $('#carousel').children('span').addClass('fa fa-pause');
        }
    });
    $('#reservebutton').click(function(){
        $('#reservemodal').modal('show');
    });
    $('#loginbutton').click(function(){
        $('#loginmodal').modal('show');
    });
});