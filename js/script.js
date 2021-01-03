$(document).ready(function() {

  $("#design").click(function(){
    $("#design-showing").toggle();
    $(".hide-design-image").toggle();
  })

  $("#development").click(function(){
    $("#development-showing").toggle();
    $(".hide-development-image").toggle();
  })

  $("#productManagement").click(function(){
    $("#product-management-showing").toggle();
    $(".hide-product-management").toggle();
  })

  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })

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
                 alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly");
              }else{
                  alert("Please provide your correct name and email!");
              }
          }
      });



});
