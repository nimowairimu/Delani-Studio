$(function () {
    let dtxt = $('#dtxt');
    let devtxt = $('#devtxt');
    let protxt = $('#protxt');
    let dicon = $('#dicon');
    let devicon = $('#devicon');
    let proicon = $('#proicon');

    $(dtxt).hide();
    $(devtxt).hide();
    $(protxt).hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(dtxt).show(500);
        $(dicon).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devtxt).show(500);
        $(devicon).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(protxt).show(500);
        $(proicon).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $(desp).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(devp, devtext).on('click', function () {
        $('.dev').slideDown();
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $('.pro').slideDown();
        $(prop).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })

    //Overlay images

    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });


    //Form Validation
    $("form#form").on('submit',function(event){
         event.preventDefault();
         let name = $("input#name").val();
         $('#form').ajaxChimp({
             url: 'https://gmail.us7.list-manage.com/subscribe/post?u=7aa1547296855bada1640d850&amp;id=ae514885e7',
             callback: callbackFunction
         });

         function callbackFunction (resp) {
             console.log(resp);
             if (resp.result === 'success') {
                 alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
              }else{
                  alert("Please provide your correct name and email!");
              }
          }
      });



});
