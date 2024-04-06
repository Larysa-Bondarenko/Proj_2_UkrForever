
//accordion
$(document).ready(function(){
    $('.accordion-content').hide();
    $('#accordion-btn-1').on('click', () =>{
         $('#accordion-content-1').toggle();
         $('#accordion-content-2').hide();
         $('#accordion-content-3').hide();
         $('#accordion-content-4').hide();
         $('#down1').toggleClass('rotate');
         $('#down2').removeClass('rotate');
         $('#down3').removeClass('rotate');
         $('#down4').removeClass('rotate');
    });
    $('#accordion-btn-2').on('click', ()=>{
        $('#accordion-content-2').toggle();
        $('#accordion-content-1').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-4').hide();
        $('#down2').toggleClass('rotate');
        $('#down1').removeClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down4').removeClass('rotate');
    })
    $('#accordion-btn-3').on('click', ()=>{
        $('#accordion-content-3').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-1').hide();
        $('#accordion-content-4').hide();
        $('#down3').toggleClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down1').removeClass('rotate');
        $('#down4').removeClass('rotate');
    })
    $('#accordion-btn-4').on('click', ()=>{
        $('#accordion-content-4').toggle();
        $('#accordion-content-2').hide();
        $('#accordion-content-3').hide();
        $('#accordion-content-1').hide();
        $('#down4').toggleClass('rotate');
        $('#down2').removeClass('rotate');
        $('#down3').removeClass('rotate');
        $('#down1').removeClass('rotate');
    })
})